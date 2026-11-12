const REVIEW = require('./_review');
const { KEYS, ghGet, ghPut, hasTest, grade, cleanAnswers, verifyStudent } = require('./_lib');
const { classAllowed } = require('../dept.js');

const FILE = 'data/scores.json';
// Browsers that were already open on a test before the server-side grading was
// deployed do not send the student's code yet. Accept that for a short grace period.
const LEGACY_UNTIL = Date.parse('2026-11-07T00:00:00Z');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Code-Hash');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const token = process.env.GITHUB_TOKEN;
  if (!token) return res.status(500).json({ error: 'Missing token' });

  // GET: a student's attempts. Scores and per-part counts are always computed from
  // the stored answers with the current keys. The answer key of one test is only
  // returned for review, and only to the student who proves their identity.
  if (req.method === 'GET') {
    const nom = (req.query?.nom || '').trim().toUpperCase();
    if (!nom) return res.status(400).json({ error: 'Name required' });
    const file = await ghGet(FILE, token);
    const all  = file?.data?.scores || [];
    const mine = all.filter(s => s.nom === nom).map(s => {
      const live = hasTest(s.testId) && Array.isArray(s.answers) && s.answers.length === KEYS[s.testId].total
        ? grade(s.testId, s.answers) : null;
      return {
        testId: s.testId, score: live ? live.score : s.score, total: s.total, date: s.date,
        answers: s.answers || [], retakeGranted: !!s.retakeGranted,
        parts: live ? live.parts : null
      };
    });
    const out = { scores: mine };
    const reviewId = req.query?.review;
    if (reviewId) {
      if (!hasTest(reviewId) || !mine.some(s => s.testId === reviewId)) {
        return res.status(404).json({ error: 'No submitted attempt for this test.' });
      }
      if (!(await verifyStudent(nom, req.headers['x-code-hash'], token))) {
        return res.status(401).json({ error: 'Please log in again.' });
      }
      out.keys = KEYS[reviewId].keys;
      if (REVIEW[reviewId]) out.review = REVIEW[reviewId];
    }
    return res.json(out);
  }

  // POST: save an attempt. The client sends only the answers; the score is computed
  // here. One attempt per student per test, unless an admin granted a retake on the
  // latest attempt (the old attempt stays in the record for history).
  if (req.method === 'POST') {
    const { nom, testId, answers, date, startedAt, elapsedSec, codeHash } = req.body || {};
    if (!nom || !testId || !hasTest(testId)) return res.status(400).json({ error: 'Missing data' });
    const clean = cleanAnswers(testId, answers);
    if (!clean) return res.status(400).json({ error: 'Invalid answers' });

    if (codeHash) {
      if (!(await verifyStudent(nom, codeHash, token))) return res.status(401).json({ error: 'Please log in again.' });
    } else if (Date.now() > LEGACY_UNTIL) {
      return res.status(401).json({ error: 'Please log in again.' });
    }

    // Class gating: refuse a submission for a test the admin opened only for other classes.
    {
      const acc = await ghGet('data/access.json', token);
      const allowedClasses = acc?.data?.classes?.[testId];
      if (Array.isArray(allowedClasses) && allowedClasses.length) {
        const stuFile = await ghGet('data/students.json', token);
        const stu = (stuFile?.data?.students || []).find(x => x.nom === String(nom).trim().toUpperCase());
        if (!stu || !classAllowed(acc.data.classes, testId, stu.dept)) {
          return res.status(403).json({ error: 'This test is not open to your class.' });
        }
      }
    }

    // Timing data (used by the admin to flag Listening attempts that were paused or replayed)
    const startedAtOk = typeof startedAt === 'string' && !isNaN(Date.parse(startedAt)) ? new Date(startedAt).toISOString() : undefined;
    const elapsedOk = Number.isFinite(elapsedSec) && elapsedSec >= 0 && elapsedSec < 86400 ? Math.round(elapsedSec) : undefined;

    const nomUpper = nom.trim().toUpperCase();
    const result = grade(testId, clean);
    for (let attempt = 0; attempt < 3; attempt++) {
      const file   = await ghGet(FILE, token);
      const scores = file?.data?.scores || [];
      const mine = scores.filter(s => s.nom === nomUpper && s.testId === testId)
                         .sort((a, b) => new Date(b.date) - new Date(a.date));
      const latest = mine[0];
      if (latest && !latest.retakeGranted) {
        return res.status(409).json({ error: 'You have already completed this test. Only one attempt is allowed.' });
      }
      scores.push({
        nom: nomUpper,
        testId,
        score: result.score,
        total: result.total,
        answers: clean,
        date: new Date().toISOString(),
        ...(startedAtOk && { startedAt: startedAtOk }),
        ...(elapsedOk !== undefined && { elapsedSec: elapsedOk })
      });
      const ok = await ghPut(FILE, { scores }, file?.sha, token);
      if (ok) return res.json({ success: true, score: result.score, total: result.total, parts: result.parts, keys: KEYS[testId].keys, ...(REVIEW[testId] && { review: REVIEW[testId] }) });
    }
    return res.status(500).json({ error: 'SHA conflict — try again.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
