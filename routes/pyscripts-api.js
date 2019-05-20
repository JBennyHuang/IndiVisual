const express = require('express');
const router = express.Router();
const request = require('request');
const domain = 'localhost';
const targetPORT = 9000;

router.get('/', (req, res) => {
    const scriptName = req.query.scriptName;
    const args = req.query.args;

    let options = {
        url: `http://${domain}:${targetPORT}/pyscripts`,
        methods: 'GET',
        qs: {
            scriptName: scriptName,
            args: args
        }
    }
    request(options, (err, response, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

module.exports = router;