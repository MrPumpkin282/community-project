import fs from 'fs';
import path from 'path';

function scanDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(scanDir(fullPath));
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = scanDir('./src');
const urlRegex = /https?:\/\/[^\s'"`>)]+/g;
const links = new Map();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    let url = match[0].replace(/[;,.]*$/, '');
    // Ignore schema namespaces or local/example URLs if any
    if (url.includes('www.w3.org')) continue;
    if (!links.has(url)) links.set(url, new Set());
    links.get(url).add(path.relative('.', file).replace(/\\/g, '/'));
  }
}

console.log(`Found ${links.size} unique external URLs across source files.`);

async function checkUrl(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      signal: controller.signal,
      redirect: 'follow'
    });
    clearTimeout(timeoutId);
    return {
      status: res.status,
      ok: res.ok,
      finalUrl: res.url,
      redirected: res.redirected && res.url !== url
    };
  } catch (err) {
    clearTimeout(timeoutId);
    return {
      error: err.name === 'AbortError' ? 'Timeout (10s)' : err.message,
      ok: false
    };
  }
}

async function run() {
  const report = [];
  for (const [url, fileSet] of links.entries()) {
    process.stdout.write(`Checking ${url}... `);
    const res = await checkUrl(url);
    const fileList = Array.from(fileSet).join(', ');
    if (res.ok) {
      console.log(`OK (${res.status})` + (res.redirected ? ` -> Redirected to ${res.finalUrl}` : ''));
      report.push({
        url,
        files: fileList,
        status: res.redirected ? 'Redirected' : 'Working',
        httpCode: res.status,
        finalUrl: res.finalUrl,
        notes: res.redirected ? `Redirects to ${res.finalUrl}` : 'Resolves successfully'
      });
    } else {
      console.log(`FAILED: ${res.error || res.status}`);
      report.push({
        url,
        files: fileList,
        status: res.error ? 'Unverifiable / Error' : 'Broken',
        httpCode: res.status || 'N/A',
        notes: res.error || `HTTP ${res.status}`
      });
    }
  }

  fs.writeFileSync('link-verification-report.json', JSON.stringify(report, null, 2));
  console.log('\nReport written to link-verification-report.json');
}

run();
