const express = require('express');
const router = express.Router();
const pyScripts = require('./pyscripts-api/pyscripts.js')

// make a GET request to the api
// must include two fields in the request: scriptName and args
// refer to pyScripts(...) for its signature
router.get('/', (req, res) => {
    const time = process.hrtime();
    pyScripts(req.query.scriptName, req.query.args, res);
    console.log(process.hrtime(time));
    console.log('hello');
});

module.exports = router;