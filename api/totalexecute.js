export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Content-Type', 'application/json');

  const BIN_ID = '697b0042ae596e708fffe78d';
  const API_KEY = '$2a$10$msgDRV1C167KfUdqqE8srOv7oIr9wa/RxjO0bf/XCA1UtHwOWRRCC';
  
  const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

  try {
    if (req.method === 'GET') {
      const response = await fetch(BIN_URL + '/latest', {
        headers: {
          'X-Master-Key': API_KEY
        }
      });
      
      const result = await response.json();
      const count = result.record.total_execute || 1;
      
      return res.status(200).json({
        total_execute: count,
        status: "success"
      });
    }

    if (req.method === 'POST') {
      const getResponse = await fetch(BIN_URL + '/latest', {
        headers: {
          'X-Master-Key': API_KEY
        }
      });
      
      const result = await getResponse.json();
      let count = result.record.total_execute || 1;
      
      count = parseInt(count) + 1;
      
      await fetch(BIN_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': API_KEY
        },
        body: JSON.stringify({
          total_execute: count,
          last_updated: new Date().toISOString()
        })
      });
      
      return res.status(200).json({
        total_execute: count,
        status: "success"
      });
    }

    return res.status(405).json({ 
      error: 'Method not allowed',
      status: "error" 
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      total_execute: 0,
      status: "error",
      message: error.message
    });
  }
}
