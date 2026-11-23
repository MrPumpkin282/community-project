import fs from 'fs';
import path from 'path';

function scan(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) files = files.concat(scan(p));
    else if (f.endsWith('.jsx')) files.push(p);
  }
  return files;
}

const files = scan('src');
let issues = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, lineNo) => {
    // 1. Check <img> tags for alt
    if (/<img\s+[^>]*>/i.test(line) && !/alt=/i.test(line)) {
      issues.push({ file, line: lineNo + 1, type: 'Missing <img> alt attribute', code: line.trim() });
    }

    // 2. Check icon-only buttons without text or aria-label
    // e.g. <button ... > <Icon ... /> </button>
    if (/<button\s+[^>]*>/i.test(line) && !/aria-label=/i.test(line) && !/title=/i.test(line)) {
      // Check next line or same line for text
      if (/<button[^>]*>\s*<[A-Z][a-zA-Z0-9]+\s+[^>]*\/>\s*<\/button>/i.test(line)) {
        issues.push({ file, line: lineNo + 1, type: 'Button with icon only missing aria-label', code: line.trim() });
      }
    }

    // 3. Check inputs without aria-label, id, or placeholder
    if (/<input\s+[^>]*>/i.test(line) && !/aria-label=/i.test(line) && !/id=/i.test(line) && !/placeholder=/i.test(line) && !/type=["']hidden["']/i.test(line)) {
      issues.push({ file, line: lineNo + 1, type: 'Input missing accessible label', code: line.trim() });
    }
  });
}

console.log(`Audited ${files.length} JSX files.`);
if (issues.length === 0) {
  console.log('[PASS] 0 automated accessibility issues detected in JSX elements.');
} else {
  console.log(`[WARN] Flagged ${issues.length} potential accessibility issues:`);
  console.log(issues);
}
