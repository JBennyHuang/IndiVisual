const { PythonShell } = require('python-shell');

// pyScript(...) opens up a python shell and executes a python script
//
// params 
//      scriptName  : a string representing the name of the script 
//      argv        : an array of parameters that are passed to the script
//      res         : the response that is sent after the script is executed
function pyScript(scriptName, argv, res) {
    let options = {
        scriptPath: './routes/pyscripts-api/python-scripts',
        mode: 'text',
        args: JSON.parse(argv)
    }
    PythonShell.run(scriptName, options, (err, output) => {
        if (err) throw err;
        else res.send(output);
    })
}

module.exports = pyScript;