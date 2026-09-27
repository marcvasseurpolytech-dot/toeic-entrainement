const REPO  = 'marcvasseurpolytech-dot/toeic-entrainement';
const FILE  = 'data/students.json';
const API   = 'https://api.github.com';

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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'Missing token' });

  const { action, nom, prenom, dept, codeHash } = req.body || {};
  if (!nom || !codeHash) return res.status(400).json({ error: 'Missing data' });

  const nomUpper = nom.trim().toUpperCase();

  const file = await ghGet(FILE, token);
  const students = file?.data?.students || [];

  if (action === 'login') {
    const s = students.find(x => x.nom === nomUpper && x.codeHash === codeHash);
    if (!s) return res.status(401).json({ error: 'Incorrect name or code.' });
    return res.json({ student: { nom: s.nom, prenom: s.prenom, dept: s.dept } });
  }

  if (action === 'signup') {
    if (!prenom || !dept) return res.status(400).json({ error: 'All fields are required.' });
    if (students.find(x => x.nom === nomUpper)) {
      return res.status(409).json({ error: `The name "${nomUpper}" is already registered. Please log in instead.` });
    }
    const newStudent = {
      nom: nomUpper,
      prenom: prenom.trim(),
      dept: dept.trim(),
      codeHash,
      createdAt: new Date().toISOString()
    };
    students.push(newStudent);
    const ok = await ghPut(FILE, { students }, file?.sha, token);
    if (!ok) return res.status(500).json({ error: 'Error while saving.' });
    return res.json({ student: { nom: nomUpper, prenom: prenom.trim(), dept: dept.trim() } });
  }

  return res.status(400).json({ error: 'Unknown action.' });
};
