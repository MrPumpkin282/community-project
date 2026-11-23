import fs from 'fs';
import path from 'path';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const report = JSON.parse(fs.readFileSync('link-verification-report.json', 'utf8'));

async function recheck(item) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(item.url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      },
      signal: controller.signal,
      redirect: 'follow'
    });
    clearTimeout(timeoutId);
    return {
      ok: res.ok,
      status: res.status,
      finalUrl: res.url,
      redirected: res.redirected && res.url !== item.url
    };
  } catch (err) {
    clearTimeout(timeoutId);
    return {
      ok: false,
      error: err.name === 'AbortError' ? 'Timeout' : err.message
    };
  }
}

async function run() {
  const verifiedList = [];
  for (const item of report) {
    const res = await recheck(item);
    if (res.ok) {
      verifiedList.push({
        url: item.url,
        files: item.files,
        status: res.redirected ? 'Redirected' : 'Working',
        httpCode: res.status,
        finalUrl: res.finalUrl,
        notes: res.redirected ? `Redirects to ${res.finalUrl}` : 'Resolves successfully'
      });
      console.log(`[PASS] ${item.url} -> ${res.status}`);
    } else {
      verifiedList.push({
        url: item.url,
        files: item.files,
        status: res.error && res.error.includes('ENOTFOUND') ? 'Broken / Host Not Found' : 'Unverifiable / Error',
        httpCode: res.status || 'N/A',
        notes: res.error || `HTTP ${res.status}`
      });
      console.log(`[FAIL] ${item.url} -> ${res.error || res.status}`);
    }
  }

  fs.writeFileSync('link-verification-final.json', JSON.stringify(verifiedList, null, 2));
  console.log('\nFinal link report written to link-verification-final.json');
}

run();
