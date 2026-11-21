// Course activity tracking (course page rtbf.html). One JSON file per student per course,
// stored in the data repo (DATA_REPO), so saving never redeploys the site and two students
// never write the same file.
//   POST  { nom, codeHash, courseId, record }  student saves their own record
//   GET   ?courseId&nom   + X-Code-Hash        student reads their own record (resume on another device)
//   GET   ?courseId&all=1 + admin token        summaries of every student
//   GET   ?courseId&nom   + admin token        one full record
// Video project (courses in VIDEO_COURSES):
//   POST  { action:'submit', nom, codeHash, courseId, submission }   a pair hands in names, links and video
//   GET   ?courseId&action=videos + X-Code-Hash + nom                 student: videos to vote on (names hidden) or the podium
//   POST  { action:'vote', nom, codeHash, courseId, picks:[a,b,c] }   3 different videos, never their own, 3-2-1 points
//   GET   ?courseId&action=videos + admin token                       every video with names and links, votes, ranking
//   POST  { action:'config', courseId, state }  + admin token          state: closed | open | results
const crypto = require('crypto');
const { ghGet, ghPut, verifyStudent, isAdmin } = require('./_lib');

const REPO = process.env.DATA_REPO || 'marcvasseurpolytech-dot/toeic-entrainement';
const API = 'https://api.github.com';
const COURSES = ['course-rtbf', 'course-scredit'];
const VIDEO_COURSES = ['course-scredit'];
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


const crypto2 = crypto;
const safeEq = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto2.timingSafeEqual(x, y); };
async function studentOf(nom, codeHash, token) {
  if (!nom || !codeHash) return null;
  const f = await ghGet('data/students.json', token);
  const s = (f?.data?.students || []).find(x => x.nom === String(nom).trim().toUpperCase());
  return s && s.approved !== false && safeEq(s.codeHash || '', codeHash) ? s : null;
}
const stripAcc = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const wordsOf = s => stripAcc(s).split(/[^a-z0-9]+/).filter(Boolean);
const clip = (s, n) => String(s == null ? '' : s).trim().slice(0, n);
const pairKey = (a, b) => [wordsOf(a).join(' '), wordsOf(b).join(' ')].filter(Boolean).sort().join('|');
const pairId = k => crypto.createHash('sha256').update(k).digest('hex').slice(0, 10);
const httpUrl = u => /^https?:\/\/\S+\.\S+$/i.test(u);
function ytIdOf(u) {
  const m = String(u).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:[^#]*&)?v=|shorts\/|embed\/|live\/)|youtube-nocookie\.com\/embed\/)([A-Za-z0-9_-]{11})/i);
  return m ? m[1] : '';
}
// Is this student one of the authors of the video? (matches the names typed on the hand-in page, or the sender)
function isOwn(student, v) {
  if (!student) return false;
  if (String(v.by || '').toUpperCase() === String(student.nom).toUpperCase()) return true;
  const toks = wordsOf(student.nom).concat(wordsOf(student.prenom));
  if (!toks.length) return false;
  return [v.n1, v.n2].some(n => { const w = new Set(wordsOf(n)); return w.size && toks.every(t => w.has(t)); });
}
const vPath = (courseId, id) => `data/course/_videos/${courseId}/${id}.json`;
const votePath = (courseId, nom) => `data/course/_votes/${courseId}/${slug(nom)}.json`;
const cfgPath = courseId => `data/course/_config/${courseId}.json`;

async function listJson(path, token) {
  const r = await fetch(`${API}/repos/${REPO}/contents/${path}`, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' } });
  if (!r.ok) return [];
  const d = await r.json();
  return Array.isArray(d) ? d.filter(x => x.type === 'file' && x.name.endsWith('.json')).map(x => x.path) : [];
}
const cache = new Map();
async function cached(key, ms, fn) {
  const c = cache.get(key);
  if (c && Date.now() - c.t < ms) return c.v;
  const v = await fn(); cache.set(key, { t: Date.now(), v }); return v;
}
async function loadVideos(courseId, token) {
  const paths = await listJson(`data/course/_videos/${courseId}`, token);
  const files = await pool(paths, 12, p => ghGet(p, token));
  return files.filter(Boolean).map(f => f.data).sort((a, b) => String(a.at).localeCompare(String(b.at)) || String(a.id).localeCompare(String(b.id)))
    .map((v, i) => ({ ...v, label: 'Video ' + (i + 1) }));
}
async function loadVotes(courseId, token) {
  const paths = await listJson(`data/course/_votes/${courseId}`, token);
  const files = await pool(paths, 12, p => ghGet(p, token));
  return files.filter(Boolean).map(f => f.data);
}
async function getState(courseId, token) {
  const f = await ghGet(cfgPath(courseId), token);
  const s = f?.data?.state;
  return ['open', 'results'].includes(s) ? s : 'closed';
}
function tally(videos, votes) {
  const ids = new Set(videos.map(v => v.id)), t = new Map(videos.map(v => [v.id, { id: v.id, points: 0, first: 0, votes: 0 }]));
  votes.forEach(vt => (vt.picks || []).forEach((id, i) => {
    if (!ids.has(id)) return;
    const x = t.get(id); x.points += 3 - i; x.votes++; if (i === 0) x.first++;
  }));
  return [...t.values()].sort((a, b) => b.points - a.points || b.first - a.first || b.votes - a.votes);
}
async function classOk(courseId, dept, token) {
  const f = await ghGet('data/access.json', token);
  const d = f?.data || {};
  if ((d.tests || {})[courseId] !== true) return false;
  const list = (d.classes || {})[courseId];
  if (!Array.isArray(list) || !list.length) return true;
  const { normDept } = require('../dept.js');
  return list.includes(normDept(dept));
}
const embedUrl = id => `https://www.youtube-nocookie.com/embed/${id}`;

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
    submitted: !!rec.submission, submittedAt: rec.submission?.at || null,
    pair: rec.submission ? [rec.submission.n1, rec.submission.n2].filter(Boolean).join(' and ') : '',
    yurl: rec.submission?.yurl || '', vurl: rec.submission?.vurl || '', aurl: rec.submission?.aurl || '',
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


  if (req.method === 'POST' && ['submit', 'vote', 'config'].includes((req.body || {}).action)) {
    const { action, nom, codeHash, courseId } = req.body || {};
    if (!VIDEO_COURSES.includes(courseId)) return res.status(400).json({ error: 'Unknown course' });

    if (action === 'config') {
      if (!isAdmin(req)) return res.status(403).json({ error: 'Unauthorized' });
      const state = req.body.state;
      if (!['closed', 'open', 'results'].includes(state)) return res.status(400).json({ error: 'Bad state' });
      for (let a = 0; a < 3; a++) {
        const cur = await ghGet(cfgPath(courseId), token);
        if (await ghPut(cfgPath(courseId), { state, updatedAt: new Date().toISOString() }, cur?.sha, token, `course ${courseId} vote ${state}`)) { cache.clear(); return res.json({ success: true, state }); }
      }
      return res.status(500).json({ error: 'SHA conflict, try again.' });
    }

    const st = await studentOf(nom, codeHash, token);
    if (!st) return res.status(403).json({ error: 'Unauthorized' });

    if (action === 'submit') {
      const sub = req.body.submission || {};
      const n1 = clip(sub.n1, 80), n2 = clip(sub.n2, 80), yurl = clip(sub.yurl, 300), vurl = clip(sub.vurl, 400), aurl = clip(sub.aurl, 400);
      const ytId = ytIdOf(yurl);
      if (!n1 || !ytId) return res.status(400).json({ error: 'Names and a valid YouTube link are required' });
      if (vurl && !httpUrl(vurl)) return res.status(400).json({ error: 'Invalid video link' });
      if (aurl && !httpUrl(aurl)) return res.status(400).json({ error: 'Invalid article link' });
      const key = pairKey(n1, n2), id = pairId(key), path = vPath(courseId, id);
      for (let a = 0; a < 3; a++) {
        const cur = await ghGet(path, token);
        const rec = { id, pairKey: key, n1, n2, yurl, ytId, vurl, aurl, by: String(st.nom).toUpperCase(), dept: st.dept || '', at: cur?.data?.at || new Date().toISOString(), updatedAt: new Date().toISOString() };
        if (await ghPut(path, rec, cur?.sha, token, `course ${courseId} video ${id}`)) { cache.delete('v:' + courseId); return res.json({ success: true, id }); }
      }
      return res.status(500).json({ error: 'SHA conflict, try again.' });
    }

    // vote
    if (!(await classOk(courseId, st.dept, token))) return res.status(403).json({ error: 'Course not open to your class' });
    if ((await getState(courseId, token)) !== 'open') return res.status(409).json({ error: 'Voting is not open' });
    const picks = Array.isArray(req.body.picks) ? req.body.picks.map(x => String(x)) : [];
    if (picks.length !== 3 || new Set(picks).size !== 3) return res.status(400).json({ error: 'Choose 3 different videos' });
    const videos = await loadVideos(courseId, token), byId = new Map(videos.map(v => [v.id, v]));
    for (const id of picks) {
      const v = byId.get(id);
      if (!v) return res.status(400).json({ error: 'Unknown video' });
      if (isOwn(st, v)) return res.status(403).json({ error: 'You cannot vote for your own video' });
    }
    const path = votePath(courseId, st.nom);
    for (let a = 0; a < 3; a++) {
      const cur = await ghGet(path, token);
      if (await ghPut(path, { nom: String(st.nom).toUpperCase(), prenom: st.prenom || '', dept: st.dept || '', picks, at: new Date().toISOString() }, cur?.sha, token, `course ${courseId} vote`)) return res.json({ success: true });
    }
    return res.status(500).json({ error: 'SHA conflict, try again.' });
  }

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

    if (req.query?.action === 'videos') {
      if (!VIDEO_COURSES.includes(courseId)) return res.status(400).json({ error: 'Unknown course' });
      const state = await getState(courseId, token);
      if (isAdmin(req)) {
        const videos = await loadVideos(courseId, token), votes = await loadVotes(courseId, token);
        const t = new Map(tally(videos, votes).map(x => [x.id, x]));
        const ranking = videos.map(v => ({ ...v, ...t.get(v.id) })).sort((a, b) => b.points - a.points || b.first - a.first || b.votes - a.votes);
        return res.json({ state, videos, ranking, votes: votes.map(v => ({ nom: v.nom, prenom: v.prenom, dept: v.dept, picks: v.picks, at: v.at })) });
      }
      const nom2 = String(req.query?.nom || '').trim();
      const st = await studentOf(nom2, req.headers['x-code-hash'] || '', token);
      if (!st) return res.status(403).json({ error: 'Unauthorized' });
      if (!(await classOk(courseId, st.dept, token))) return res.status(403).json({ error: 'Course not open to your class' });
      if (state === 'closed') return res.json({ state });
      const videos = await cached('v:' + courseId, 45000, () => loadVideos(courseId, token));
      const mine = await ghGet(votePath(courseId, st.nom), token);
      const list = videos.map(v => ({ id: v.id, label: v.label, embed: embedUrl(v.ytId), url: v.yurl, own: isOwn(st, v) }));
      if (state === 'open') return res.json({ state, videos: list, myPicks: mine?.data?.picks || [] });
      const votes = await cached('t:' + courseId, 45000, () => loadVotes(courseId, token));
      const ranking = tally(videos, votes), top = ranking.slice(0, 3).map(r => { const v = videos.find(x => x.id === r.id); return { id: r.id, label: v.label, embed: embedUrl(v.ytId), url: v.yurl, n1: v.n1, n2: v.n2, points: r.points }; });
      return res.json({ state, videos: list, myPicks: mine?.data?.picks || [], podium: top, voters: votes.length });
    }

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
