// 5 4 3 2 1
// 4 3 2 1 2
// 3 2 1 2 3
// 2 1 2 3 4
// 1 2 3 4 5

const readline = require('prompt-sync')();
let colums = readline('Enter Colums: ');
let rows = readline('Enter Rows: ');
let num = rows;
let x = 1;
let y = 1;

while(y <= rows) {
    if(x <= colums) {
        if(x < (rows - (y-1))) {
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
        num = rows - (y-1);
    }
    
}

function print(name) {
    process.stdout.write(`${name}`);
}