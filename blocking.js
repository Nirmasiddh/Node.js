const crypto = require("crypto");

console.log("hello world");

var a = 10467;
var b = 10987;

// synchronous function 
crypto.pbkdf2Sync( "password", "salt", 500000, 50, "sha512"); 
console.log(" First key is generated");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log(" key is generated");
});

function multiplyFn(a,b){
    const result = a * b;
    return result;
}

var c = multiplyFn(a,b);
console.log("Multiplication is: " + c);

