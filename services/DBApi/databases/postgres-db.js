const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const { getQueryResponse, postQueryResponse, putQueryResponse, deleteQueryResponse } = require('../libs/query-response.js');
const { getQueryFormat, postQueryFormat, putQueryFormat, deleteQueryFormat } = require('../libs/query-format.js');

// use environment variable to connect to the db
const settings = {
    connectionString: process.env.POSTGRES_DB_URI,
    ssl: true
};

/**
 * @route {GET}     : gets the table names of the database
 * 
 * @returns {JSON}  : { success: , message: }
 */
router.get('/tables', (req, res) => {
    const client = new Client(settings);
    client.connect();
    const queryString = `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;
    client.query(queryString, (err, qres) => {
        client.end();
        res.send(getQueryResponse(err, qres));
    });
});

/**
 * @route {GET}     : gets the rows of the :table given the query parameters
 * 
 * @returns {JSON}  : { success: , message: }
 */
router.get('/:table', (req, res) => {
    const queryParams = req.query;
    const table = req.params.table;
    const queryString = getQueryFormat(queryParams, table);

    // connect to the database using previously defined settings
    const client = new Client(settings);
    client.connect();
    client.query(queryString, (err, qres) => {
        client.end();
        res.send(getQueryResponse(err, qres));
    });
});

/**
 * @route {POST}    : writes an entry to the :table in the database
 * 
 * @returns {JSON}  : { success: , message: }
 */
router.post('/:table', (req, res) => {  
    const queryParams = req.body;
    const table = req.params.table;
    const queryString = postQueryFormat(queryParams, table);
    let response;

    // columns and values are required, we do not want an empty row in the database
    if (!queryString) {
        response = {
            success: false,
            message: 'Parameters cannot be empty'
        }
        res.send(response);
    }

    else {
        const client = new Client(settings);
        client.connect();
        client.query(queryString, (err, qres) => {
            client.end();
            response = postQueryResponse(err, qres);
            res.send(response);
        });
    }
});

/**
 * @route {PUT}     : updates an entry to the :table in the database
 * 
 * @returns {JSON}  : { success: , message: }
 */
router.put('/:table', (req, res) => {
    const queryParams = req.body;
    const table = req.params.table;
    const queryString = putQueryFormat(queryParams, table);
    let response;

    // there must have parameters, otherwise we cannot update
    if (!queryString) {
        response = {
            success: false,
            message: 'Parameters cannot be empty'
        }
    }

    else {
        const client = new Client(settings);
        client.connect();
        client.query(queryString, (err, qres) => {
            client.end();
            response = putQueryResponse(err, qres);
            res.send(response);
        });
    }
});

/**
 * @route {DELETE}  : deletes an entry to the :table in the database
 * 
 * @returns {JSON}  : { success: , message: }
 */
router.delete('/:table', (req, res) => {
    const queryParams = req.body;
    const table = req.params.table;
    const queryString = deleteQueryFormat(queryParams, table);
    let response;

    if (!queryString) {
        response = {
            success: false,
            message: 'Parameters cannot be empty'
        }
    }

    else {
        const client = new Client(settings);
        client.connect();
        client.query(queryString, (err, qres) => {
            client.end();
            response = deleteQueryResponse(err, qres);
            res.send(response);
        });
    }
});

module.exports = router