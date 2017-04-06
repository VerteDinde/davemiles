'use strict';

const express = require('express');
const app = express();

const PORT = 3000;
app.get('/', function(req, res) {
  res.send('Hello');
})

app.listen(PORT, function () {
  console.log(`Server set to ${PORT}`);
});