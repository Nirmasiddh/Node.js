
function multiply(a, b) {

    const product = a * b;
    console.log("The product of two numbers is: ", product);

    setTimeout(() => {
        console.log("settimeout")
    }, 3000);

}

module.exports = { multiply };  // in common js module