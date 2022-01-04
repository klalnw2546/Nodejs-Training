//  print all Perfect numbers between 1 to n.
// perfect number คือ ผลรวมตัวประกอบทั้งหมด เท่ากับตัวมันเอง เช่น 28 = 1 + 2 + 4 + 7 + 14
const readline = require('prompt-sync')();
let num = readline('Enter lowerLimit: '); num = Number(num);
let num2 = readline('Enter upperLimit: '); num2 = Number(num2);
let i = 1;
let j = 1; // Comma detect
let sum = 0;

process.stdout.write(`Perfect numbers between ${num} to ${num2}:`);
while(true) {
    if(num % i === 0 && i != num) {
        sum += i;
    }
    if(i === num) {
        if(sum === num) {
            if(j != 1) { // Comma detect
                process.stdout.write(',');
            }
            process.stdout.write(` ${num}`);
            j++; // Comma detect
        }
        i = 0;
        sum = 0;
        num++;
    }
    if(num === num2) {
        break;
    }
    i++;
}