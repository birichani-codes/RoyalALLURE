const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mpesaRoutes = require('./routes/mpesa'); // Import the M-Pesa routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// M-Pesa API routes
app.use('/api/mpesa', mpesaRoutes);

// Application routes
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
app.get('/request-an-appointment', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'request-an-appointment.html'));
});
app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-us.html'));
});
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy-policy.html'));
});
app.get('/order-confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'order-confirmation.html'));
});

// Status check endpoint for M-Pesa payments
app.post('/api/mpesa/check-status', (req, res) => {
    const { checkoutRequestID } = req.body;

    // In a real application, check the status in the database or call M-Pesa API

    // Mock response for demonstration
    setTimeout(() => {
        if (Math.random() > 0.5) {
            res.json({
                success: true,
                receiptNumber: 'MPS' + Math.floor(Math.random() * 1000000000)
            });
        } else {
            res.json({
                success: false,
                message: 'Payment pending'
            });
        }
    }, 1000);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
