const readline = require('prompt-sync')();

/* let num = readline('Enter number: ');
num = Number(num)
num = String(num)
num = Array.from(num)
console.log(num);
console.log(num.length);
while(true) {
    if(num.length === 3) {
        num = +num.join('') // แปลง Array to number
        console.log(num);
        num = String(num) // number to string
        console.log(num)
        num = Array.from(num) // string to array
        console.log(num)
        break;
    } 
} */
// -------------------------------------------------------------------------------------------------

/* let num = readline('Enter num: ');
let num2 = readline('Enter num2: ');
let num3 = 100;
num = Array.from(num); // String to Arrays
num2 = Array.from(num2);
console.log(num);
console.log(num2);
num = +num.join('')
console.log(num);
num++;
num = String(num);
num = Array.from(num);
console.log(num);
num = +num.join('');
num2 = +num2.join('');
if(num === num2) {
    console.log('num === num2');
    if(num === num3) {
        num++
    }
    num++
    console.log(num);
} */

/* let num = 10;
num = String(num);
num = Array.from(num);
console.log(`Array : ${num}`);
num = +num.join('');
console.log(`+join : ${num}`);
num = String(num);
num = Array.from(num)
console.log(`Array : ${num}`);
num = String(num);
num = Number(num);
console.log(`Numver : ${num}`); */

/* let text = 12345; 
text = String(text)
pow = text.length;
let i = text[0] * 5;
console.log(i); */

let num = readline('');
length = num.length;
length = 0
if(length <= 0)
console.log(length - 1);