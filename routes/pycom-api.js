const express = require('express');
const router = express.Router();
const request = require('request');
const domain = 'localhost';
const targetPORT = 9000;

// refer to the PCApi for information of the routes

router.get('/', (req, res) => {

    let options = {
        url: `http://${domain}:${targetPORT}/pycom`,
        method: 'GET',
        qs: req.query
    }
    request(options, (err, response, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

module.exports = router;