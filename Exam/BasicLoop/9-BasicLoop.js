// print multiplication table of any number.

const ps = require('prompt-sync');
const readline = ps();

let num = readline(`Enter number:`);
let mutiplier =  readline(`Enter mutiplier: `);
let i = 1;
while(i <= mutiplier) {
    console.log(`5 * ${i} = ${num * i}`);
    i++;
}