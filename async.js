
const fs = require('fs');
const https = require('https');

console.log("Hello world");

var a = 1078698;
var b = 28986;

// Synchronous file read
fs.readFileSync("file.txt", "utf-8");
console.log("File read synchronously"); 

https.get('https://jsonplaceholder.typicode.com/todos/1', (resp) => {
    console.log("Inside https get method");
});

setTimeout(() => {
    console.log("settimout called after 5 second");
}, 5000); 


// Asynchronous file read
fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log("File data:", data);
});

function multiplyFn(x,y){
    const result = a * b;
    return result;
}

var c = multiplyFn(a,b);
console.log("The product of two numbers is: ", c); 