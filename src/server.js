const http = require('http');
const { app } = require('./app');

const port  = process.env.SERVER_PORT || 4000;

const server = http.createServer(app);

server.listen(port);
console.log(`Runnning Server http://localhost:${port}`);