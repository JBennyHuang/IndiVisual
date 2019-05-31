const express = require('express');
const router = express.Router();
const pyCom = require('./pycom/pycom.js');

// default message
router.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'You have successfully connected with the PCApi'
    });
});

// must include two fields in the request: scriptName and args
// refer to pyCom(...) for its signature
router.get('/pycom', (req, res) => {
    pyCom(req.query.scriptName, req.query.args, res);
});

module.exports = router;
