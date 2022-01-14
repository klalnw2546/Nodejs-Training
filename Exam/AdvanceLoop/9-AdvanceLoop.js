//print circle box number pattern with 1 and 0

// 01110
// 10001
// 10001
// 10001
// 01110

const readline = require('prompt-sync')();
let rows = readline('Enter rows: '); 
rows = +rows; // Convert string to number
let colums = readline('Enter colums: '); 
colums = +colums;
let NumberInRows = 1; // จำนวนตัว ใน 1 แถว
let NumberInColums = 1; // จำนวนตัว ใน 1 คอลัมป์

while(NumberInColums <= rows) {
    if(NumberInRows === 1 || NumberInRows === colums || NumberInColums === 1 || NumberInColums === rows ) {
        if((NumberInColums === 1 || NumberInColums === rows) && (NumberInRows === 1 || NumberInRows === colums)) {
            print('0');
        } else {
            print('1');
        }
    }else {
        print('0');
    }
    if(NumberInRows === colums) {
        print('\n');
        NumberInRows = 0;
        NumberInColums++;
    }
    NumberInRows++;
}




function print(name) {
    process.stdout.write(name);
}