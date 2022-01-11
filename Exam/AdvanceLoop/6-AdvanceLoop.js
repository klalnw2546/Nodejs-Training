// print chessboard number pattern with 1 and 0

const readline = require('prompt-sync')();
let rows = readline('Enter rows: '); 
rows = +rows; // Convert string to number
let colums = readline('Enter colums: '); 
colums = +colums;
let NumberInRows = 1; // จำนวนตัว ใน 1 แถว
let NumberInColums = 1; // จำนวนตัว ใน 1 คอลัมป์

while(NumberInColums <= rows) {
    if(NumberInColums % 2 != 0) {
        NumberInRows % 2 != 0 ? print('1') : print('0');
    } else {
        NumberInRows % 2 != 0 ? print('0') : print('1');
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