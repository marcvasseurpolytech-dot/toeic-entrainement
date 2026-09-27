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
  return JSON.parse(Buffer.from(d.content, 'base64').toString('utf8'));
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Hash');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // Auth via header or query param
  const hash = req.headers['x-admin-hash'] || req.query?.hash;
  if (!hash || hash !== ADMIN_HASH) return res.status(403).json({ error: 'Non autorisé' });

  const token    = process.env.GITHUB_TOKEN;
  if (!token)    return res.status(500).json({ error: 'Token manquant' });

  const resource = req.query?.resource || 'scores';
  if (resource === 'students') {
    const data = await ghGet('data/students.json', token);
    // Strip code hashes before returning
    const safe = (data?.students || []).map(({ codeHash, ...rest }) => rest);
    return res.json({ students: safe });
  }
  if (resource === 'scores') {
    const data = await ghGet('data/scores.json', token);
    return res.json({ scores: data?.scores || [] });
  }
  return res.status(400).json({ error: 'Resource inconnue' });
};
