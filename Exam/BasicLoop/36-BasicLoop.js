// print fibonacci series upto n terms
// เลข fibonacci คือชุดเลขที่ จำนวนถัดไป เท่ากับ ผลบวกของ 2 จำนวนก่อนหน้า : 0,1,1,2,3,5,8,13,21,34,55 ........

const readline = require('prompt-sync')();
let terms = readline('Enter number of terms: ');
let num = ['0', '1'];
let i = 2;

console.log(`Fibonacci series for ${terms} terms: `);

while(i < terms) {
    num[i] = Number(num[i-1]) + Number(num[i-2]);
    i++;
}
process.stdout.write(`${num}`);