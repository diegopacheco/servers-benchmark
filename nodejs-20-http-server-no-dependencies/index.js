const http = require('http');
const crypto = require('crypto');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const uuid = crypto.randomUUID();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(uuid);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`NodeJS 20 - No Framework, listening on http://127.0.0.1:${port}/`);
});
