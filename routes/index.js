const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'resources/html' });
});

router.get('/products', (req, res) => {
    res.sendFile('products.html', { root: 'resources/html' });
});

module.exports = router;