// Shared by index.html (signup list) and admin.html (grouping/filters).
// Students used to type their department freely, so stored values are messy
// ("GC3", "gc 3 - GR14", "Génie civil groupe 1"...). normDept() maps a raw
// value to a promo label for display, filters and exports. Stored data is
// never modified.
// PROMOS = the only choices offered in the signup dropdown (no free typing).
const PROMOS = ['TC3 8h','TC3 10h','TC3 14h','TC3 16h','TC4 8h','TC4 10h','TC4 14h','TC4 16h','TC2A3','TC2A4','M1 GC','M1 GM','Booster'];
const NO_PROMO = 'Not specified';

function normDept(raw) {
  let c = String(raw || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase()
    .replace(/[^A-Z0-9]+/g, ' ').trim();
  if (!c) return NO_PROMO;
  c = c.replace(/^E ?G /, '').replace(/^3A ?(?=[A-Z])/, '');
  let m;
  if (/\b(M1|MASTER)\b ?GM\b|^GM( |\d|$)/.test(c) || /^GM MASTER/.test(c)) return 'M1 GM';
  if (/\b(M1|MASTER) ?GC\b|^M1GC/.test(c)) return 'M1 GC';
  if (/^GENIE CIVIL/.test(c)) return 'GC';
  if (/^BOOSTER/.test(c)) return 'Booster';
  if ((m = c.match(/^TC ?2 ?A ?([34])(?![0-9])/))) return 'TC2A' + m[1];
  if ((m = c.match(/^TC ?([34]) ?(8|10|14|16) ?H(?![A-Z0-9])/))) return 'TC' + m[1] + ' ' + m[2] + 'h';
  if ((m = c.match(/^(ISIA|IS|2IA|IOT|MECA|GBA|MAT|EIF|EUF|TC|GC)(?: ?(\d))?(?: ?A)?(?![A-Z0-9])/))) {
    const fam = m[1] === 'IS' ? 'ISIA' : m[1];
    return fam + (m[2] || '');
  }
  // Only a group number was given ("GR2", "Group 12", "3A-GRP2", "G1"...)
  if (/^(3A )?(G|GR|GRP|GROUP|GROUPE|EG GRP)? ?\d{1,2}( |$)/.test(c) || /^(GR|GRP|GROUP|GROUPE|G) ?\d+$/.test(c) || /^ADE ANG/.test(c) || /^3A( |$)/.test(c)) return NO_PROMO;
  return c.replace(/ /g, '');
}
// Class gating: access.classes[testId] = list of allowed classes; empty or missing = every class.
function classAllowed(classes, testId, rawDept) {
  const list = classes && classes[testId];
  if (!Array.isArray(list) || !list.length) return true;
  return list.includes(normDept(rawDept));
}
if (typeof module !== 'undefined') module.exports = { normDept, PROMOS, NO_PROMO, classAllowed };
