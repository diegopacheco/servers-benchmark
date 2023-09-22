const http = require('http');
const crypto = require('crypto');
const { Worker } = require('worker_threads');
const port = 3000;

const worker = new Worker('./worker.js');
worker.setMaxListeners(1000); // is this cheating?

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    if (worker.listenerCount('message') < 1000) {
      worker.postMessage('generateUUID');
      worker.once('message', (uuid) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(uuid);
      });
    } else {
      const uuid = crypto.randomUUID();
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(uuid);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`NodeJS 20 - No Framework with Worker Threads, listening on port ${port}`);
});
