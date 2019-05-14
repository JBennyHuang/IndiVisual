const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html');
});

router.get('/streamer', (req, res) => {
    res.sendFile("streamer.html", { root: "resources/html" });
});

module.exports = router;