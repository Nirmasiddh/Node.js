
console.log("hello world");

var a = 10467;
var b = 10987;

setTimeout(() => {
    console.log("call me right now");
}, 0);

setTimeout(() => {
    console.log("call a Asap");
}, 3000);

function multifltFn(x, y){
    const result = a*b;
    return result;
}

var c = multifltFn(a,b);
console.log("Multiplication is: " + c);