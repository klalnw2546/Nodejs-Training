// print box number pattern with 1 and 0

const readline = require('prompt-sync')();
let rows = readline('Enter rows: ');
let colums = readline('Enter colums: ');
let i = 1; 
let j = 1;

while(j <= rows) {
    while(i <= colums) {
    i != 1 && i != colums && j != 1 && j != rows ? print('0') : print('1');
    i++;
    }
    print('\n');
    j++; 
    i = 1;
}


function print(name) {
    process.stdout.write(name);
}