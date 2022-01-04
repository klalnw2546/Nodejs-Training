// check whether a number is perfect number or not
// perfect number คือ ผลรวมตัวประกอบทั้งหมด เท่ากับตัวมันเอง เช่น 28 = 1 + 2 + 4 + 7 + 14

const readline = require('prompt-sync')();
let num = readline('Enter number: '); num = Number(num);
let i = 1;
let sum = 0;

while(i <= num) {
    if(num % i === 0 && i != num) {
        sum += i;
    }
    if(i === num) {
        if(sum === num) {
            console.log(`${num} is perfect number`);
        }else {
            console.log(`${num} is not perfect number`);
        }
    }
    i++;
}