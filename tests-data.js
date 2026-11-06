// Shared across test.html / dashboard.html / admin.html
// NOTE: the answer keys are NOT in this file any more. They live in api/_keys.js (server only);
// grading is done by /api/scores. Each test only declares its number of questions (total).
// partIds map each test's local parts[] (index order) to the canonical
// TOEIC part ids (p1..p7) used by scoring.js for the ETS conversion grid.
const TESTS_DATA = {
  'iibc2-t1-listening': {
    name: 'IIBC 2 — Test 1',
    part: 'Listening',
    section: 'L',
    baseId: 'iibc2-t1',
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1IUDU5a8JnSF_Y40oZeKtaDQ-y1Fn52r-/view',
    bookletUrl: 'booklets/iibc2-t1.pdf',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc2-t1-reading': {
    name: 'IIBC 2 — Test 1',
    part: 'Reading',
    section: 'R',
    baseId: 'iibc2-t1',
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'booklets/iibc2-t1.pdf',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc2-t2-listening': {
    name: 'IIBC 2 — Test 2',
    part: 'Listening',
    section: 'L',
    baseId: 'iibc2-t2',
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1Q3vRuocFQchcqASTIsdZ64Grq4Omz9Ur/view?usp=sharing',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc2-t2-reading': {
    name: 'IIBC 2 — Test 2',
    part: 'Reading',
    section: 'R',
    baseId: 'iibc2-t2',
    audioControlled: false,
    duration: 75 * 60,
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc2-t3-listening': {
    name: 'IIBC 2 — Test 3',
    part: 'Listening',
    section: 'L',
    baseId: 'iibc2-t3',
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1Nj89BmvU4PVxWfOqvgyUDMijAF_Inm7R/view?usp=sharing',
    bookletUrl: 'https://drive.google.com/file/d/1e7rUPX5LSKi0-Gvna9rcpIjadg7a_PAB/view?usp=sharing',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc2-t3-reading': {
    name: 'IIBC 2 — Test 3',
    part: 'Reading',
    section: 'R',
    baseId: 'iibc2-t3',
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'https://drive.google.com/file/d/1e7rUPX5LSKi0-Gvna9rcpIjadg7a_PAB/view?usp=sharing',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'toeics7-listening': {
    name: 'TOEIC S7 (4A)',
    part: 'Listening',
    section: 'L',
    baseId: 'toeics7',
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1jdoPY_zE9wZzqVKKPk6g5J2prt4AEHr1/view?usp=sharing',
    bookletUrl: 'https://drive.google.com/file/d/1A6M1ZkszCR8nKlHFG6zVl2Q2Euc6PAcD/view?usp=sharing',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'toeics7-reading': {
    name: 'TOEIC S7 (4A)',
    part: 'Reading',
    section: 'R',
    baseId: 'toeics7',
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'https://drive.google.com/file/d/1A6M1ZkszCR8nKlHFG6zVl2Q2Euc6PAcD/view?usp=sharing',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc1-t2-listening': {
    name: 'IIBC 1 — Test 2',
    part: 'Listening',
    section: 'L',
    baseId: 'iibc1-t2',
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/13EjucN3m1CJWO8wfHKZEq_4gdUFTLr5e/view',
    bookletUrl: 'https://drive.google.com/file/d/1O1GgRZQc-u2Pnuc5iuSrcgJYZIOXdYNk/view?usp=sharing',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc1-t2-reading': {
    name: 'IIBC 1 — Test 2',
    part: 'Reading',
    section: 'R',
    baseId: 'iibc1-t2',
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'https://drive.google.com/file/d/1O1GgRZQc-u2Pnuc5iuSrcgJYZIOXdYNk/view?usp=sharing',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'toeics8-listening': {
    name: 'TOEIC S8 (4A)',
    part: 'Listening',
    section: 'L',
    baseId: 'toeics8',
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/176kDtbJGLBnMxXh9Iciqp4zpjoomy4aU/view?usp=sharing',
    bookletUrl: 'https://drive.google.com/file/d/1m0Q0CyPPmeat0hdpc-g96jIpG2ICgpBe/view?usp=sharing',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'toeics8-reading': {
    name: 'TOEIC S8 (4A)',
    part: 'Reading',
    section: 'R',
    baseId: 'toeics8',
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'https://drive.google.com/file/d/1m0Q0CyPPmeat0hdpc-g96jIpG2ICgpBe/view?usp=sharing',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // All keys sourced from the answer-key PDF. IIBC 2 T1 additionally has a
  // full booklet PDF; IIBC 2 T2 doesn't (booklet button hidden); IIBC 2 T3
  // links directly to the Drive booklet rather than a locally-hosted copy.

  // Part 7 training set (not a full TOEIC section): own page, own 52-minute clock
  // (75 min Reading minus 15 min for Part 5 and 8 min for Part 6).
  'p7-test-a': {
    name: 'Part 7 Training | Test A',
    part: 'Part 7',
    section: 'P',
    practice: true,
    page: 'part7-a.html',
    baseId: 'p7-a',
    audioControlled: false,
    duration: 52 * 60,
    partIds: ['p7'],
    total: 54,
    parts: [
      { name: 'Part 7 | Reading Comprehension', start: 1, end: 54, choices: ['A','B','C','D'] }
    ]
  }
};

// Expected length of a Listening test's audio track, in seconds. A test can set
// its own `audioDuration`; otherwise the official TOEIC Listening length is used.
const DEFAULT_AUDIO_DURATION = 45 * 60;
function audioDurationSec(T) { return (T && T.audioDuration) || DEFAULT_AUDIO_DURATION; }
