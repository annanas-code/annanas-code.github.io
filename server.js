const st = require('st');
const http = require('http');
 
console.log('Server running on: http://localhost:1337/');
console.log('Kill server with Ctr+C');
http.createServer(
  st(process.cwd())
).listen(1337);
