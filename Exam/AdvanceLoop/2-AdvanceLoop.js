//print number pattern with 1, 0 at alternate rows

// 11111
// 00000
// 11111
// 00000
// 11111

const readline = require('prompt-sync')();
let rows = readline('Enter rows: ');
let colums = readline('Enter colums: ');
let i = 1; 
let j = 1;

while(j <= rows) {
    while(i <= colums) {
    j % 2 === 0 ? print('0') : print('1');
    i++;
    }
    process.stdout.write('\n');
    j++; 
    i = 1;
}


function print(name) {
    process.stdout.write(name);
}