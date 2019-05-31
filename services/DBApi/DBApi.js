const express = require('express');
const app = express();

// routes to different databases
app.use('/postgresdb', require('./databases/postgres-db.js'));

// Default route
app.get('/', (req, res) => {
    res.send('You have successfully connected to the DBApi');
});

const DB_PORT = process.env.DB_PORT;
app.listen(DB_PORT, () => {
    console.log(`server started on port ${DB_PORT}`);
});
