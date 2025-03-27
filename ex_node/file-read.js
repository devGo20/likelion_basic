let module1 = require('./module1.js');
let fs = require('fs');
let data = fs.readFileSync('./data.txt', 'utf8');
console.log(module1.add());
console.log(data);
