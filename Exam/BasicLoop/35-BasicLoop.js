// check a number from n1 to n2 are Strong number or not
// Strong number คือ ผลรวมของ แฟคแต่ละตัวแล้วเท่ากับตัวมันเอง เช่น 145 = !1 + !4 + !5

const readline = require('prompt-sync')();
let num = readline('Enter lowerLimit: ');
let num2 = readline('Enter upperLimit: ');
let length = num.length;
let i = 1;
let fac = 1;
let j = 1; // Comma detect
let sum = 0;

process.stdout.write(`Strong number from ${num} to ${num2}:`);
while(true) {
    fac *= i;
    if(i === Number(num[length - 1]) || Number(num[length - 1]) === 0 ) {
        if(Number(num[length-1]) === 0) {
            i = 0;
            fac *= i;
        }
        sum += fac;
        fac = 1;
        i = 0;
        length--;
    } else if(length - 1 < 0) {
        if(sum === Number(num)) {
            if(j != 1) {
                process.stdout.write(`,`);
            }
            process.stdout.write(` ${num}`);
            j++;
        } 
        i = 0;
        fac = 1;
        sum = 0;
        num++;
        num = String(num);
        length = num.length;
    }
    if(Number(num) === Number(num2)) {
        break;
    }
    i++
}