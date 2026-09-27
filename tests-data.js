// Shared across test.html / dashboard.html / admin.html
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
    keys: [
      'D','D','C','A','B','B',
      'C','A','B','C','B','A','B','C','C','B','B','C','B','B','C','A','B','A','A','B','A','A','B','B','C',
      'D','C','B','C','D','A','D','B','A','A','B','D','B','C','D','A','C','B','A',
      'C','B','B','A','D','A','C','A','C','A','B','B','A','B','C','D','A','A','B','C',
      'D','C','B','D','A','C','B','C','D','B',
      'D','C','D','C','A','B','D','D','C','A',
      'B','A','C','B','C','A','B','D','C','A'
    ],
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
    keys: [
      // Part 5 (local 1-30 = Q101-130)
      'C','D','B','C','A','D','D','A','A','B','C','A','B','B','A','B','A','A','C','C','D','D','A','B','C','C','D','D','B','C',
      // Part 6 (local 31-46 = Q131-146)
      'C','A','C','B','D','C','B','A','C','B','D','A','C','A','B','D',
      // Part 7 (local 47-100 = Q147-200)
      'A','D','D','B','C','D','C','D','B','A','C','B','C','A','D','B','A','B','D','D','C','C','A','D','B','D','D','C','A','D','B','D','A','B','A','D','C','B','C','B','C','A','B','D','B','A','D','C','B','B','C','B','A','D'
    ],
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
    audioUrl: '',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    keys: [
      'C','D','A','C','B','C',
      'A','A','A','B','B','C','A','A','A','C','B','A','C','B','C','C','A','C','A','B','C','A','B','C','B',
      'D','C','A','C','D','B','B','C','A','B','B','A','A','B','D','D','A','C','A',
      'C','B','D','A','B','A','B','D','A','A','B','C','D','B','C','A','B','B','D','C',
      'D','D','C','B','B','A','D','A','C','B',
      'D','A','C','A','D','C','B','D','D','B',
      'A','B','D','C','A','C','A','B','C','C'
    ],
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
    keys: [
      // Part 5 (local 1-30 = Q101-130)
      'D','A','D','A','C','D','B','D','C','C','A','C','B','B','C','B','D','A','C','D','B','A','B','A','C','C','C','D','D','B',
      // Part 6 (local 31-46 = Q131-146)
      'C','A','D','C','B','A','D','A','B','C','C','A','A','B','D','A',
      // Part 7 (local 47-100 = Q147-200)
      'B','A','B','A','B','C','B','D','C','A','B','A','A','C','B','C','B','A','D','B','A','D','B','C','C','C','A','D','A','A','B','C','D','C','A','B','D','A','C','A','A','B','C','C','A','D','B','A','A','A','B','C','D','D'
    ],
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc3-t1-listening': {
    name: 'IIBC 3 — Test 1',
    part: 'Listening',
    section: 'L',
    baseId: 'iibc3-t1',
    audioControlled: true,
    audioUrl: '',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    keys: [
      'C','D','B','C','B','A',
      'B','A','B','C','A','C','B','A','B','B','B','A','C','C','A','B','B','C','C','B','A','B','A','A','C',
      'C','D','B','A','C','C','B','A','D','A','C','B','A','D','B','D','B','C','A',
      'C','D','B','B','A','C','B','D','A','C','B','D','A','B','C','C','D','A','C','B',
      'A','D','B','B','C','D','B','A','C','D',
      'B','B','D','A','C','D','B','A','B','D',
      'D','B','D','A','C','B','A','C','D','A'
    ],
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc3-t1-reading': {
    name: 'IIBC 3 — Test 1',
    part: 'Reading',
    section: 'R',
    baseId: 'iibc3-t1',
    audioControlled: false,
    duration: 75 * 60,
    partIds: ['p5', 'p6', 'p7'],
    keys: [
      // Part 5 (local 1-30 = Q101-130)
      'A','C','A','B','B','A','D','C','C','B','B','D','A','B','D','C','C','B','B','C','A','D','A','B','D','D','B','A','D','A',
      // Part 6 (local 31-46 = Q131-146)
      'C','B','A','A','C','A','C','D','D','D','A','B','D','B','D','A',
      // Part 7 (local 47-100 = Q147-200)
      'D','B','C','B','D','C','B','C','A','C','B','B','C','D','C','C','B','D','C','A','C','B','D','C','A','B','A','A','C','B','C','D','A','D','D','B','B','B','A','C','B','A','C','D','A','C','D','A','C','B','A','A','D','C'
    ],
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  }

  // All keys sourced from the answer-key PDF. IIBC 2 T1 additionally has a
  // full booklet PDF; IIBC 2 T2 / IIBC 3 T1 don't (booklet buttons hidden).
};
