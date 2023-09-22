const crypto = require('crypto');
const { Worker } = require('worker_threads');
const worker = new Worker('./worker.js');

console.log("Bun workers running on http://127.0.0.1:3000/");

worker.setMaxListeners(1000); // is this cheating?

Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    
    return new Promise((resolve) => {
      if (url.pathname === '/') {
        if (worker.listenerCount('message') < 1000) {
          worker.postMessage('generateUUID');
          worker.once('message', (uuid) => {
            resolve(new Response(uuid, { status: 200, headers: { 'Content-Type': 'text/plain' } }));
          });
        } else {
          const uuid = crypto.randomUUID();
          esolve(new Response(uuid, { status: 200, headers: { 'Content-Type': 'text/plain' } }));
        }
        
      } else {
        resolve(new Response('404!', { status: 404, headers: { 'Content-Type': 'text/plain' } }));
      }
    });
  },
});
