const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Here's the problem: we don't handle the error correctly! 
    console.error('Error:', error);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random failure
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Simulated asynchronous operation failed!'));
      }
    }, 100);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});