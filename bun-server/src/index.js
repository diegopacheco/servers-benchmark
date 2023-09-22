const crypto = require('crypto');

console.log("Bun http running on http://127.0.0.1:3000/");
Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    
    if (url.pathname === '/') {
      const uuid = crypto.randomUUID();
      return new Response(uuid, { status: 200, headers: { 'Content-Type': 'text/plain' } });
    }
    
    return new Response('404!', { status: 404, headers: { 'Content-Type': 'text/plain' } });
  },
});
