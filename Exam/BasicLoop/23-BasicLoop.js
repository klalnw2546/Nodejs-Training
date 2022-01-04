// calculate factorial of a number.

const readline = require('prompt-sync')();
let num = readline('Enter number: ');
fac = 1;
let i = 1;

while(i <= num) {
    fac*= i;
    i++
}
console.log(`factorial: ${fac}`);