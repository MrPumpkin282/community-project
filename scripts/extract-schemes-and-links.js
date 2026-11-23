import fs from 'fs';
import path from 'path';

// Load schemes
import { SCHEMES } from '../src/data/schemes.js';
import { SLSA_DIRECTORY } from '../src/data/slsaDirectory.js';

console.log('Schemes count:', Object.keys(SCHEMES).length);
console.log('SLSA count:', Object.keys(SLSA_DIRECTORY).length);

// Scan all JSX files for URLs and helplines
const pagesDir = path.resolve('src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

const allLinks = [];
const allHelplines = [];
const allDomains = new Set();

const urlRegex = /https?:\/\/[^\s"'`<>)]+/g;
const telRegex = /tel:([0-9\-\/]+)/g;

for (const file of files) {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    let url = match[0];
    if (url.endsWith('.')) url = url.slice(0, -1);
    if (url.endsWith(',')) url = url.slice(0, -1);
    allLinks.push({ file, url });
    try {
      const domain = new URL(url).hostname;
      allDomains.add(domain);
    } catch (e) {}
  }
  while ((match = telRegex.exec(content)) !== null) {
    allHelplines.push({ file, num: match[1] });
  }
}

// Also check schemes.js
for (const [key, scheme] of Object.entries(SCHEMES)) {
  if (scheme.link) {
    allLinks.push({ file: 'schemes.js', url: scheme.link });
    try {
      allDomains.add(new URL(scheme.link).hostname);
    } catch (e) {}
  }
}

// Also check slsaDirectory.js
for (const [code, slsa] of Object.entries(SLSA_DIRECTORY)) {
  if (slsa.website) {
    allLinks.push({ file: 'slsaDirectory.js', url: slsa.website });
    try {
      allDomains.add(new URL(slsa.website).hostname);
    } catch (e) {}
  }
}

console.log('Total external links found:', allLinks.length);
console.log('Unique domains count:', allDomains.size);
console.log('Unique domains:', Array.from(allDomains).sort());

fs.writeFileSync('scripts/extracted-domains.json', JSON.stringify({
  domains: Array.from(allDomains).sort(),
  totalLinks: allLinks.length
}, null, 2));
