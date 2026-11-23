import { SEARCH_INDEX } from '../src/data/searchIndex.js';

const testQueries = [
  'PM-KISAN',
  '15100',
  '1930',
  '1915',
  'SAMVAD',
  'Anti-Ragging',
  'Digital Arrest',
  'RTI',
  'disability',
  'farm',
  'rag',
  'scam'
];

console.log('Testing Search Queries against SEARCH_INDEX (' + SEARCH_INDEX.length + ' items indexed):\n');

for (const q of testQueries) {
  const trimmed = q.trim().toLowerCase();
  const matched = SEARCH_INDEX.filter((item) => {
    const inTitle = item.title.toLowerCase().includes(trimmed);
    const inSummary = item.summary.toLowerCase().includes(trimmed);
    const inKeywords = item.keywords.some((kw) => kw.toLowerCase().includes(trimmed));
    return inTitle || inSummary || inKeywords;
  });

  if (matched.length > 0) {
    console.log(`[PASS] Query "${q}" matched ${matched.length} item(s): -> top result: "${matched[0].title}" (${matched[0].url})`);
  } else {
    console.log(`[FAIL] Query "${q}" returned 0 matches`);
  }
}
