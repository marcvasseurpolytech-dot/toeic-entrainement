const REPO = 'marcvasseurpolytech-dot/toeic-entrainement';
const API  = 'https://api.github.com';

// Admin code — même mot de passe que Suivi Scores TOEIC
const ADMIN_HASH = 'f7ff32b790557d7601029bc0b296115f82e18d799b6e27ba0c6202fdbd1f2a08';

const crypto = require('crypto');

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
    message: `admin reset ${path}`,
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
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Hash');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Auth via header or query param
  const hash = req.headers['x-admin-hash'] || req.query?.hash;
  if (!hash || hash !== ADMIN_HASH) return res.status(403).json({ error: 'Non autorisé' });

  const token = process.env.GITHUB_TOKEN;
  if (!token)  return res.status(500).json({ error: 'Token manquant' });

  const resource = req.query?.resource || 'scores';

  if (req.method === 'GET') {
    if (resource === 'students') {
      const file = await ghGet('data/students.json', token);
      // Strip code hashes before returning
      const safe = (file?.data?.students || []).map(({ codeHash, ...rest }) => rest);
      return res.json({ students: safe });
    }
    if (resource === 'scores') {
      const file = await ghGet('data/scores.json', token);
      return res.json({ scores: file?.data?.scores || [] });
    }
    return res.status(400).json({ error: 'Resource inconnue' });
  }

  // DELETE — wipe all results (scores + any lingering in-progress attempts).
  // Student accounts (data/students.json) are never touched here.
  if (req.method === 'DELETE') {
    if (resource !== 'scores') return res.status(400).json({ error: 'Resource inconnue' });
    for (let attempt = 0; attempt < 3; attempt++) {
      const scoresFile = await ghGet('data/scores.json', token);
      const ok1 = await ghPut('data/scores.json', { scores: [] }, scoresFile?.sha, token);
      if (!ok1) continue;
      const progressFile = await ghGet('data/progress.json', token);
      await ghPut('data/progress.json', { progress: [] }, progressFile?.sha, token);
      return res.json({ success: true });
    }
    return res.status(500).json({ error: 'Conflit SHA — réessaie.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

