const REPO = 'marcvasseurpolytech-dot/toeic-entrainement';
const FILE = 'data/access.json';
const API  = 'https://api.github.com';

// Admin code — same password as Suivi Scores TOEIC
const ADMIN_HASH = 'f7ff32b790557d7601029bc0b296115f82e18d799b6e27ba0c6202fdbd1f2a08';

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
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Hash');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'Missing token' });

  // GET — public. Students need to know which tests are currently open.
  // Any test id not present in the file defaults to open (true).
  if (req.method === 'GET') {
    const file = await ghGet(FILE, token);
    return res.json({ tests: file?.data?.tests || {} });
  }

  // POST — admin only.
  // Body { testId, open } toggles a single test.
  // Body { tests: { id1: bool, id2: bool, ... } } updates several at once
  // in a single write (used for "close all" / "open all").
  if (req.method === 'POST') {
    const hash = req.headers['x-admin-hash'];
    if (!hash || hash !== ADMIN_HASH) return res.status(403).json({ error: 'Unauthorized' });

    const { testId, open, tests: bulkTests } = req.body || {};

    if (bulkTests && typeof bulkTests === 'object') {
      for (let attempt = 0; attempt < 3; attempt++) {
        const file = await ghGet(FILE, token);
        const tests = { ...(file?.data?.tests || {}), ...bulkTests };
        const ok = await ghPut(FILE, { tests }, file?.sha, token);
        if (ok) return res.json({ success: true, tests });
      }
      return res.status(500).json({ error: 'SHA conflict — try again.' });
    }

    if (!testId || typeof open !== 'boolean') return res.status(400).json({ error: 'Missing data' });

    for (let attempt = 0; attempt < 3; attempt++) {
      const file = await ghGet(FILE, token);
      const tests = { ...(file?.data?.tests || {}), [testId]: open };
      const ok = await ghPut(FILE, { tests }, file?.sha, token);
      if (ok) return res.json({ success: true, tests });
    }
    return res.status(500).json({ error: 'SHA conflict — try again.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
