const express = require('express');
const app = express();

const port  = process.env.SERVER_PORT || 4000;

app.get('/', (req, res) => res.json('Hello World'));

app.listen(port);
console.log(`Runnning Server http://localhost:${port}`);