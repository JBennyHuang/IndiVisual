// import pytalk.js
const pytalk = require('pytalk');
// directory to script folder
const pyscriptpath = '../python/';

// calling methods inside the python script
var script = pytalk.worker(pyscriptpath + 'main.py');
var createArr = script.method('createarr');
var sqrArr = script.method('sqrarr');

// actually passing arguments from JS to Python
var someVar = 10;
var someArr = createArr(someVar);
var someOtherArr = sqrArr(someArr);
console.log(someArr);