const express = require('express');
const router = express.Router();
const webCam = require('./webcam-api/webcam.js');

router.get('/', (req, res) => {
    res.sendFile("streamer.html", { root: "resources/html" });
});

router.get('/start', (req, res) => {

    
    res.sendFile("streamer.html", { root: "resources/html" });
});

module.exports = router;