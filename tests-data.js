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
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening Test 3 (built from the Google Forms of the Drive folder, answer keys read in the forms).
  // Standard Drive player (see Full TOEIC Test 2 GF for the reason). audioDuration is the length of the mp3.
  'fulllistening-t3-listening': {
    name: 'Full Listening Test 3',
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
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening Test 4 (built from the Google Forms of the Drive folder, answer keys read in the forms).
  // Standard Drive player (see Full TOEIC Test 2 GF for the reason). audioDuration is the length of the mp3.
  'fulllistening-t4-listening': {
    name: 'Full Listening Test 4',
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
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening Test 5 (built from the Google Forms of the Drive folder, answer keys read in the forms).
  // Standard Drive player (see Full TOEIC Test 2 GF for the reason). audioDuration is the length of the mp3.
  'fulllistening-t5-listening': {
    name: 'Full Listening Test 5',
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
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
      { name: 'Part 3 — Conversations', start: 32, end: 70, choices: ['A','B','C','D'] },
      { name: 'Part 4 — Short Talks', start: 71, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Listening Test 9 (built from the Google Forms of the Drive folder, answer keys read in the forms).
  // Standard Drive player (see Full TOEIC Test 2 GF for the reason). audioDuration is the length of the mp3.
  'fulllistening-t9-listening': {
    name: 'Full Listening Test 9',
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
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
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

  // Full Reading Test 4 (built from the Google Forms of the Drive folder; answer key read in the forms, screenshots or key PDFs).
  'fullreading-t4-reading': {
    name: 'Full Reading Test 4',
    part: 'Reading',
    section: 'R',
    baseId: 'fullreading-t4',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'booklets/fullreading-t4-reading.pdf',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Reading Test 5 (built from the Google Forms of the Drive folder; answer key read in the forms, screenshots or key PDFs).
  'fullreading-t5-reading': {
    name: 'Full Reading Test 5',
    part: 'Reading',
    section: 'R',
    baseId: 'fullreading-t5',
    defaultClosed: true,   // closed until an admin opens it
    audioControlled: false,
    duration: 75 * 60,
    bookletUrl: 'booklets/fullreading-t5-reading.pdf',
    partIds: ['p5', 'p6', 'p7'],
    total: 100,
    parts: [
      { name: 'Part 5 — Incomplete Sentences', start: 1, end: 30, choices: ['A','B','C','D'] },
      { name: 'Part 6 — Text Completion', start: 31, end: 46, choices: ['A','B','C','D'] },
      { name: 'Part 7 — Reading Comprehension', start: 47, end: 100, choices: ['A','B','C','D'] }
    ]
  },

  // Full Reading Test 6 (built from the Google Forms of the Drive folder; answer key read in the forms, screenshots or key PDFs).
  'fullreading-t6-reading': {
    name: 'Full Reading Test 6',
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
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
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
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
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
      { name: 'Part 2 — Question-Response', start: 7, end: 31, choices: ['A','B','C'] },
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
