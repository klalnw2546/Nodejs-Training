// print number pattern with 1, 0 at alternate columns

const readline = require('prompt-sync')();
let rows = readline('Enter rows: ');
let colums = readline('Enter colums: ');
let i = 1; 
let j = 1;

while(j <= rows) {
    while(i <= colums) {
    i % 2 === 0 ? print('1') : print('0');
    i++;
    }
    process.stdout.write('\n');
    j++; 
    i = 1;
}


function print(name) {
    process.stdout.write(name);
}