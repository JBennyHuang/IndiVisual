const { PythonShell } = require('python-shell');
const spacing = 7;

/**
 * pyCom(scriptName, argv, res) opens up a python shell and executes a python script
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

        // Easier to read in PostMan
        res.send(JSON.stringify(api_response, null, spacing));
    });
}

module.exports = pyCom;