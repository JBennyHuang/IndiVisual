const express = require('express');
const request = require('request');
const router = express.Router();
const domain = 'localhost';
const targetPORT = 9191;

router.get('/:database/tables', (req, res) => {
    const database = req.params.database;
    let options = {
        url: `http://${domain}:${targetPORT}/${database}/tables`,
        method: 'GET'
    }
    request(options, (err, resposne, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

router.get('/:database/:table', (req, res) => {
    const table = req.params.table;
    const database = req.params.database;
    let options = {
        url: `http://${domain}:${targetPORT}/${database}/${table}`,
        method: 'GET',
        qs: {

        }
    }
    request(options, (err, response, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

router.post('/:database/:table', (req, res) => {
    const table = req.params.table;
    const database = req.params.database;
    const requestBody = req.body;
    let options = {
        url: `http://${domain}:${targetPORT}/${database}/${table}`,
        method: 'POST',
        json: requestBody
    }
    request(options, (err, response, body) => {
        if (err) throw err;
        else res.send(body);
    });
});

router.post('/test', (req, res) => {
    let object = {
        keys: Object.keys(req.body),
        values: Object.values(req.body)
    }
    // console.log(object);
    res.send(object);
});

module.exports = router;