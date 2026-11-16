// Shared across test.html / dashboard.html / admin.html
// NOTE: the answer keys are NOT in this file any more. They live in api/_keys.js (server only);
// grading is done by /api/scores. Each test only declares its number of questions (total).
// partIds map each test's local parts[] (index order) to the canonical
// TOEIC part ids (p1..p7) used by scoring.js for the ETS conversion grid.
const TESTS_DATA = {
  'iibc2-t1-listening': {
    name: 'IIBC 2 Test 1',
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
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc2-t1-reading': {
    name: 'IIBC 2 Test 1',
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
    name: 'IIBC 2 Test 2',
    part: 'Listening',
    section: 'L',
    baseId: 'iibc2-t2',
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1Q3vRuocFQchcqASTIsdZ64Grq4Omz9Ur/view?usp=sharing',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc2-t2-reading': {
    name: 'IIBC 2 Test 2',
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
    name: 'IIBC 2 Test 3',
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
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc2-t3-reading': {
    name: 'IIBC 2 Test 3',
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
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
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
    name: 'IIBC 1 Test 2',
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
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  'iibc1-t2-reading': {
    name: 'IIBC 1 Test 2',
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
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
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

  // Full TOEIC Test 2 GF (built from the Google Form "Full TOEIC Test 2 GF - Listening").
  // Audio: standard Drive player (Drive refuses direct <audio> streaming from another site, so the
  // protected no-pause player cannot be used with a Drive file). To switch it on later, host the mp3
  // on this site and set audioStrict: true and audioSrc: '<path to the mp3>' (see strict-audio.js).
  // audioDuration is the measured length of the mp3 (2720.7 s).
  'fulltoeic2gf-listening': {
    name: 'Full TOEIC Test 2 GF',
    part: 'Listening',
    section: 'L',
    baseId: 'fulltoeic2gf',
    defaultClosed: true,   // closed until an admin opens it (no access setting stored yet)
    audioControlled: true,
    audioDuration: 2721,
    audioUrl: 'https://drive.google.com/file/d/1OV1mu-AxGMqeimlap0WdDtp496NRO5j6/view?usp=sharing',
    // Printed questions: Part 1 photos, Part 3/4 items and graphics (Part 2 is audio only)
    bookletUrl: 'booklets/fulltoeic2gf-listening.pdf',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening Test 1 (Drive 'Test 3'; built from the Google Forms of the Drive folder, answer keys read in the forms).
  // Standard Drive player (see Full TOEIC Test 2 GF for the reason). audioDuration is the length of the mp3.
  'fulllistening-t3-listening': {
    name: 'Full Listening Test 1',
    part: 'Listening',
    section: 'L',
    baseId: 'fulllistening-t3',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: true,
    audioDuration: 2772,
    audioUrl: 'https://drive.google.com/file/d/1ixaK-gF04XeIQ91m9kYxqaqkvmAGu-Bs/view?usp=sharing',
    bookletUrl: 'booklets/fulllistening-t3-listening.pdf',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening Test 2 (Drive 'Test 4'; built from the Google Forms of the Drive folder, answer keys read in the forms).
  // Standard Drive player (see Full TOEIC Test 2 GF for the reason). audioDuration is the length of the mp3.
  'fulllistening-t4-listening': {
    name: 'Full Listening Test 2',
    part: 'Listening',
    section: 'L',
    baseId: 'fulllistening-t4',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: true,
    audioDuration: 2789,
    audioUrl: 'https://drive.google.com/file/d/1_2egRR3K-Fwr0EBu-BDpTifHyt1bKCv-/view?usp=sharing',
    bookletUrl: 'booklets/fulllistening-t4-listening.pdf',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening Test 3 (Drive 'Test 2'; built from the Google Forms of the Drive folder, answer keys read in the forms).
  // Standard Drive player (see Full TOEIC Test 2 GF for the reason). audioDuration is the length of the mp3.
  'fulllistening-t5-listening': {
    name: 'Full Listening Test 3',
    part: 'Listening',
    section: 'L',
    baseId: 'fulllistening-t5',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: true,
    audioDuration: 2908,
    audioUrl: 'https://drive.google.com/file/d/1orWYUyWfZWG9EHF_47JvTANud1LDJot8/view?usp=sharing',
    bookletUrl: 'booklets/fulllistening-t5-listening.pdf',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening Test 4 (Drive 'Test 9'; built from the Google Forms of the Drive folder, answer keys read in the forms).
  // Standard Drive player (see Full TOEIC Test 2 GF for the reason). audioDuration is the length of the mp3.
  'fulllistening-t9-listening': {
    name: 'Full Listening Test 4',
    part: 'Listening',
    section: 'L',
    baseId: 'fulllistening-t9',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: true,
    audioDuration: 2587,
    audioUrl: 'https://drive.google.com/file/d/1vNSV2njgdt_auUkI_G8cR4HLctmbxERu/view?usp=sharing',
    bookletUrl: 'booklets/fulllistening-t9-listening.pdf',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Reading Test 1 (built from the Google Forms of the Drive folder; answer key read in the forms, screenshots or key PDFs).
  'fullreading-t1-reading': {
    name: 'Full Reading Test 1',
    part: 'Reading',
    section: 'R',
    baseId: 'fullreading-t1',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'booklets/fullreading-t1-reading.pdf',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Reading Test 2 (built from the Google Forms of the Drive folder; answer key read in the forms, screenshots or key PDFs).
  'fullreading-t2-reading': {
    name: 'Full Reading Test 2',
    part: 'Reading',
    section: 'R',
    baseId: 'fullreading-t2',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'booklets/fullreading-t2-reading.pdf',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Reading Test 3 (built from the Google Forms of the Drive folder; answer key read in the forms, screenshots or key PDFs).
  'fullreading-t3-reading': {
    name: 'Full Reading Test 3',
    part: 'Reading',
    section: 'R',
    baseId: 'fullreading-t3',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'booklets/fullreading-t3-reading.pdf',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Reading Test 4 (Drive 'Test 6'; built from the Google Forms of the Drive folder; answer key read in the forms, screenshots or key PDFs).
  'fullreading-t6-reading': {
    name: 'Full Reading Test 4',
    part: 'Reading',
    section: 'R',
    baseId: 'fullreading-t6',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'booklets/fullreading-t6-reading.pdf',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full TOEIC Test 1 GF Listening (key read on the official key image of the Drive folder; PDF booklet from the same folder when available).
  'fulltoeic1gf-listening': {
    name: 'Full TOEIC Test 1 GF',
    part: 'Listening',
    section: 'L',
    baseId: 'fulltoeic1gf',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: true,
    audioDuration: 2717,
    audioUrl: 'https://drive.google.com/file/d/1z9GtdU4Dm9wXQpb3i0IsCX8tFDGr5o7h/view?usp=sharing',
    bookletUrl: 'https://drive.google.com/file/d/1sZyaCnPPy0iOgeYVSXo0PvzD3jOVH6x8/view?usp=sharing',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full TOEIC Test 1 GF Reading (key read on the official key image of the Drive folder; PDF booklet from the same folder when available).
  'fulltoeic1gf-reading': {
    name: 'Full TOEIC Test 1 GF',
    part: 'Reading',
    section: 'R',
    baseId: 'fulltoeic1gf',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'https://drive.google.com/file/d/1dY2iOG4WE4CzEBZ0v1fBytfmf839R0Ng/view?usp=sharing',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full TOEIC Test 2 GF Reading (key read on the official key image of the Drive folder; PDF booklet from the same folder when available).
  'fulltoeic2gf-reading': {
    name: 'Full TOEIC Test 2 GF',
    part: 'Reading',
    section: 'R',
    baseId: 'fulltoeic2gf',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'https://drive.google.com/file/d/1iMvL5UtXqbGUJgjLIx9w7zXWRHa9_sOW/view?usp=sharing',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full TOEIC Test 3 GF Listening (key read on the official key image of the Drive folder; PDF booklet from the same folder when available).
  'fulltoeic3gf-listening': {
    name: 'Full TOEIC Test 3 GF',
    part: 'Listening',
    section: 'L',
    baseId: 'fulltoeic3gf',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: true,
    audioDuration: 2700,
    audioUrl: 'https://drive.google.com/file/d/1TgjDGvy86mqgxSIyD8OXmzfahdgAgGXb/view?usp=sharing',
    bookletUrl: 'booklets/fulltoeic3gf-listening.pdf',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full TOEIC Test 4 GF Listening (key read on the official key image of the Drive folder; PDF booklet from the same folder when available).
  'fulltoeic4gf-listening': {
    name: 'Full TOEIC Test 4 GF',
    part: 'Listening',
    section: 'L',
    baseId: 'fulltoeic4gf',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: true,
    audioDuration: 2681,
    audioUrl: 'https://drive.google.com/file/d/1fIbPL-rta9PtVd_t1RcYZ5MvKKIClPgh/view?usp=sharing',
    bookletUrl: 'booklets/fulltoeic4gf-listening.pdf',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full TOEIC Test 4 GF Reading (key read on the official key image of the Drive folder; PDF booklet from the same folder when available).
  'fulltoeic4gf-reading': {
    name: 'Full TOEIC Test 4 GF',
    part: 'Reading',
    section: 'R',
    baseId: 'fulltoeic4gf',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'booklets/fulltoeic4gf-reading.pdf',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Reading 26 June 2026 (TOEIC Practice Test Final PDF), Reading (booklet = pages of the official-format PDF, questions 101 to 200 shown as 1 to 100;
  // key solved and checked question by question, explanations in api/_review.js).
  'practicefinal-reading': {
    name: 'Full Reading 26 June 2026 (4A)',
    fullName: 'Full TOEIC 26 June 2026 (S8 4A)',
    part: 'Reading',
    section: 'R',
    baseId: 'practicefinal',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'booklets/practicefinal-reading.pdf',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening 26 June 2026 (Listening of the same TOEIC Practice Test Final PDF; audio = full recording in the Drive folder of the transcript).
  // Same baseId as the Reading, so both form one card in the Full Tests tab, and each part can also be taken alone.
  'practicefinal-listening': {
    name: 'Full Listening 26 June 2026 (4A)',
    fullName: 'Full TOEIC 26 June 2026 (S8 4A)',
    part: 'Listening',
    section: 'L',
    baseId: 'practicefinal',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1peAVHY-QnkKxAOjCBEuKpdZ0tss_M8oi/view?usp=drivesdk',
    bookletUrl: 'booklets/practicefinal-listening.pdf',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening Test 5 (Drive folder 'TOEIC Listening part GF 1'; key read on the official key image of the Drive folder; PDF booklet from the same folder when available).
  'fulllistening-gfa-listening': {
    name: 'Full Listening Test 5',
    part: 'Listening',
    section: 'L',
    baseId: 'fulllistening-gfa',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: true,
    audioDuration: 2624,
    audioUrl: 'https://drive.google.com/file/d/1UIL_v5agE-190M5BAFuGhIHMK-xnpu7_/view?usp=sharing',
    bookletUrl: 'https://drive.google.com/file/d/18eBYQTX2KB-vlH7htP9AxNwptksxOnX-/view?usp=sharing',
    partIds: ['p1', 'p2', 'p3', 'p4'],
    total: 100,
    parts: [
      { name: 'Part 1 — Photographs', start: 1, end: 6, choices: ['A','B','C','D'] },
      { name: 'Part 2: Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 1 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t1': {
    name: 'Part 5 Grammar | Test 1',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t1',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 2 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t2': {
    name: 'Part 5 Grammar | Test 2',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t2',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 3 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t3': {
    name: 'Part 5 Grammar | Test 3',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t3',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 4 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t4': {
    name: 'Part 5 Grammar | Test 4',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t4',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 5 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t5': {
    name: 'Part 5 Grammar | Test 5',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t5',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 7 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t7': {
    name: 'Part 5 Grammar | Test 7',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t7',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 8 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t8': {
    name: 'Part 5 Grammar | Test 8',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t8',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 9 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t9': {
    name: 'Part 5 Grammar | Test 9',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t9',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 10 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t10': {
    name: 'Part 5 Grammar | Test 10',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t10',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 11 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t11': {
    name: 'Part 5 Grammar | Test 11',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t11',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 12 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t12': {
    name: 'Part 5 Grammar | Test 12',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t12',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 13 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t13': {
    name: 'Part 5 Grammar | Test 13',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t13',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 16 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t16': {
    name: 'Part 5 Grammar | Test 16',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t16',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 17 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t17': {
    name: 'Part 5 Grammar | Test 17',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t17',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 18 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t18': {
    name: 'Part 5 Grammar | Test 18',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t18',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 19 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t19': {
    name: 'Part 5 Grammar | Test 19',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t19',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 20 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t20': {
    name: 'Part 5 Grammar | Test 20',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t20',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 14 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t14': {
    name: 'Part 5 Grammar | Test 14',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t14',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 15 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t15': {
    name: 'Part 5 Grammar | Test 15',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t15',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 21 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t21': {
    name: 'Part 5 Grammar | Test 21',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t21',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 25 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t25': {
    name: 'Part 5 Grammar | Test 25',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t25',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 31 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t31': {
    name: 'Part 5 Grammar | Test 31',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t31',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 34 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t34': {
    name: 'Part 5 Grammar | Test 34',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t34',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 36 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t36': {
    name: 'Part 5 Grammar | Test 36',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t36',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 27 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t27': {
    name: 'Part 5 Grammar | Test 27',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t27',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 30 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t30': {
    name: 'Part 5 Grammar | Test 30',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t30',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 32 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t32': {
    name: 'Part 5 Grammar | Test 32',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t32',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 33 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t33': {
    name: 'Part 5 Grammar | Test 33',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t33',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 38 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t38': {
    name: 'Part 5 Grammar | Test 38',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t38',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 23 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t23': {
    name: 'Part 5 Grammar | Test 23',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t23',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 24 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t24': {
    name: 'Part 5 Grammar | Test 24',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t24',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 28 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t28': {
    name: 'Part 5 Grammar | Test 28',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t28',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 35 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t35': {
    name: 'Part 5 Grammar | Test 35',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t35',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 37 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t37': {
    name: 'Part 5 Grammar | Test 37',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t37',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 39 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t39': {
    name: 'Part 5 Grammar | Test 39',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t39',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 22 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t22': {
    name: 'Part 5 Grammar | Test 22',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t22',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Grammar Test 26 (Drive folder 'READING 30 Grammar Phrases'): 30 retyped sentences, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'g30-t26': {
    name: 'Part 5 Grammar | Test 26',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'g30-t26',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 2 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t2': {
    name: 'Part 6 Text Completion | Test 2',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t2',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 11 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex11': {
    name: 'Part 5 Practice | Exercise 11',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex11',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 12 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex12': {
    name: 'Part 5 Practice | Exercise 12',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex12',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 13 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex13': {
    name: 'Part 5 Practice | Exercise 13',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex13',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 14 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex14': {
    name: 'Part 5 Practice | Exercise 14',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex14',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 15 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex15': {
    name: 'Part 5 Practice | Exercise 15',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex15',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 16 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex16': {
    name: 'Part 5 Practice | Exercise 16',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex16',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 17 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex17': {
    name: 'Part 5 Practice | Exercise 17',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex17',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 18 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex18': {
    name: 'Part 5 Practice | Exercise 18',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex18',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 19 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex19': {
    name: 'Part 5 Practice | Exercise 19',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex19',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 20 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex20': {
    name: 'Part 5 Practice | Exercise 20',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex20',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 21 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex21': {
    name: 'Part 5 Practice | Exercise 21',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex21',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 22 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex22': {
    name: 'Part 5 Practice | Exercise 22',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex22',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 23 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex23': {
    name: 'Part 5 Practice | Exercise 23',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex23',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 24 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex24': {
    name: 'Part 5 Practice | Exercise 24',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex24',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 25 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex25': {
    name: 'Part 5 Practice | Exercise 25',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex25',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 26 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex26': {
    name: 'Part 5 Practice | Exercise 26',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex26',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 27 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex27': {
    name: 'Part 5 Practice | Exercise 27',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex27',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 28 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex28': {
    name: 'Part 5 Practice | Exercise 28',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex28',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 29 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex29': {
    name: 'Part 5 Practice | Exercise 29',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex29',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 30 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex30': {
    name: 'Part 5 Practice | Exercise 30',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex30',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 31 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex31': {
    name: 'Part 5 Practice | Exercise 31',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex31',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 32 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex32': {
    name: 'Part 5 Practice | Exercise 32',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex32',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 33 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex33': {
    name: 'Part 5 Practice | Exercise 33',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex33',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 34 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex34': {
    name: 'Part 5 Practice | Exercise 34',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex34',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 35 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex35': {
    name: 'Part 5 Practice | Exercise 35',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex35',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 36 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex36': {
    name: 'Part 5 Practice | Exercise 36',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex36',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 37 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex37': {
    name: 'Part 5 Practice | Exercise 37',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex37',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 38 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex38': {
    name: 'Part 5 Practice | Exercise 38',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex38',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 39 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex39': {
    name: 'Part 5 Practice | Exercise 39',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex39',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 40 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex40': {
    name: 'Part 5 Practice | Exercise 40',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex40',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 41 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex41': {
    name: 'Part 5 Practice | Exercise 41',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex41',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 42 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex42': {
    name: 'Part 5 Practice | Exercise 42',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex42',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 43 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex43': {
    name: 'Part 5 Practice | Exercise 43',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex43',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 44 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex44': {
    name: 'Part 5 Practice | Exercise 44',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex44',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 45 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex45': {
    name: 'Part 5 Practice | Exercise 45',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex45',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 46 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex46': {
    name: 'Part 5 Practice | Exercise 46',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex46',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 47 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex47': {
    name: 'Part 5 Practice | Exercise 47',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex47',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 48 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex48': {
    name: 'Part 5 Practice | Exercise 48',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex48',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 49 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex49': {
    name: 'Part 5 Practice | Exercise 49',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex49',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 50 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex50': {
    name: 'Part 5 Practice | Exercise 50',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex50',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 51 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex51': {
    name: 'Part 5 Practice | Exercise 51',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex51',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 5 Practice Exercise 52 (hub toeic-part5-hub-2): 30 sentences, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p5-ex52': {
    name: 'Part 5 Practice | Exercise 52',
    part: 'Part 5',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part5.html',
    baseId: 'p5-ex52',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 15 * 60,
    partIds: ['p5'],
    total: 30,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 1 (Drive folder 'Grammar in context'): passages retyped, 12 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t1': {
    name: 'Part 6 Text Completion | Test 1',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t1',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 6 * 60,
    partIds: ['p6'],
    total: 12,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 12, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 3 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t3': {
    name: 'Part 6 Text Completion | Test 3',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t3',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 4 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t4': {
    name: 'Part 6 Text Completion | Test 4',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t4',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 5 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t5': {
    name: 'Part 6 Text Completion | Test 5',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t5',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 6 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t6': {
    name: 'Part 6 Text Completion | Test 6',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t6',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 7 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t7': {
    name: 'Part 6 Text Completion | Test 7',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t7',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 8 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t8': {
    name: 'Part 6 Text Completion | Test 8',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t8',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 9 (Drive folder 'Grammar in context'): passages retyped, 8 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t9': {
    name: 'Part 6 Text Completion | Test 9',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t9',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 4 * 60,
    partIds: ['p6'],
    total: 8,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 8, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 10 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t10': {
    name: 'Part 6 Text Completion | Test 10',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t10',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 11 (Drive folder 'Grammar in context'): passages retyped, 12 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t11': {
    name: 'Part 6 Text Completion | Test 11',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t11',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 6 * 60,
    partIds: ['p6'],
    total: 12,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 12, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 12 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t12': {
    name: 'Part 6 Text Completion | Test 12',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t12',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 13 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t13': {
    name: 'Part 6 Text Completion | Test 13',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t13',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 14 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t14': {
    name: 'Part 6 Text Completion | Test 14',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t14',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 15 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t15': {
    name: 'Part 6 Text Completion | Test 15',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t15',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 16 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t16': {
    name: 'Part 6 Text Completion | Test 16',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t16',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 17 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t17': {
    name: 'Part 6 Text Completion | Test 17',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t17',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 18 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t18': {
    name: 'Part 6 Text Completion | Test 18',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t18',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 19 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t19': {
    name: 'Part 6 Text Completion | Test 19',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t19',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 20 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t20': {
    name: 'Part 6 Text Completion | Test 20',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t20',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 21 (Drive folder 'Grammar in context'): passages retyped, 16 blanks, two attempts per student
  // (an admin can grant more), opened and closed by the admin, own page and own timer.
  'p6-t21': {
    name: 'Part 6 Text Completion | Test 21',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t21',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 22 (hub toeic-part5-hub-2, hub test 1): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t22': {
    name: 'Part 6 Text Completion | Test 22',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t22',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 23 (hub toeic-part5-hub-2, hub test 2): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t23': {
    name: 'Part 6 Text Completion | Test 23',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t23',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 24 (hub toeic-part5-hub-2, hub test 3): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t24': {
    name: 'Part 6 Text Completion | Test 24',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t24',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 25 (hub toeic-part5-hub-2, hub test 4): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t25': {
    name: 'Part 6 Text Completion | Test 25',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t25',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 26 (hub toeic-part5-hub-2, hub test 5): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t26': {
    name: 'Part 6 Text Completion | Test 26',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t26',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 27 (hub toeic-part5-hub-2, hub test 6): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t27': {
    name: 'Part 6 Text Completion | Test 27',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t27',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 28 (hub toeic-part5-hub-2, hub test 7): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t28': {
    name: 'Part 6 Text Completion | Test 28',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t28',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 29 (hub toeic-part5-hub-2, hub test 8): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t29': {
    name: 'Part 6 Text Completion | Test 29',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t29',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 30 (hub toeic-part5-hub-2, hub test 9): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t30': {
    name: 'Part 6 Text Completion | Test 30',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t30',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 31 (hub toeic-part5-hub-2, hub test 10): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t31': {
    name: 'Part 6 Text Completion | Test 31',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t31',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 32 (hub toeic-part5-hub-2, hub test 11): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t32': {
    name: 'Part 6 Text Completion | Test 32',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t32',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 33 (hub toeic-part5-hub-2, hub test 12): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t33': {
    name: 'Part 6 Text Completion | Test 33',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t33',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 34 (hub toeic-part5-hub-2, hub test 13): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t34': {
    name: 'Part 6 Text Completion | Test 34',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t34',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 35 (hub toeic-part5-hub-2, hub test 14): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t35': {
    name: 'Part 6 Text Completion | Test 35',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t35',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 36 (hub toeic-part5-hub-2, hub test 15): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t36': {
    name: 'Part 6 Text Completion | Test 36',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t36',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 37 (hub toeic-part5-hub-2, hub test 16): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t37': {
    name: 'Part 6 Text Completion | Test 37',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t37',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 38 (hub toeic-part5-hub-2, hub test 17): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t38': {
    name: 'Part 6 Text Completion | Test 38',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t38',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 39 (hub toeic-part5-hub-2, hub test 18): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t39': {
    name: 'Part 6 Text Completion | Test 39',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t39',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 40 (hub toeic-part5-hub-2, hub test 19): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t40': {
    name: 'Part 6 Text Completion | Test 40',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t40',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 41 (hub toeic-part5-hub-2, hub test 20): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t41': {
    name: 'Part 6 Text Completion | Test 41',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t41',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 42 (hub toeic-part5-hub-2, hub test 21): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t42': {
    name: 'Part 6 Text Completion | Test 42',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t42',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 43 (hub toeic-part5-hub-2, hub test 22): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t43': {
    name: 'Part 6 Text Completion | Test 43',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t43',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 44 (hub toeic-part5-hub-2, hub test 23): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t44': {
    name: 'Part 6 Text Completion | Test 44',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t44',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 45 (hub toeic-part5-hub-2, hub test 24): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t45': {
    name: 'Part 6 Text Completion | Test 45',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t45',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 46 (hub toeic-part5-hub-2, hub test 25): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t46': {
    name: 'Part 6 Text Completion | Test 46',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t46',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 47 (hub toeic-part5-hub-2, hub test 26): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t47': {
    name: 'Part 6 Text Completion | Test 47',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t47',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 48 (hub toeic-part5-hub-2, hub test 27): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t48': {
    name: 'Part 6 Text Completion | Test 48',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t48',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 49 (hub toeic-part5-hub-2, hub test 28): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t49': {
    name: 'Part 6 Text Completion | Test 49',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t49',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 50 (hub toeic-part5-hub-2, hub test 29): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t50': {
    name: 'Part 6 Text Completion | Test 50',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t50',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 51 (hub toeic-part5-hub-2, hub test 30): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t51': {
    name: 'Part 6 Text Completion | Test 51',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t51',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 52 (hub toeic-part5-hub-2, hub test 31): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t52': {
    name: 'Part 6 Text Completion | Test 52',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t52',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 53 (hub toeic-part5-hub-2, hub test 32): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t53': {
    name: 'Part 6 Text Completion | Test 53',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t53',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 54 (hub toeic-part5-hub-2, hub test 33): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t54': {
    name: 'Part 6 Text Completion | Test 54',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t54',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 55 (hub toeic-part5-hub-2, hub test 34): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t55': {
    name: 'Part 6 Text Completion | Test 55',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t55',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 56 (hub toeic-part5-hub-2, hub test 35): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t56': {
    name: 'Part 6 Text Completion | Test 56',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t56',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 57 (hub toeic-part5-hub-2, hub test 36): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t57': {
    name: 'Part 6 Text Completion | Test 57',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t57',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 58 (hub toeic-part5-hub-2, hub test 37): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t58': {
    name: 'Part 6 Text Completion | Test 58',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t58',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 59 (hub toeic-part5-hub-2, hub test 38): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t59': {
    name: 'Part 6 Text Completion | Test 59',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t59',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 60 (hub toeic-part5-hub-2, hub test 39): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t60': {
    name: 'Part 6 Text Completion | Test 60',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t60',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // Part 6 Text Completion Test 61 (hub toeic-part5-hub-2, hub test 40): 4 passages, 16 blanks, two attempts per student (an admin can grant more), closed until an admin opens it.
  'p6-t61': {
    name: 'Part 6 Text Completion | Test 61',
    part: 'Part 6',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    page: 'part6.html',
    baseId: 'p6-t61',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    audioControlled: false,
    duration: 8 * 60,
    partIds: ['p6'],
    total: 16,
    parts: [
      { name: 'Part 6 — Text Completion', start: 1, end: 16, choices: ['A','B','C','D'] }
    ]
  },

  // All keys sourced from the answer-key PDF. IIBC 2 T1 additionally has a
  // full booklet PDF; IIBC 2 T2 doesn't (booklet button hidden); IIBC 2 T3
  // links directly to the Drive booklet rather than a locally-hosted copy.

  // Part 3 and 4 chained, Test 1 (Drive folder 'LISTENING PART 3 and 4'): questions 32 to 100 of a TOEIC Listening, shown as 32 to 100 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part34-t1': {
    name: 'Part 3 and 4 | Test 1',
    part: 'Part 3 & 4',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part34-t1',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1Y8wD44AiEmiS70LO6TES1q2xyy6hZuYL/view?usp=sharing',
    partIds: ['p3', 'p4'],
    total: 69,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] },
      { name: 'Part 4: Talks', start: 40, end: 69, choices: ['A','B','C','D'] }
    ]
  },

  // Part 3 and 4 chained, Test 2 (Drive folder 'LISTENING PART 3 and 4'): questions 32 to 100 of a TOEIC Listening, shown as 32 to 100 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part34-t2': {
    name: 'Part 3 and 4 | Test 2',
    part: 'Part 3 & 4',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part34-t2',
    bookletUrl: 'booklets/part34-t2-booklet.pdf',
    qImages: {"32": ["qimg/part34-t2/q32-1.jpg"], "35": ["qimg/part34-t2/q35-2.jpg"], "36": ["qimg/part34-t2/q36-3.jpg"], "38": ["qimg/part34-t2/q38-4.jpg"], "41": ["qimg/part34-t2/q41-5.jpg"], "42": ["qimg/part34-t2/q42-6.jpg"], "44": ["qimg/part34-t2/q44-7.jpg"], "47": ["qimg/part34-t2/q47-8.jpg"], "48": ["qimg/part34-t2/q48-9.jpg"], "50": ["qimg/part34-t2/q50-10.jpg"], "53": ["qimg/part34-t2/q53-11.jpg"], "56": ["qimg/part34-t2/q56-12.jpg"], "59": ["qimg/part34-t2/q59-13.jpg"], "60": ["qimg/part34-t2/q60-14.jpg"], "62": ["qimg/part34-t2/q62-15.jpg", "qimg/part34-t2/q62-16.jpg"], "65": ["qimg/part34-t2/q65-17.jpg", "qimg/part34-t2/q65-18.jpg"], "68": ["qimg/part34-t2/q68-19.jpg", "qimg/part34-t2/q68-20.jpg"], "71": ["qimg/part34-t2/q71-21.jpg"], "74": ["qimg/part34-t2/q74-22.jpg"], "75": ["qimg/part34-t2/q75-23.jpg"], "77": ["qimg/part34-t2/q77-24.jpg"], "80": ["qimg/part34-t2/q80-25.jpg"], "83": ["qimg/part34-t2/q83-26.jpg"], "86": ["qimg/part34-t2/q86-27.jpg"], "87": ["qimg/part34-t2/q87-28.jpg"], "89": ["qimg/part34-t2/q89-29.jpg"], "92": ["qimg/part34-t2/q92-30.jpg"], "95": ["qimg/part34-t2/q95-31.jpg"], "98": ["qimg/part34-t2/q98-32.jpg"]},  // question images shown in the answer grid, keyed by the displayed number of the first question they cover
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1v8w3AHWkzJvRAVRq-kqD212hxbQwUj0E/view?usp=sharing',
    partIds: ['p3', 'p4'],
    total: 69,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] },
      { name: 'Part 4: Talks', start: 40, end: 69, choices: ['A','B','C','D'] }
    ]
  },

  // Part 3 Conversations Test 1 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t1': {
    name: 'Part 3 Conversations | Test 1',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t1',
    bookletUrl: 'booklets/part3-t1-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1VuhUALNvQOOvtQKjEnKx4bmnIqgn6QN0/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },

  // Part 3 Conversations Test 2 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t2': {
    name: 'Part 3 Conversations | Test 2',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t2',
    bookletUrl: 'booklets/part3-t2-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/14372wFynG6-lb9FlCYPGaIndIrSK-ei9/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },

  // Part 3 Conversations Test 3 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t3': {
    name: 'Part 3 Conversations | Test 3',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t3',
    bookletUrl: 'booklets/part3-t3-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1PpUhhErKVZaPADDepzCJ_jlUvSyQiS_W/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },

  // Part 3 Conversations Test 4 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t4': {
    name: 'Part 3 Conversations | Test 4',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t4',
    bookletUrl: 'booklets/part3-t4-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1ZnOhTOfCWNcuyvJ7DhdMTwokIvJezR0H/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },

  // Part 3 Conversations Test 5 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t5': {
    name: 'Part 3 Conversations | Test 5',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t5',
    bookletUrl: 'booklets/part3-t5-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1-xM3TB5i1uHD6BuRD4ezsxoZxCi-DSsR/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },

  // Part 3 Conversations Test 7 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t7': {
    name: 'Part 3 Conversations | Test 7',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t7',
    bookletUrl: 'booklets/part3-t7-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1Ex56Wf7j4Ozrc6nJfT_cFexu6hKkfGg8/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },
  // Part 3 Conversations Test 8 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t8': {
    name: 'Part 3 Conversations | Test 8',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t8',
    bookletUrl: 'booklets/part3-t8-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1G9VQGxrlfdaEweOR65efgrFdqjlgj4ml/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },
  // Part 3 Conversations Test 9 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t9': {
    name: 'Part 3 Conversations | Test 9',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t9',
    bookletUrl: 'booklets/part3-t9-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1iJweiqo2xVnLn0E91eF5Q5ZKP2fIY2mb/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },
  // Part 3 Conversations Test 10 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t10': {
    name: 'Part 3 Conversations | Test 10',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t10',
    bookletUrl: 'booklets/part3-t10-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1cyDQIYIohGES4RqtZAAw1utv86-ImKwF/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },
  // Part 3 Conversations Test 11 (Drive folder 'LISTENING PART 3 only'): questions 32 to 70 of a TOEIC Listening, shown as 32 to 70 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part3-t11': {
    name: 'Part 3 Conversations | Test 11',
    part: 'Part 3',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part3-t11',
    bookletUrl: 'booklets/part3-t11-booklet.pdf',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 31,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1ZRNs_oKsaM6PO36ydX4NvWScH4Vcic7P/view?usp=sharing',
    partIds: ['p3'],
    total: 39,
    parts: [
      { name: 'Part 3: Conversations', start: 1, end: 39, choices: ['A','B','C','D'] }
    ]
  },

  // Part 2 Question-Response Test 1 (Drive folder 'Part 2'): questions 7 to 31 of a TOEIC Listening, shown as 7 to 31 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part2-t1': {
    name: 'Part 2 Question-Response | Test 1',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t1',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1YGvcLZ2Spt7JXfbYAWxGkXnxaYXMHwAb/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },

  // Part 2 Question-Response Test 2 (Drive folder 'Part 2'): questions 7 to 31 of a TOEIC Listening, shown as 7 to 31 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part2-t2': {
    name: 'Part 2 Question-Response | Test 2',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t2',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1-qFYfOVo5TnHA_wY2pOPCG0S9NNGmY1g/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },

  // Part 2 Question-Response Test 3 (Drive folder 'Part 2'): questions 7 to 31 of a TOEIC Listening, shown as 7 to 31 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part2-t3': {
    name: 'Part 2 Question-Response | Test 3',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t3',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1A281vU9aIBhzuiZZz_L9TBy1PQdaF0zz/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },

  // Part 2 Question-Response Test 4 (Drive folder 'Part 2'): questions 7 to 31 of a TOEIC Listening, shown as 7 to 31 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part2-t4': {
    name: 'Part 2 Question-Response | Test 4',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t4',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1lY5AvalgnNC_DvRdKemJDKbcVOe2s7g7/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },

  // Part 2 Question-Response Test 5 (Drive folder 'Part 2'): questions 7 to 31 of a TOEIC Listening, shown as 7 to 31 (numOffset),
  // audio streamed from Drive, two attempts per student (an admin can grant more), closed until an admin opens it.
  'part2-t5': {
    name: 'Part 2 Question-Response | Test 5',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t5',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1fiVenwuWuk6E7nGihJ8pY3w4KManzPJP/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },

  'part2-t6': {
    name: 'Part 2 Question-Response | Test 6',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t6',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1woE3_87ahHSaoVvdx8vSHB9Tn9RkrZaH/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t8': {
    name: 'Part 2 Question-Response | Test 8',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t8',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1SrndFsTKicFpIm_yHdoN_TwqqpWmR72V/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t9': {
    name: 'Part 2 Question-Response | Test 9',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t9',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/12e9e4kFyWKRbNeI027MEg4Td2aYQ8tGN/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t10': {
    name: 'Part 2 Question-Response | Test 10',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t10',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1qKMqZRyuCmUyhfALzcgrM9_4OJMeHVzH/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t11': {
    name: 'Part 2 Question-Response | Test 11',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t11',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1lBAIE1kJKnRnKYce4201yrvpADKxQQCA/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t12': {
    name: 'Part 2 Question-Response | Test 12',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t12',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1BuKvLodZmh-3zty3sW6YJ53HzioyHqKu/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t14': {
    name: 'Part 2 Question-Response | Test 14',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t14',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1_Zmghs2BYi-CUPKKKvLrja9vo-ugiZ9Z/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t15': {
    name: 'Part 2 Question-Response | Test 15',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t15',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1bxj1_lp_U8-16c7Hspl27QLzzxSqUvth/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t16': {
    name: 'Part 2 Question-Response | Test 16',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t16',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1mUzyfDIWidcJHTX7kiBLPO8LdoYo33OH/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t17': {
    name: 'Part 2 Question-Response | Test 17',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t17',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/17pCHV2td8TJjX-kknToHn4mmzRd3S8AT/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t18': {
    name: 'Part 2 Question-Response | Test 18',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t18',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1d3JlDkeX1E5WtRvpjXezFIxu3hPHNKvQ/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t19': {
    name: 'Part 2 Question-Response | Test 19',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t19',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1ryqDI7MkEIQxEAG8WIsRtsiUphrTV5MG/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t20': {
    name: 'Part 2 Question-Response | Test 20',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t20',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/15av82v0h9Vi3_s5HsseZl3TBk5KlIB22/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t21': {
    name: 'Part 2 Question-Response | Test 21',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t21',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1C4y1TDWLG7niT1rBDwBkOhkE52xi_Pxp/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t22': {
    name: 'Part 2 Question-Response | Test 22',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t22',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1jsi53dler5jUF1Ah7kIlbSVA-IkGxELx/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t23': {
    name: 'Part 2 Question-Response | Test 23',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t23',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1m1MQ86CmzxJKVK10YbZnK7_c3N8YZewA/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t25': {
    name: 'Part 2 Question-Response | Test 25',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t25',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1DXaNbmXA0wTjeB9fYomWZg4-7sXqGfTz/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t26': {
    name: 'Part 2 Question-Response | Test 26',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t26',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1LvU8u7cgTi_6Q2NfBQSBgFWosBOV5unZ/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t27': {
    name: 'Part 2 Question-Response | Test 27',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t27',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1yDVKvXfTRmpQ-nZdlyMZpKQR-WnHGAk7/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t28': {
    name: 'Part 2 Question-Response | Test 28',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t28',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1VVWBHuXnadvJUAdjkpto_pahFmRUvOTU/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t29': {
    name: 'Part 2 Question-Response | Test 29',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t29',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1v9FAjIaUjk5Hay4s-LC_ec66gSVEj95q/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t30': {
    name: 'Part 2 Question-Response | Test 30',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t30',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1VVb4y5zw3gTzCzackkc43kH0rzIFFeUf/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t31': {
    name: 'Part 2 Question-Response | Test 31',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t31',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1si1kJVFjezCnclS7mzpnManz9tB9dfil/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t32': {
    name: 'Part 2 Question-Response | Test 32',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t32',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/16IDZUmJ1QDxhwzP322YbYd1bglZZ7rn-/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
  'part2-t33': {
    name: 'Part 2 Question-Response | Test 33',
    part: 'Part 2',
    section: 'P',
    practice: true,
    defaultClosed: true,   // closed until an admin opens it
    baseId: 'part2-t33',
    maxAttempts: 2,        // keep in sync with "attempts" in api/_keys.js
    numOffset: 6,
    audioControlled: true,
    audioUrl: 'https://drive.google.com/file/d/1x2aPYguwiPUilr3MtT4ekQuC5cCc_tAD/view?usp=sharing',
    partIds: ['p2'],
    total: 25,
    parts: [
      { name: 'Part 2: Question-Response', start: 1, end: 25, choices: ['A','B','C'] }
    ]
  },
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
  },

  'p7-test-b': {
    name: 'Part 7 Training | Test B',
    part: 'Part 7',
    section: 'P',
    practice: true,
    page: 'part7-b.html',
    baseId: 'p7-b',
    audioControlled: false,
    duration: 52 * 60,
    partIds: ['p7'],
    total: 54,
    parts: [
      { name: 'Part 7 | Reading Comprehension', start: 1, end: 54, choices: ['A','B','C','D'] }
    ]
  },

  'p7-test-c': {
    name: 'Part 7 Training | Test C',
    part: 'Part 7',
    section: 'P',
    practice: true,
    page: 'part7-c.html',
    baseId: 'p7-c',
    audioControlled: false,
    duration: 52 * 60,
    partIds: ['p7'],
    total: 54,
    parts: [
      { name: 'Part 7 | Reading Comprehension', start: 1, end: 54, choices: ['A','B','C','D'] }
    ]
  }
};

// Open/closed state of a test. The admin stores true/false per test; a test without a stored
// setting is open, unless it is declared defaultClosed.
function testIsOpen(accessTests, id) {
  const v = (accessTests || {})[id];
  if (v === true) return true;
  if (v === false) return false;
  const T = TESTS_DATA[id];
  return !(T && T.defaultClosed);
}

// Expected length of a Listening test's audio track, in seconds. A test can set
// its own `audioDuration`; otherwise the official TOEIC Listening length is used.
const DEFAULT_AUDIO_DURATION = 45 * 60;
function audioDurationSec(T) { return (T && T.audioDuration) || DEFAULT_AUDIO_DURATION; }
