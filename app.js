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
app.get('/watch-details', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'watch-details.html'));
});
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});
app.get('/wishlist', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'wishlist.html'));
});

app.get('/shopping-bag', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'shopping-bag.html'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
