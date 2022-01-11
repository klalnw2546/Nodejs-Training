//  print 0 or 1 square number pattern

const readline = require('prompt-sync')();
let rows = readline('Enter rows: ');
let colums = readline('Enter colums: ');
let i = 1; 
let j = 1;

while(j <= rows) {
    while(i <= colums) {
    print('1')
    i++;
    }
    print('\n');
    j++; 
    i = 1;
}

function print(name) {
    process.stdout.write(name);
}