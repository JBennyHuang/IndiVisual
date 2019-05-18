const express = require('express');
const app = express();
const request = require('request');
app.use('/', require('./routes/index.js'));                                     // home
app.use('/api/pyscripts', require('./routes/api/nodepyscripts.js'));   // executing scripts with node
app.use('/api/flaskscripts', require('./routes/api/flaskscripts.js'));       // making http calls to flask to execute scripts
// let options = {
//     url: 'localhost:1000/api/pyscripts',
//     method: 'GET',
//     qs: {
//         scriptName: 'somescript.py',
//         args: [1,2]
//     }
// }

// const options = {
//     url: 'http://localhost:5000',
//     method: 'GET'
// }

async function getReq(n) {
    if (n == 0) { return; }
    else {
        await getReq(--n);
        return request('http://localhost:1000/api/flaskscripts', (err, res, body) => {return;});
    }
}
getReq(2);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`server started on localhost:${PORT}`)
})