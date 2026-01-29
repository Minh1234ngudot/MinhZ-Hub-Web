// API endpoint: /api/totalexecute
// Ultra simple - always returns success
// Counter will increment based on timestamp

export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type', 'application/json');

  // Handle OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Calculate a fake growing number based on time
  const startDate = new Date('2026-01-29T00:00:00Z').getTime();
  const now = Date.now();
  const daysPassed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  const fakeCounter = 1 + (daysPassed * 50); // Grows ~50 per day

  // Always return success
  return res.status(200).json({
    total_execute: fakeCounter,
    status: "success"
  });
}
