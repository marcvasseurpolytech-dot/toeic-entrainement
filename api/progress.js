const REPO = 'marcvasseurpolytech-dot/toeic-entrainement';
const FILE = 'data/progress.json';
const API  = 'https://api.github.com';

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'Missing token' });

  // GET — retrieve saved in-progress answers for a student+test
  if (req.method === 'GET') {
    const nom    = (req.query?.nom || '').trim().toUpperCase();
    const testId = req.query?.testId || '';
    if (!nom || !testId) return res.status(400).json({ error: 'Missing parameters' });
    const file = await ghGet(FILE, token);
    const all  = file?.data?.progress || [];
    const entry = all.find(p => p.nom === nom && p.testId === testId);
    return res.json({ progress: entry || null });
  }

  // POST — upsert in-progress answers (debounced client-side, not per keystroke)
  if (req.method === 'POST') {
    const { nom, testId, answers, startTime } = req.body || {};
    if (!nom || !testId || !Array.isArray(answers)) {
      return res.status(400).json({ error: 'Missing data' });
    }
    const nomUpper = nom.trim().toUpperCase();
    for (let attempt = 0; attempt < 3; attempt++) {
      const file = await ghGet(FILE, token);
      const all  = file?.data?.progress || [];
      const idx  = all.findIndex(p => p.nom === nomUpper && p.testId === testId);
      const entry = { nom: nomUpper, testId, answers, startTime, updatedAt: new Date().toISOString() };
      if (idx >= 0) all[idx] = entry; else all.push(entry);
      const ok = await ghPut(FILE, { progress: all }, file?.sha, token);
      if (ok) return res.json({ success: true });
    }
    return res.status(500).json({ error: 'SHA conflict — try again.' });
  }

  // DELETE — clear progress once a test is submitted
  if (req.method === 'DELETE') {
    const nom    = (req.query?.nom || '').trim().toUpperCase();
    const testId = req.query?.testId || '';
    if (!nom || !testId) return res.status(400).json({ error: 'Missing parameters' });
    for (let attempt = 0; attempt < 3; attempt++) {
      const file = await ghGet(FILE, token);
      const all  = (file?.data?.progress || []).filter(p => !(p.nom === nom && p.testId === testId));
      const ok = await ghPut(FILE, { progress: all }, file?.sha, token);
      if (ok) return res.json({ success: true });
    }
    return res.status(500).json({ error: 'SHA conflict — try again.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
