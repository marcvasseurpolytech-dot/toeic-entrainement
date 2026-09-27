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
  }

  // Reading tests (Parts 5-7) will be added here once the GF keys are provided.
  // Pattern to follow: section:'R', baseId matching the listening counterpart
  // (e.g. 'iibc2-t1'), partIds: ['p5','p6','p7'].
};
