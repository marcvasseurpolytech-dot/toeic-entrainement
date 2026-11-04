const { CLASSES, KEYS, ghGet, ghPut, hasTest, grade, checkAdminPassword, issueAdminToken, isAdmin, throttled, noteFailure, clearFailures } = require('./_lib');

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Latest attempt per student for one test
function latestPerStudent(scores, testId) {
  const m = {};
  scores.filter(s => s.testId === testId && Array.isArray(s.answers)).forEach(s => {
    if (!m[s.nom] || new Date(s.date) > new Date(m[s.nom].date)) m[s.nom] = s;
  });
  return Object.values(m);
}

// Per-question statistics for one test (latest attempt of each student)
function analyse(testId, scores) {
  const T = KEYS[testId];
  const atts = latestPerStudent(scores, testId).filter(a => a.answers.length === T.total);
  const n = atts.length;
  const totals = atts.map(a => grade(testId, a.answers).score).sort((a, b) => a - b);
  const cut = totals.length ? totals[Math.floor(totals.length * 2 / 3)] : 0;   // top third threshold
  const strong = atts.filter(a => grade(testId, a.answers).score >= cut && n >= 6);
  const partOf = q => (T.parts.find(p => q >= p.start && q <= p.end) || {}).id;
  const questions = [];
  for (let q = 1; q <= T.total; q++) {
    const key = T.keys[q - 1];
    const cnt = { A: 0, B: 0, C: 0, D: 0, blank: 0 };
    atts.forEach(a => { const v = a.answers[q - 1]; if (cnt[v] !== undefined) cnt[v]++; else cnt.blank++; });
    const correct = cnt[key] || 0;
    let topWrong = null;
    ['A', 'B', 'C', 'D'].forEach(l => { if (l !== key && cnt[l] > 0 && (!topWrong || cnt[l] > cnt[topWrong])) topWrong = l; });
    // Top third of students by total score: what do they answer?
    const sc = { A: 0, B: 0, C: 0, D: 0 };
    strong.forEach(a => { if (sc[a.answers[q - 1]] !== undefined) sc[a.answers[q - 1]]++; });
    let strongTop = null;
    ['A', 'B', 'C', 'D'].forEach(l => { if (sc[l] > 0 && (!strongTop || sc[l] > sc[strongTop])) strongTop = l; });
    const strongShare = strong.length && strongTop ? sc[strongTop] / strong.length : 0;
    let suspect = null, suggested = null;
    // Flags need a reasonable sample, otherwise ordinary tricky distractors look suspicious.
    if (n >= 8) {
      if (strongTop && strongTop !== key && strong.length >= 3 && strongShare >= 0.7 && sc[strongTop] > sc[key]) { suspect = 'strong'; suggested = strongTop; }
      else if (topWrong && cnt[topWrong] >= 2 * correct && cnt[topWrong] / n >= 0.5) { suspect = 'weak'; suggested = topWrong; }
    }
    questions.push({
      q, part: partOf(q), key, n, counts: cnt, correct,
      pct: n ? Math.round(correct / n * 100) : null,
      topWrong, suspect, suggested
    });
  }
  return { testId, n, questions };
}

// Re-score stored attempts against the current keys.
function rescoreList(scores, testId) {
  const changes = [];
  const out = scores.map(s => {
    if ((testId && s.testId !== testId) || !hasTest(s.testId) || !Array.isArray(s.answers) || s.answers.length !== KEYS[s.testId].total) return s;
    const g = grade(s.testId, s.answers);
    if (g.score === s.score && g.total === s.total) return s;
    changes.push({ nom: s.nom, testId: s.testId, date: s.date, from: s.score, to: g.score });
    return { ...s, score: g.score, total: g.total };
  });
  return { out, changes };
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const token = process.env.GITHUB_TOKEN;
  if (!token)  return res.status(500).json({ error: 'Missing token' });

  const resource = req.query?.resource || 'scores';

  // Login: the password is checked here and never leaves the server.
  if (req.method === 'POST' && resource === 'login') {
    if (throttled(req)) return res.status(429).json({ error: 'Too many attempts. Try again in a few minutes.' });
    const { password } = req.body || {};
    if (!checkAdminPassword(password)) {
      noteFailure(req);
      await sleep(800);
      return res.status(401).json({ error: 'Incorrect code.' });
    }
    clearFailures(req);
    return res.json(issueAdminToken());
  }

  // Everything else needs a valid signed session token.
  if (!isAdmin(req)) return res.status(403).json({ error: 'Unauthorized' });
  if (resource === 'ping') return res.json({ ok: true });

  if (req.method === 'GET') {
    if (resource === 'students') {
      const file = await ghGet('data/students.json', token);
      // Strip code hashes before returning
      const safe = (file?.data?.students || []).map(({ codeHash, ...rest }) => rest);
      return res.json({ students: safe });
    }
    if (resource === 'scores') {
      const file = await ghGet('data/scores.json', token);
      // Scores and per-part counts are recomputed from the answers with the current keys;
      // the stored value is exposed when it differs (stale after a key correction).
      const scores = (file?.data?.scores || []).map(s => {
        if (!hasTest(s.testId) || !Array.isArray(s.answers) || s.answers.length !== KEYS[s.testId].total) return s;
        const g = grade(s.testId, s.answers);
        return { ...s, score: g.score, total: g.total, parts: g.parts, ...(g.score !== s.score && { storedScore: s.score }) };
      });
      return res.json({ scores });
    }
    // Per-question analysis of one test
    if (resource === 'analysis') {
      const testId = req.query?.testId;
      if (!hasTest(testId)) return res.status(400).json({ error: 'Unknown test' });
      const file = await ghGet('data/scores.json', token);
      return res.json(analyse(testId, file?.data?.scores || []));
    }
    // Dry run: which stored scores would change after re-scoring with the current keys?
    if (resource === 'rescore-preview') {
      const testId = req.query?.testId || '';
      if (testId && !hasTest(testId)) return res.status(400).json({ error: 'Unknown test' });
      const file = await ghGet('data/scores.json', token);
      const { changes } = rescoreList(file?.data?.scores || [], testId);
      return res.json({ count: changes.length, changes: changes.slice(0, 200) });
    }
    return res.status(400).json({ error: 'Unknown resource' });
  }

  // POST — approve/revoke one account, approve all pending at once, or
  // reset a student's secret code.
  if (req.method === 'POST') {
    if (resource === 'approval') {
      const { nom, approved } = req.body || {};
      const nomUpper = (nom || '').trim().toUpperCase();
      if (!nomUpper || typeof approved !== 'boolean') return res.status(400).json({ error: 'Missing data' });

      for (let attempt = 0; attempt < 3; attempt++) {
        const file = await ghGet('data/students.json', token);
        const students = file?.data?.students || [];
        const idx = students.findIndex(s => s.nom === nomUpper);
        if (idx < 0) return res.status(404).json({ error: 'Student not found' });
        students[idx] = { ...students[idx], approved };
        const ok = await ghPut('data/students.json', { students }, file?.sha, token);
        if (ok) return res.json({ success: true });
      }
      return res.status(500).json({ error: 'SHA conflict — try again.' });
    }

    if (resource === 'approve-all') {
      for (let attempt = 0; attempt < 3; attempt++) {
        const file = await ghGet('data/students.json', token);
        const students = file?.data?.students || [];
        let count = 0;
        const updated = students.map(s => {
          if (s.approved === false) { count++; return { ...s, approved: true }; }
          return s;
        });
        if (count === 0) return res.json({ success: true, count: 0 });
        const ok = await ghPut('data/students.json', { students: updated }, file?.sha, token);
        if (ok) return res.json({ success: true, count });
      }
      return res.status(500).json({ error: 'SHA conflict — try again.' });
    }

    // resource=reset-code — admin sets a new codeHash for a student
    // (the plaintext code is hashed client-side and never sent in the clear).
    if (resource === 'reset-code') {
      const { nom, codeHash } = req.body || {};
      const nomUpper = (nom || '').trim().toUpperCase();
      if (!nomUpper || !codeHash) return res.status(400).json({ error: 'Missing data' });

      for (let attempt = 0; attempt < 3; attempt++) {
        const file = await ghGet('data/students.json', token);
        const students = file?.data?.students || [];
        const idx = students.findIndex(s => s.nom === nomUpper);
        if (idx < 0) return res.status(404).json({ error: 'Student not found' });
        students[idx] = { ...students[idx], codeHash };
        const ok = await ghPut('data/students.json', { students }, file?.sha, token);
        if (ok) return res.json({ success: true });
      }
      return res.status(500).json({ error: 'SHA conflict — try again.' });
    }

    // resource=student-dept — admin corrects a student's class (must be in the list).
    if (resource === 'student-dept') {
      const { nom, dept } = req.body || {};
      const nomUpper = (nom || '').trim().toUpperCase();
      if (!nomUpper || !CLASSES.includes(dept)) return res.status(400).json({ error: 'Invalid class' });

      for (let attempt = 0; attempt < 3; attempt++) {
        const file = await ghGet('data/students.json', token);
        const students = file?.data?.students || [];
        const idx = students.findIndex(s => s.nom === nomUpper);
        if (idx < 0) return res.status(404).json({ error: 'Student not found' });
        students[idx] = { ...students[idx], dept };
        const ok = await ghPut('data/students.json', { students }, file?.sha, token);
        if (ok) return res.json({ success: true });
      }
      return res.status(500).json({ error: 'SHA conflict — try again.' });
    }

    // resource=grant-retake — non-destructive: authorizes exactly one more
    // attempt on top of an existing completed one, which stays in the
    // record for history. Identified by nom+testId+date (a score's date is
    // unique per student+test since a submit can't happen twice at once).
    if (resource === 'grant-retake') {
      const { nom, testId, date } = req.body || {};
      const nomUpper = (nom || '').trim().toUpperCase();
      if (!nomUpper || !testId || !date) return res.status(400).json({ error: 'Missing data' });

      for (let attempt = 0; attempt < 3; attempt++) {
        const file = await ghGet('data/scores.json', token);
        const scores = file?.data?.scores || [];
        const idx = scores.findIndex(s => s.nom === nomUpper && s.testId === testId && s.date === date);
        if (idx < 0) return res.status(404).json({ error: 'Result not found' });
        scores[idx] = { ...scores[idx], retakeGranted: true };
        const ok = await ghPut('data/scores.json', { scores }, file?.sha, token);
        if (ok) return res.json({ success: true });
      }
      return res.status(500).json({ error: 'SHA conflict — try again.' });
    }

    // Re-score stored attempts with the current keys. A dated copy of the file is
    // saved under data/backups/ first, so any recalculation can be undone.
    if (resource === 'rescore') {
      const testId = (req.body && req.body.testId) || '';
      if (testId && !hasTest(testId)) return res.status(400).json({ error: 'Unknown test' });
      for (let attempt = 0; attempt < 3; attempt++) {
        const file = await ghGet('data/scores.json', token);
        const { out, changes } = rescoreList(file?.data?.scores || [], testId);
        if (!changes.length) return res.json({ success: true, count: 0 });
        const stamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupPath = `data/backups/scores-${stamp}.json`;
        const okB = await ghPut(backupPath, file.data, null, token, `backup before rescore ${testId || 'all'}`);
        if (!okB) return res.status(500).json({ error: 'Backup failed, nothing was changed.' });
        const ok = await ghPut('data/scores.json', { scores: out }, file.sha, token, `rescore ${testId || 'all'} (${changes.length})`);
        if (ok) return res.json({ success: true, count: changes.length, backup: backupPath });
      }
      return res.status(500).json({ error: 'SHA conflict — try again.' });
    }

    return res.status(400).json({ error: 'Unknown resource' });
  }

  // DELETE — wipe all results (resource=scores), or remove one student
  // account plus their results (resource=student&nom=...).
  if (req.method === 'DELETE') {
    if (resource === 'scores') {
      for (let attempt = 0; attempt < 3; attempt++) {
        const scoresFile = await ghGet('data/scores.json', token);
        const ok1 = await ghPut('data/scores.json', { scores: [] }, scoresFile?.sha, token);
        if (!ok1) continue;
        const progressFile = await ghGet('data/progress.json', token);
        await ghPut('data/progress.json', { progress: [] }, progressFile?.sha, token);
        return res.json({ success: true });
      }
      return res.status(500).json({ error: 'SHA conflict — try again.' });
    }

    if (resource === 'student') {
      const nom = (req.query?.nom || '').trim().toUpperCase();
      if (!nom) return res.status(400).json({ error: 'Missing name' });

      // Remove the account itself
      let removed = false;
      for (let attempt = 0; attempt < 3; attempt++) {
        const studentsFile = await ghGet('data/students.json', token);
        const before = studentsFile?.data?.students || [];
        const after = before.filter(s => s.nom !== nom);
        removed = after.length !== before.length;
        const ok = await ghPut('data/students.json', { students: after }, studentsFile?.sha, token);
        if (ok) break;
        if (attempt === 2) return res.status(500).json({ error: 'SHA conflict — try again.' });
      }

      // Cascade: remove their scores
      for (let attempt = 0; attempt < 3; attempt++) {
        const scoresFile = await ghGet('data/scores.json', token);
        const after = (scoresFile?.data?.scores || []).filter(s => s.nom !== nom);
        const ok = await ghPut('data/scores.json', { scores: after }, scoresFile?.sha, token);
        if (ok) break;
      }

      // Cascade: remove any in-progress attempts
      for (let attempt = 0; attempt < 3; attempt++) {
        const progressFile = await ghGet('data/progress.json', token);
        const after = (progressFile?.data?.progress || []).filter(p => p.nom !== nom);
        const ok = await ghPut('data/progress.json', { progress: after }, progressFile?.sha, token);
        if (ok) break;
      }

      return res.json({ success: true, removed });
    }

    return res.status(400).json({ error: 'Unknown resource' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

