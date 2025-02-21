const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/watches', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'watches.html'));
});
app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about-us.html'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
