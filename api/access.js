const REPO = process.env.DATA_REPO || 'marcvasseurpolytech-dot/toeic-entrainement';
const FILE = 'data/access.json';
const API  = 'https://api.github.com';

const { isAdmin, CLASSES } = require('./_lib');

async function ghGet(path, token) {
  const r = await fetch(`${API}/repos/${REPO}/contents/${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' }
  });
  if (!r.ok) return null;
  const d = await r.json();
  return { data: JSON.parse(Buffer.from(d.content, 'base64').toString('utf8')), sha: d.sha };
}

async function ghPut(path, content, sha, token) {
  const body = {
    message: `update ${path}`,
    content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64')
  };
  if (sha) body.sha = sha;
  const r = await fetch(`${API}/repos/${REPO}/contents/${path}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return r.ok;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'Missing token' });

  // GET — public. Students need to know which tests are currently open, and for which classes.
  // A test id missing from `tests` defaults to open; a test with no entry (or an empty list)
  // in `classes` is open to every class.
  if (req.method === 'GET') {
    const file = await ghGet(FILE, token);
    return res.json({ tests: file?.data?.tests || {}, classes: file?.data?.classes || {} });
  }

  // POST — admin only.
  //   { testId, open }          toggles one test open/closed
  //   { tests: {id: bool, ...} } several at once ("close all" / "open all")
  //   { testId, classes: [...] } classes allowed to take that test ([] = every class)
  //   { matrix: {id: [classes]} } departments ticked per test (none = closed, all = everyone)
  if (req.method === 'POST') {
    if (!isAdmin(req)) return res.status(403).json({ error: 'Unauthorized' });

    const { testId, open, tests: bulkTests, classes, matrix } = req.body || {};

    let apply;
    if (matrix && typeof matrix === 'object' && !Array.isArray(matrix)) {
      // { matrix: { testId: [departments], ... } }: the departments ticked for each test.
      // Several departments = open to them; all of them = open to everyone; none = closed.
      const entries = Object.entries(matrix);
      if (!entries.length || entries.length > 200 || !entries.every(([id, l]) => typeof id === 'string' && id.length < 100 && Array.isArray(l) && l.every(c => CLASSES.includes(c)))) {
        return res.status(400).json({ error: 'Unknown class' });
      }
      apply = cur => {
        cur.tests = { ...cur.tests }; cur.classes = { ...cur.classes };
        entries.forEach(([id, l]) => {
          const list = CLASSES.filter(c => l.includes(c));
          cur.tests[id] = list.length > 0;
          if (list.length && list.length < CLASSES.length) cur.classes[id] = list; else delete cur.classes[id];
        });
      };
    } else if (bulkTests && typeof bulkTests === 'object') {
      apply = cur => { cur.tests = { ...cur.tests, ...bulkTests }; };
    } else if (testId && Array.isArray(classes)) {
      if (typeof testId !== 'string' || !classes.every(c => CLASSES.includes(c))) {
        return res.status(400).json({ error: 'Unknown class' });
      }
      const list = CLASSES.filter(c => classes.includes(c));
      apply = cur => {
        if (list.length && list.length < CLASSES.length) cur.classes = { ...cur.classes, [testId]: list };
        else { cur.classes = { ...cur.classes }; delete cur.classes[testId]; }
      };
    } else if (testId && typeof open === 'boolean') {
      apply = cur => { cur.tests = { ...cur.tests, [testId]: open }; };
    } else {
      return res.status(400).json({ error: 'Missing data' });
    }

    for (let attempt = 0; attempt < 3; attempt++) {
      const file = await ghGet(FILE, token);
      const cur = { tests: { ...(file?.data?.tests || {}) }, classes: { ...(file?.data?.classes || {}) } };
      apply(cur);
      const ok = await ghPut(FILE, cur, file?.sha, token);
      if (ok) return res.json({ success: true, tests: cur.tests, classes: cur.classes });
    }
    return res.status(500).json({ error: 'SHA conflict — try again.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
