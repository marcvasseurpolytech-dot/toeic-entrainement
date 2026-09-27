// Shared scoring logic — identical grid to Suivi Scores TOEIC (toeic-score-tracker.html)
// so results are consistent across both tools.

const PARTS_CANON = [
  {id:'p1', label:'Part 1', section:'L', max:6},
  {id:'p2', label:'Part 2', section:'L', max:25},
  {id:'p3', label:'Part 3', section:'L', max:39},
  {id:'p4', label:'Part 4', section:'L', max:30},
  {id:'p5', label:'Part 5', section:'R', max:30},
  {id:'p6', label:'Part 6', section:'R', max:16},
  {id:'p7', label:'Part 7', section:'R', max:54},
];

const LISTENING_TABLE = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 85, 90, 95, 100, 105, 115, 125, 135, 140, 150, 160, 170, 175, 180, 190, 200, 205, 215, 220, 225, 230, 235, 245, 255, 260, 265, 275, 285, 290, 295, 300, 310, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 385, 395, 400, 405, 415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 475, 480, 485, 490, 495, 495, 495, 495, 495, 495, 495, 495];
const READING_TABLE = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 15, 20, 25, 30, 35, 40, 45, 55, 60, 65, 70, 75, 80, 85, 90, 95, 105, 115, 120, 125, 130, 135, 140, 145, 155, 160, 170, 175, 185, 195, 205, 210, 215, 220, 230, 240, 245, 250, 255, 260, 270, 275, 280, 285, 290, 295, 295, 300, 310, 315, 320, 325, 330, 335, 340, 345, 355, 360, 370, 375, 385, 390, 395, 400, 405, 415, 420, 425, 435, 440, 450, 455, 460, 470, 475, 485, 485, 490, 495];

const CECRL_TOTAL = [
  {min:945, label:'C1'}, {min:785, label:'B2'}, {min:550, label:'B1'},
  {min:225, label:'A2'}, {min:120, label:'A1'}, {min:0, label:'< A1'}
];
const CECRL_LISTENING = [
  {min:490, label:'C1'}, {min:400, label:'B2'}, {min:275, label:'B1'},
  {min:110, label:'A2'}, {min:60, label:'A1'}, {min:0, label:'< A1'}
];
const CECRL_READING = [
  {min:455, label:'C1'}, {min:385, label:'B2'}, {min:275, label:'B1'},
  {min:115, label:'A2'}, {min:60, label:'A1'}, {min:0, label:'< A1'}
];

function partCanonById(id) { return PARTS_CANON.find(p => p.id === id); }

function lookupScore(table, raw) {
  const r = Math.max(0, Math.min(100, Math.round(raw)));
  return table[r];
}

function cecrlFor(total) {
  for (const b of CECRL_TOTAL) if (total >= b.min) return b.label;
  return '< A1';
}
function cecrlForTable(score, table) {
  for (const b of table) if (score >= b.min) return b.label;
  return '< A1';
}

// Given a TEST definition (from tests-data.js) and a stored answers[] array,
// returns { p1:{correct,max}, p2:{...}, ... } for the parts covered by that test.
function computePartBreakdown(TEST, answers) {
  const out = {};
  TEST.parts.forEach((part, i) => {
    const pid = TEST.partIds[i];
    let correct = 0;
    for (let q = part.start; q <= part.end; q++) {
      if (answers[q - 1] === TEST.keys[q - 1]) correct++;
    }
    out[pid] = { correct, max: part.end - part.start + 1 };
  });
  return out;
}

// Raw section score (0-100) converted to the /495 ETS scale for that section.
function convertedSectionScore(section, raw) {
  return lookupScore(section === 'L' ? LISTENING_TABLE : READING_TABLE, raw);
}
