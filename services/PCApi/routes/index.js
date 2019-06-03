const express = require('express');
const router = express.Router();
const pyCom = require('./pycom/pycom.js');

/**
 * @route {GET}     : default route with default message
 * 
 * @returns {JSON}  : {  success: , message: }
 */
router.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'You have successfully connected with the PCApi'
    });
});

/**
 * @route {GET}     : gets the stdout of a python script
 * 
 * @requires        : scriptName and args parameters
 * 
 * @returns {JSON}  : { success: , message: }
 */
router.get('/pycom', (req, res) => {
    pyCom(req.query.scriptName, req.query.args, res);
});

module.exports = router;
