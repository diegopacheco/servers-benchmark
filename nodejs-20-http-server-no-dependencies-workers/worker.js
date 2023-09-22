const { parentPort } = require('worker_threads');
const crypto = require('crypto');

parentPort.on('message', (task) => {
  if (task === 'generateUUID') {
    const uuid = crypto.randomUUID();
    parentPort.postMessage(uuid);
  }
});
