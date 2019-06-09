const { PythonShell } = require('python-shell');

/**
 * @function pyCom(...) opens up a python shell and executes a python script
 * 
 * @param {string} scriptName   : a string representing the name of the script
 * @param {any[]} argv          : an array of parameters that are passed to the script
 * @param {Response} res        : the response that is sent after the script is executed
 * 
 * @returns {JSON}
 */
function pyCom(scriptName, argv, res) {
    let options = {
        scriptPath: './routes/pycom/python-scripts',
        mode: 'text',
        args: JSON.parse(argv)
    }

    PythonShell.run(scriptName, options, (err, output) => {

        let api_response = {
            success: true,
            body: output
        }

        if (err) {
            api_response = {
                success: false,
                body: err
            }
        }

        res.send(api_response);
    });
}

module.exports = pyCom;