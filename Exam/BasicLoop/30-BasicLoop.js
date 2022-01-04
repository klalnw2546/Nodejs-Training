// check whether a number is armstrong number or not
// // arnstrong number คือ ผลรวมของเลขแต่ละตัว ที่ยกกำลังด้วยจำนวนหลัก แล้วได้ค่าเท่าเดิม เช่น 153 = 1^3 + 5^3 + 3^3 
// ใช้ Char ทำ

const readline = require('prompt-sync')();
let num = [];
num = String.fromCharCode();
num = readline('Enter number: ');
let pow = num.length;
let sum = 0; 
let fac = 1; 
let i = 0; 
let a = 0;

while (true) {
    if(a <= pow) {
        fac*= num[i];
        a++;
        if(a === pow) {
            i++;
            sum+= fac;
            fac = 1;
            a = 0;
            if(i === pow) {
                break;
            }
        }
    }
}
num = Number(num);
console.log(`Sum & Num : ${sum}, ${num}`); // เช็คค่าว่าตรงไหม
if(sum === num) {
    console.log(`${num} is armstorng number`);
}else {
    console.log(`${num} is not aremstorng number`);
}