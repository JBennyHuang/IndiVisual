const express = require('express');
const WebSocket = require('ws');
const app = express();

// Express JSON Middleware
app.use(express.json());

// directories
app.use(express.static('resources/stylesheet'));
app.use(express.static('resources/javascript'));
app.use(express.static('resources/images')); // temporary
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/jquery/dist'))

// routes
app.use('/', require('./routes/index.js'));
app.use('/api/pycom/', require('./routes/pycom-api.js'));
app.use('/api/database', require('./routes/database-api.js'));

// Either uses the environment variable PORT or 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});