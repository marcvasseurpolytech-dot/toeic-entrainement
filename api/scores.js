const REPO = 'marcvasseurpolytech-dot/toeic-entrainement';
const FILE = 'data/scores.json';
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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'Token manquant' });

  // GET — fetch scores for a student
  if (req.method === 'GET') {
    const nom = (req.query?.nom || '').trim().toUpperCase();
    if (!nom) return res.status(400).json({ error: 'Nom requis' });
    const file = await ghGet(FILE, token);
    const all  = file?.data?.scores || [];
    const mine = all.filter(s => s.nom === nom).map(s => ({
      testId: s.testId, score: s.score, total: s.total, date: s.date, answers: s.answers || []
    }));
    return res.json({ scores: mine });
  }

  // POST — save a new score
  if (req.method === 'POST') {
    const { nom, testId, score, total, answers, date } = req.body || {};
    if (!nom || !testId || score === undefined || !total) {
      return res.status(400).json({ error: 'Données manquantes' });
    }
    // Retry loop for SHA conflicts
    for (let attempt = 0; attempt < 3; attempt++) {
      const file   = await ghGet(FILE, token);
      const scores = file?.data?.scores || [];
      scores.push({
        nom: nom.trim().toUpperCase(),
        testId,
        score: parseInt(score),
        total: parseInt(total),
        answers: answers || [],
        date: date || new Date().toISOString()
      });
      const ok = await ghPut(FILE, { scores }, file?.sha, token);
      if (ok) return res.json({ success: true });
    }
    return res.status(500).json({ error: 'Conflit SHA — réessaie.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
