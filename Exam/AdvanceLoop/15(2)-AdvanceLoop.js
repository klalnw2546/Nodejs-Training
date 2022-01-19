// 5 5 5 5 5
// 4 5 5 5 5
// 3 4 5 5 5
// 2 3 4 5 5
// 1 2 3 4 5

const readline = require('prompt-sync')();
let colums = readline('Enter Colums: ');
let rows = readline('Enter Rows: ');
let num = rows;
let x = 1;
let y = 1;

while(y <= rows) {
    if(x <= colums) {
        num <= colums ? num = num : num = colums;
        print(`${num}`);
        num++;
        x++;
    } else {
        print('\n');
        y++; x = 1;
        num = rows - (y-1);
    }
    
}





function print(name) {
    process.stdout.write(`${name}`);
}