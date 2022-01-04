//  find prime factors of a number

const readline = require('prompt-sync')();
let num = readline('Enter number: '); num = Number(num);
let i = 1;
let Factor;
let j;

process.stdout.write(`Prime factors of ${num}:`);
while(i <= num) {
    if(num % i === 0) {
        if(i != 1) {
            Factor = i;
            j = 1;
            while(j <= Factor) {
                if(Factor % j != 0 || Factor === 2) {
                    if(Factor-1 === j) {
                        process.stdout.write(` ${Factor}`);
                    }
                } else if(Factor % j === 0 && j != 1){
                    j = Factor;
                }
                j++;
            }
        }
    }
    i++;
}