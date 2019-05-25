const { PythonShell } = require('python-shell');

/**
 * pyScript(scriptName, argv, res) opens up a python shell and executes a python script
 * 
 * @param {string} scriptName   : a string 
 * @param {any[]} argv          : an array of parameters that are passed to the script
 * @param {Response} res        : the response that is sent after the script is executed
 * 
 * @returns {JSON}
 */
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