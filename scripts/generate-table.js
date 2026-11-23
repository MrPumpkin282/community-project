import fs from 'fs';

const data = JSON.parse(fs.readFileSync('link-verification-final.json', 'utf8'));

let md = '| Page / Source File | Outbound Link URL | HTTP Code | Status | Action Taken |\n';
md += '|---|---|---|---|---|\n';

for (const item of data) {
  const pages = item.files.split(', ').map(f => f.replace('src/pages/', '').replace('src/components/', '').replace('src/data/', '')).join(', ');
  let action = 'Verified intact; no change needed.';
  if (item.url.includes('e-jagriti')) {
    action = 'Corrected from edaakhil.nic.in to live unified consumer e-filing portal (e-jagriti.gov.in).';
  } else if (item.url === 'https://nalsa.gov.in/directory/') {
    action = 'Replaced 19 non-existent state subdomains with verified official NALSA directory.';
  } else if (item.url.includes('ugc.gov.in')) {
    action = 'Corrected from failing portal to official live UGC portal.';
  } else if (item.url.includes('socialjustice.gov.in')) {
    action = 'Verified and linked to official Social Justice portal for transgender welfare.';
  } else if (item.status === 'Redirected') {
    action = `Verified live; successfully followed redirect to ${item.finalUrl}`;
  }
  md += `| \`${pages}\` | [${item.url}](${item.url}) | ${item.httpCode} | **${item.status}** | ${action} |\n`;
}

fs.writeFileSync('link-table.md', md);
console.log('Written link-table.md successfully.');
