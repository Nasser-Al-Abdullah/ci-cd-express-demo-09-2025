const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: "Hello, CI/CD" });
});

app.get('/time', (req, res) => {
    res.json({ time: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exprots = app; 