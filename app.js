require('./xyz');

//import { calculationsum  } from './calSum.js';
//const { x,calculationsum} = require('./calculate/calSum.js');

//const {multiply} = require('./calculate/multiply.js');

// json file import
const data = require('./data.json');
console.log(data);


const {x, calculationsum, multiply} = require('./calculate');

var name = "NamsteNodejs";
console.log("Hello " + name);

var a = 10;
var b = 20;
calculationsum(a,b);
multiply(a,b);

 
console.log(x);

//console.log(a+b);

console.log(globalThis === global); // true

//console.log(global);