const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    let options = {
        url: 'http://localhost:1000/api/pyscripts',
        method: 'GET',
        qs: {
            scriptName: 'somescript.py',
            args: '[1,2]'
        }
    }

    request(options, (err, res, body) => {});
    return res.send('hello world');
});

module.exports = router;