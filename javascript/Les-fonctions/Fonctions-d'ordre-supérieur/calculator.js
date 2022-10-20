/* Une fonction addition et une multiplication
* */

function sum(a, b) {
    return  a + b;
}

function multiply(a ,b) {
    return a * b;
}

/* Elle prend un callback mais aussi a et b qui sont nécessaires au callback
 */

function calculator(callback, a, b) {
    console.log(`Your result is ${callback(a, b)}`);
}