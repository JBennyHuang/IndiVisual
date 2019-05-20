const { PythonShell } = require('python-shell');

// pyScript(...) opens up a python shell and executes a python script
//
// params 
//      scriptName  : a string representing the name of the script 
//      argv        : an array of parameters that are passed to the script
//      res         : the response that is sent after the script is executed
function pyScript(scriptName, argv, res) {
    let options = {
        scriptPath: './routes/pyscripts/python-scripts',
        mode: 'text',
        args: JSON.parse(argv)
    }
    PythonShell.run(scriptName, options, (err, output) => {
        if (err) res.send({
            success: false,
            body: err
        });
        else res.send({
            success: true,
            body: output
        });
    });
}

module.exports = pyScript;