// Course activity tracking (course page rtbf.html). One JSON file per student per course,
// stored in the data repo (DATA_REPO), so saving never redeploys the site and two students
// never write the same file.
//   POST  { nom, codeHash, courseId, record }  student saves their own record
//   GET   ?courseId&nom   + X-Code-Hash        student reads their own record (resume on another device)
//   GET   ?courseId&all=1 + admin token        summaries of every student
//   GET   ?courseId&nom   + admin token        one full record
const crypto = require('crypto');
const { ghGet, ghPut, verifyStudent, isAdmin } = require('./_lib');

const REPO = process.env.DATA_REPO || 'marcvasseurpolytech-dot/toeic-entrainement';
const API = 'https://api.github.com';
const COURSES = ['course-rtbf'];
const MAX_BYTES = 240000;

const slug = nom => {
  const n = String(nom).trim().toUpperCase();
  return n.replace(/[^A-Z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) + '-' + crypto.createHash('sha256').update(n).digest('hex').slice(0, 6);
};
const pathOf = (courseId, nom) => `data/course/${courseId}/${slug(nom)}.json`;

async function listDir(courseId, token) {
  const r = await fetch(`${API}/repos/${REPO}/contents/data/course/${courseId}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' }
  });
  if (!r.ok) return [];
  const d = await r.json();
  return Array.isArray(d) ? d.filter(x => x.type === 'file' && x.name.endsWith('.json')).map(x => x.path) : [];
}

async function pool(items, size, fn) {
  const out = new Array(items.length); let i = 0;
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k]); }
  }));
  return out;
}

const words = s => (String(s || '').trim().match(/\S+/g) || []).length;

// Small summary used by the admin table (the full record is fetched on demand).
function summarize(rec) {
  const answers = Array.isArray(rec.answers) ? rec.answers : [];
  const filled = answers.filter(a => words(a.text) > 0);
  const quizAtt = Array.isArray(rec.quiz?.attempts) ? rec.quiz.attempts : [];
  const best = quizAtt.filter(a => Number.isFinite(a.score)).reduce((m, a) => Math.max(m, a.score), -1);
  const reveals = Array.isArray(rec.reveals) ? rec.reveals : [];
  return {
    nom: rec.nom, prenom: rec.prenom || '', dept: rec.dept || '',
    firstSeen: rec.firstSeen || null, lastSeen: rec.lastSeen || null,
    sessions: Array.isArray(rec.sessions) ? rec.sessions.length : 0,
    activeSec: rec.activeSec || 0, tabs: rec.tabs || {},
    fields: answers.length, filled: filled.length, words: filled.reduce((n, a) => n + words(a.text), 0),
    typeSec: answers.reduce((n, a) => n + (a.typeSec || 0), 0),
    pastes: answers.reduce((n, a) => n + (a.pastes || 0), 0),
    pastedChars: answers.reduce((n, a) => n + (a.pastedChars || 0), 0),
    reveals: reveals.length, revealsBlank: reveals.filter(x => !x.answered).length,
    quizBest: best, quizAttempts: quizAtt.length,
    quizSecs: quizAtt.length ? (quizAtt[quizAtt.length - 1].secs || 0) : 0,
    links: rec.clicks?.further ? Object.keys(rec.clicks.further).length : 0,
    updatedAt: rec.updatedAt || null
  };
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Code-Hash');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'Missing token' });

  if (req.method === 'POST') {
    const { nom, codeHash, courseId, record } = req.body || {};
    if (!COURSES.includes(courseId) || !record || typeof record !== 'object' || Array.isArray(record)) return res.status(400).json({ error: 'Missing data' });
    if (JSON.stringify(record).length > MAX_BYTES) return res.status(413).json({ error: 'Record too large' });
    if (!(await verifyStudent(nom, codeHash, token))) return res.status(403).json({ error: 'Unauthorized' });
    const path = pathOf(courseId, nom);
    const rec = { ...record, nom: String(nom).trim().toUpperCase(), updatedAt: new Date().toISOString() };
    for (let attempt = 0; attempt < 3; attempt++) {
      const cur = await ghGet(path, token);
      if (await ghPut(path, rec, cur?.sha, token, `course ${courseId} ${rec.nom}`)) return res.json({ success: true });
    }
    return res.status(500).json({ error: 'SHA conflict, try again.' });
  }

  if (req.method === 'GET') {
    const courseId = req.query?.courseId || '';
    if (!COURSES.includes(courseId)) return res.status(400).json({ error: 'Unknown course' });
    const nom = String(req.query?.nom || '').trim();

    if (isAdmin(req)) {
      if (req.query?.all) {
        const paths = await listDir(courseId, token);
        const stu = await ghGet('data/students.json', token);
        const byNom = new Map((stu?.data?.students || []).map(s => [String(s.nom).toUpperCase(), s]));
        const recs = await pool(paths, 12, p => ghGet(p, token));
        const list = recs.filter(Boolean).map(f => {
          const s = summarize(f.data), st = byNom.get(String(f.data.nom).toUpperCase());
          if (st) { s.prenom = st.prenom || s.prenom; s.dept = st.dept || s.dept; }
          if (req.query?.full) s.record = f.data;
          return s;
        });
        return res.json({ students: list });
      }
      if (nom) {
        const f = await ghGet(pathOf(courseId, nom), token);
        return res.json({ record: f?.data || null });
      }
      return res.status(400).json({ error: 'Missing parameters' });
    }

    const codeHash = req.headers['x-code-hash'] || '';
    if (!nom || !(await verifyStudent(nom, codeHash, token))) return res.status(403).json({ error: 'Unauthorized' });
    const f = await ghGet(pathOf(courseId, nom), token);
    return res.json({ record: f?.data || null });
  }
  return res.status(405).json({ error: 'Method not allowed' });
};
