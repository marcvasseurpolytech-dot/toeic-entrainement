// Shared server-side helpers: GitHub JSON storage, admin sessions, grading.
// The leading underscore keeps Vercel from exposing this file as an endpoint.
const crypto = require('crypto');
const KEYS = require('./_keys');

const REPO = process.env.DATA_REPO || 'marcvasseurpolytech-dot/toeic-entrainement';
const API  = 'https://api.github.com';

// ---------------------------------------------------------------- GitHub storage
async function ghGet(path, token) {
  const r = await fetch(`${API}/repos/${REPO}/contents/${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' }
  });
  if (!r.ok) return null;
  const d = await r.json();
  return { data: JSON.parse(Buffer.from(d.content, 'base64').toString('utf8')), sha: d.sha };
}

async function ghPut(path, content, sha, token, message) {
  const body = {
    message: message || `update ${path}`,
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

// ---------------------------------------------------------------- admin sessions
// Password check happens here, on the server. The expected SHA-256 comes from the
// ADMIN_HASH environment variable (set it in Vercel to rotate the password); the
// fallback is the current password so nothing breaks before the variable is set.
const DEFAULT_ADMIN_HASH = 'f7ff32b790557d7601029bc0b296115f82e18d799b6e27ba0c6202fdbd1f2a08';
const SESSION_HOURS = 12;

const sha256hex = s => crypto.createHash('sha256').update(String(s)).digest('hex');
function safeEqual(a, b) {
  const ba = Buffer.from(String(a)), bb = Buffer.from(String(b));
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}
function sessionSecret() {
  return process.env.ADMIN_SECRET || sha256hex('admin-session:' + (process.env.GITHUB_TOKEN || ''));
}
function sign(payload) {
  return crypto.createHmac('sha256', sessionSecret()).update(payload).digest('hex');
}
function checkAdminPassword(password) {
  const expected = (process.env.ADMIN_HASH || DEFAULT_ADMIN_HASH).toLowerCase();
  return safeEqual(sha256hex(password || ''), expected);
}
function issueAdminToken() {
  const exp = Date.now() + SESSION_HOURS * 3600 * 1000;
  return { token: `${exp}.${sign('admin:' + exp)}`, expires: exp };
}
function isAdmin(req) {
  const h = req.headers['authorization'] || '';
  const tok = h.startsWith('Bearer ') ? h.slice(7) : '';
  const [exp, sig] = tok.split('.');
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < Date.now()) return false;
  return safeEqual(sig, sign('admin:' + exp));
}

// Best-effort brute-force throttle (per serverless instance, per IP).
const fails = new Map();
function clientIp(req) {
  return String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '?').split(',')[0].trim();
}
function throttled(req) {
  const f = fails.get(clientIp(req));
  return !!f && f.n >= 5 && Date.now() - f.t < 10 * 60 * 1000;
}
function noteFailure(req) {
  const ip = clientIp(req), f = fails.get(ip);
  if (!f || Date.now() - f.t > 10 * 60 * 1000) fails.set(ip, { n: 1, t: Date.now() });
  else { f.n++; f.t = Date.now(); }
}
function clearFailures(req) { fails.delete(clientIp(req)); }

// ---------------------------------------------------------------- grading
const CHOICES = ['A', 'B', 'C', 'D'];
const hasTest = id => Object.prototype.hasOwnProperty.call(KEYS, id);

// answers: array of 'A'..'D' or null, one per question.
// Returns { score, total, parts: { p1: {correct,max}, ... } }
function grade(testId, answers) {
  const T = KEYS[testId];
  const parts = {};
  let score = 0;
  T.parts.forEach(p => {
    let c = 0;
    for (let q = p.start; q <= p.end; q++) if (answers[q - 1] === T.keys[q - 1]) c++;
    parts[p.id] = { correct: c, max: p.end - p.start + 1 };
    score += c;
  });
  return { score, total: T.total, parts };
}

// Accepts only a well-formed answers array for this test; returns it cleaned, or null.
function cleanAnswers(testId, answers) {
  const T = KEYS[testId];
  if (!T || !Array.isArray(answers) || answers.length !== T.total) return null;
  return answers.map(a => (CHOICES.includes(a) ? a : null));
}

// Student identity check (same name + hashed code as the login endpoint).
async function verifyStudent(nom, codeHash, token) {
  if (!nom || !codeHash) return false;
  const file = await ghGet('data/students.json', token);
  const s = (file?.data?.students || []).find(x => x.nom === String(nom).trim().toUpperCase());
  return !!s && s.approved !== false && safeEqual(s.codeHash || '', codeHash);
}

module.exports = {
  KEYS, verifyStudent, ghGet, ghPut, hasTest, grade, cleanAnswers, sha256hex,
  checkAdminPassword, issueAdminToken, isAdmin, throttled, noteFailure, clearFailures
};
