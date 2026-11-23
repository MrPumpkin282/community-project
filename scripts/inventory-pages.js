import fs from 'fs';
import path from 'path';
import { SCHEMES } from '../src/data/schemes.js';

const pages = [
  'Farmers.jsx',
  'PoorAndMarginalized.jsx',
  'WomenAndChildren.jsx',
  'SeniorCitizens.jsx',
  'Workers.jsx',
  'ScStTribal.jsx',
  'DisasterAndVictims.jsx',
  'Students.jsx',
  'DisabilityRights.jsx',
  'LgbtqRights.jsx',
  'CyberSafety.jsx',
  'ConsumerRights.jsx',
  'RtiGuide.jsx',
  'FindDlsa.jsx',
  'HowToApply.jsx',
  'Resources.jsx',
  'RightsCard.jsx',
  'Home.jsx',
];

const results = [];

for (const page of pages) {
  const content = fs.readFileSync(path.join('src/pages', page), 'utf8');
  
  // Find SCHEMES references
  const schemeRefs = [];
  const schemeMatch = content.match(/SCHEMES\.([a-zA-Z0-9]+)/g);
  if (schemeMatch) {
    for (const sm of schemeMatch) {
      const key = sm.replace('SCHEMES.', '');
      if (SCHEMES[key]) {
        schemeRefs.push(SCHEMES[key]);
      }
    }
  }

  // Find all external links in <a href="http...">
  const linkMatches = [];
  const aRegex = /<a[^>]+href=["'](https?:\/\/[^"']+)["'][^>]*>(.*?)<\/a>/gs;
  let m;
  while ((m = aRegex.exec(content)) !== null) {
    const url = m[1];
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    linkMatches.push({ url, text });
  }

  // Find telephone links
  const telMatches = [];
  const tRegex = /href=["']tel:([^"']+)["']/g;
  while ((m = tRegex.exec(content)) !== null) {
    telMatches.push(m[1]);
  }

  results.push({
    page,
    schemeRefs,
    linkMatches,
    telMatches: Array.from(new Set(telMatches))
  });
}

fs.writeFileSync('scripts/page-inventory.json', JSON.stringify(results, null, 2));
console.log('Inventory saved for', results.length, 'pages.');
