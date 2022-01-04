//  find power of a number using for loop

const readline = require('prompt-sync')();

let num = readline('Enter number: '); num = Number(num);
let pow =  readline('Enter power: '); pow = Number(pow);
let i = 1; 
let ans = 1;

while(i <= pow) {
    ans*= num;
    i++;
}
console.log(`${num} ^ ${pow} = ${ans}`);