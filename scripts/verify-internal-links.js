import fs from 'fs';
import path from 'path';

function scan(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) files = files.concat(scan(p));
    else if (f.endsWith('.js') || f.endsWith('.jsx')) files.push(p);
  }
  return files;
}

const appCode = fs.readFileSync('src/App.jsx', 'utf8');
const routeMatches = [...appCode.matchAll(/path=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Defined App Routes in App.jsx:');
console.log(routeMatches);

const linkMatches = new Set();
for (const file of scan('src')) {
  const c = fs.readFileSync(file, 'utf8');
  for (const m of c.matchAll(/to=["'](\/[a-zA-Z0-9\-\/:]*)["']/g)) {
    linkMatches.add(m[1]);
  }
  for (const m of c.matchAll(/navigate\(["'](\/[a-zA-Z0-9\-\/:]*)["']\)/g)) {
    linkMatches.add(m[1]);
  }
  for (const m of c.matchAll(/next:\s*["']section:(\/[a-zA-Z0-9\-\/:]*)["']/g)) {
    linkMatches.add(m[1]);
  }
  for (const m of c.matchAll(/url:\s*["'](\/[a-zA-Z0-9\-\/:]*)["']/g)) {
    linkMatches.add(m[1]);
  }
}

console.log('\nInternal links used across components & data:');
console.log([...linkMatches]);

const missing = [];
for (const l of linkMatches) {
  const match = routeMatches.some(r => {
    if (r === l) return true;
    if (r.includes(':')) {
      const base = r.split('/:')[0];
      if (l.startsWith(base + '/')) return true;
    }
    return false;
  });
  if (!match) missing.push(l);
}

if (missing.length === 0) {
  console.log('\n[PASS] All internal links have a matching route in App.jsx (0 dead internal routes)');
} else {
  console.log('\n[FAIL] Missing/Unrouted internal links found:', missing);
}
