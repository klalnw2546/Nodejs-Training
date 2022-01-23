// 555555555
// 544444445
// 543333345
// 543222345
// 543212345
// 543222345
// 543333345
// 544444445
// 555555555

const readline = require('prompt-sync')();
let n = readline('Enter n: ');
let num = n;
let colums = (num*2) - 1
let rows = (num*2) - 1
let x = 1;
let y = 1;

while(y <= rows) {
    if(x <= colums) {
        if(y <= Math.round(rows/2)) {
            if(x < y) {
                print(`${num}`);
                num > (n - (y-1)) ? num-- : num = num ;
            }else if(x >= colums - (y-1)) {
                print(`${num}`);
                num++;
            } else {
                print(`${num}`);
            }
        } else {
            if(x <= (rows - y)) {
                print(`${num}`);
                num > (n - (rows - y)) ? num-- : num = num ;
            } else if(x >= rows - (rows- y)) {
                print(`${num}`);
                num++;
            } else {
                print(`${num}`);
            }

        }
        x++;
    } else {
        print('\n');
        y++; x = 1;
        num = n;
    }
    
}





function print(name) {
    process.stdout.write(`${name}`);
}