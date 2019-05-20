const express = require('express');
const router = express.Router();
const pyScripts = require('./pyscripts/pyscripts.js');

// default message
router.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'You have successfully connected with the PCApi'
    });
});

// must include two fields in the request: scriptName and args
// refer to pyScripts(...) for its signature
router.get('/pyscripts', (req, res) => {
    pyScripts(req.query.scriptName, req.query.args, res);
});

module.exports = router;
