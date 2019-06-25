const express = require('express');

const app = express();

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

app.get('/products', function (req, res) {
    res.sendFile('products.html', {root: 'resources/html'});
});



/***********************************TESTING BLOCK FOR PYTHON-SHELL***********************************/
const {PythonShell} = require('python-shell');

// Default options for the shell
PythonShell.defaultOptions = {scriptPath: 'resources/python'};

// Customized options for different commands
let options = {
    mode: 'text', // specifies in which mode the data is going to be sent to Python
    args: [1,2]
};

// Execute a Python script, providing input from stdio
PythonShell.run('somescript.py', options, (err, num) => {
    if (err) throw err;
    console.log('%j', num); // prints ["3"] to the console
});

// Running a shell and giving input until we exit
let pyshell = new PythonShell('otherscript.py');
pyshell.send(JSON.stringify([9, 4, 2, 0, 1]));
pyshell.on('message', (message) => {
    console.log(message);
});
pyshell.end((err) => {
    if (err) throw err;
    console.log('Shell Exited');
});

// Documentation on https://www.npmjs.com/package/python-shell 

/***************************************************************************************************/
app.listen(3000);

console.log('server started...')