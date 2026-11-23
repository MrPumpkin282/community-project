export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, pageUrl, issueType, description, submittedAt } = req.body || {};

  if (!description) {
    return res.status(400).json({ error: 'Description is required' });
  }

  const report = {
    id: `issue_${Date.now()}`,
    name: name || 'Anonymous Citizen',
    pageUrl: pageUrl || 'Unknown URL',
    issueType: issueType || 'Other',
    description,
    submittedAt: submittedAt || new Date().toISOString(),
  };

  console.log('[ISSUE REPORT RECEIVED]:', JSON.stringify(report, null, 2));

  return res.status(200).json({
    success: true,
    message: 'Report received successfully',
    reportId: report.id,
  });
}
