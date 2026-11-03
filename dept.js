// Shared by index.html (signup list) and admin.html (grouping/filters).
// Students used to type their department freely, so stored values are messy
// ("GC3", "gc 3 - GR14", "Génie civil groupe 1"...). normDept() maps a raw
// value to a promo label for display, filters and exports. Stored data is
// never modified.
const PROMOS = ['ISIA3','ISIA4','2IA3','2IA4','GC3','GC4','MECA3','IOT3','GBA3','GBA4','MAT3','EIF3','EIF4','TC3','TC4','M1 GC','M1 GM','BOOSTER4'];
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
  if (/^BOOSTER ?4/.test(c)) return 'BOOSTER4';
  if ((m = c.match(/^(ISIA|IS|2IA|IOT|MECA|GBA|MAT|EIF|EUF|TC|GC)(?: ?(\d))?(?: ?A)?(?![A-Z0-9])/))) {
    const fam = m[1] === 'IS' ? 'ISIA' : m[1];
    return fam + (m[2] || '');
  }
  // Only a group number was given ("GR2", "Group 12", "3A-GRP2", "G1"...)
  if (/^(3A )?(G|GR|GRP|GROUP|GROUPE|EG GRP)? ?\d{1,2}( |$)/.test(c) || /^(GR|GRP|GROUP|GROUPE|G) ?\d+$/.test(c) || /^ADE ANG/.test(c) || /^3A( |$)/.test(c)) return NO_PROMO;
  return c.replace(/ /g, '');
}
if (typeof module !== 'undefined') module.exports = { normDept, PROMOS, NO_PROMO };
