export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.countapi.xyz/hit/minhz-hub/total-exec');
    const data = await response.json();

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(data.value.toString());
  } catch (err) {
    res.status(200).send('0');
  }
}
