const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: "Hello, CI/CD" });
});

app.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

module.exports = app; // export app only
