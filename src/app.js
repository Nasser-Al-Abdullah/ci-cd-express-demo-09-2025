const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: "Hello, CI/CD" });
});

app.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.get('/test-ci-cd', (req, res) => {
  res.json({ message: "We Passed the test!!!" });
});

module.exports = app; // export app only
