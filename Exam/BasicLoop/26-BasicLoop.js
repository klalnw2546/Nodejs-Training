//  check whether a number is Prime number or not.

const readline = require('prompt-sync')();
let i = 2;
let num = readline('Enter number: '); 
num = Number(num);

while(i <= num || num === 1) {
    if((num % i === 0 && num != i) || num === 1) {
        console.log(`${num} is not prime number`);
        break;
    }
    else if(num === 2 || num - i === 1){
        console.log(`${num} is prime number`);
        break;
    }
    i++;
}