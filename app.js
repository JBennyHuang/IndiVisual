var express = require('express');

var app = express();

app.use(express.static('resources/html'));
app.use(express.static('resources/stylesheet'));
app.use(express.static('resources/javascript'));

// bootstrap
app.use(express.static('node_modules/bootstrap/dist'));

// jquery
app.use(express.static('node_modules/jquery/dist'))

// temp // will be moved to database
app.use(express.static('resources/images'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(3000);

console.log('server started...')