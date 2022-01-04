// check whether a number is Strong number or not
// Strong number คือ ผลรวมของ แฟคแต่ละตัวแล้วเท่ากับตัวมันเอง เช่น 145 = !1 + !4 + !5

const readline = require('prompt-sync')();
let num = readline('Enter number: ');
let length = num.length;
let i = 1;
let fac = 1;
let sum = 0;

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
            console.log(`${num} is a strong number`);
            break;
        } else {
            console.log(`${num} is not a strong number`);
            break;
        }
    }
    i++
}
