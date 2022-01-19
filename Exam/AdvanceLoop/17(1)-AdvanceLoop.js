// 1 2 3 4 5
// 2 1 2 3 4
// 3 2 1 2 3
// 4 3 2 1 2
// 5 4 3 2 1

const readline = require('prompt-sync')();
let colums = readline('Enter Colums: ');
let rows = readline('Enter Rows: ');
let num = 1;
let x = 1;
let y = 1;

while(y <= rows) {
    if(x <= colums) {
        if(x < y) {
            print(`${num}`);
            num--;
        } else {
            print(`${num}`);
            num++;
        }
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