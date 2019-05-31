const express = require('express');
const router = express.Router();
const { Client } = require('pg');

// use environment variable to connect to the db
let settings = {
    connectionString: process.env.POSTGRES_DB_URI,
    ssl: true
};

router.get('/tables', (req, res) => {
    const client = new Client(settings);
    client.connect();
    client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'", (err, qres) => {
        client.end();
        res.send(qres.rows);
    });
});

router.get('/:table', (req, res) => {
    const table = req.params.table;
    const client = new Client(settings);
    client.connect();
    client.query(`SELECT * FROM ${table}`, (err, qres) => {
        client.end();
        res.send(qres.rows);
    });
});

router.post('/:table', (req, res) => {
    res.send(req);
});


// router.put('/:table', (req, res) => {

// });

// Move DELETE to a task instead
// router.delete('/:table', (req, res) => {

// });

module.exports = router