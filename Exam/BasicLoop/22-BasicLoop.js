//  find all factors of a number.

const readline = require('prompt-sync')();
let num = readline('Enter number: '); num = Number(num);
let i = 1;

process.stdout.write(`Factors of ${num}:`);
while(i <= num) {
    if(num % i === 0) {
        process.stdout.write(` ${i},`);
    }
    i++;
}