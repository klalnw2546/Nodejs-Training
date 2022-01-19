// 1 2 3 4 5
// 2 3 4 5 1
// 3 4 5 1 2
// 4 5 1 2 3
// 5 1 2 3 4

const readline = require('prompt-sync')();
let colums = readline('Enter Colums: ');
let rows = readline('Enter Rows: ');
let num = 1;
let x = 1;
let y = 1;

while(y <= rows) {
    if(x <= colums) {
        num <= colums ? num = num : num = 1;
        print(`${num}`);
        num++;
        x++;
    } else {
        print('\n');
        y++; x = 1;
        num = y;
    }
    
}





function print(name) {
    process.stdout.write(`${name}`);
}