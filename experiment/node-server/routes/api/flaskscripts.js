const express = require('express');
const router = express.Router();
const request = require('request');
router.get('/', (req, res) => {
    const options = {
        url: 'http://localhost:5000/add',
        method: 'GET',
        qs: {
            args: '[1,2]'
        }
    }
    const time = process.hrtime();
    request(options, (err, res, body) => {
        console.log(process.hrtime(time));
        console.log(res.body)
    })
});

module.exports = router;
