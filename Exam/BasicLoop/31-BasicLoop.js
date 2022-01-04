ไไ// check number n1 to n2 is armstrong number or not
// arnstrong number คือ ผลรวมของเลขแต่ละตัว ที่ยกกำลังด้วยจำนวนหลัก แล้วได้ค่าเท่าเดิม เช่น 153 = 1^3 + 5^3 + 3^3 

const readline = require('prompt-sync')();
let num = readline('Enter lowerLimit: '); // num = ขอบล่าง
let num2 = readline('Enter uppeLimit: '); // num2 = ขอบบน
process.stdout.write(`Armstrong number from ${num} to ${num2} are:`);
num = Array.from(num); // แปลงจาก String to Arrays
num2 = Array.from(num2);
num2 = +num2.join(''); // ทำไมมันเอาไปใส่ข้างล่างไม่ได้วะ 5555
let sum = 0; 
let fac = 1; 
let i = 0; 
let j = 1; // เอาไว้ลบ Comma
let a = 0;

while (true) {
    let pow = num.length;  // เลขยกกำลัง = จำนวนหลัก
    if(a <= pow) {
        fac*= num[i];
        a++;
        if(a === pow) {
            i++;
            sum+= fac;
            fac = 1;
            a = 0;
            if(i === pow) {
                num = +num.join('');
                // num2 = +num2.join(''); ใส่ไม่ได้เฉย
                if(sum === num) {
                    if(j != 1) { // รอบแรกจะไม่ใส่ คอมม่า
                        process.stdout.write(`,`);
                    }
                    process.stdout.write(` ${num}`);
                    j++;
                } 
                if(num === num2) {
                    break;
                }
                sum = 0;
                i = 0;
                num++;
                num = String(num);
                num = Array.from(num);
            }
        }
    }
}

/* console.log(`Sum & Num : ${sum}, ${num}`); // เช็คค่า ผลรวมอังสตรอม กับ เลขที่ใส่เข้าไป
if(sum === num) {
    console.log(`${num} is armstorng number`);
}else {
    console.log(`${num} is not aremstorng number`);
} */