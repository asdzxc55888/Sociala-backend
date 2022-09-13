'use strict';

const express = require('express');

// Constantsua
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Guysss');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);