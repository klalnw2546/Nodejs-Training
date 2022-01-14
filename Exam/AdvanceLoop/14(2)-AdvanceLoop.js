// 5 5 5 5 5
// 4 4 4 4 5
// 3 3 3 4 5
// 2 2 3 4 5
// 1 2 3 4 5

const readline = require('prompt-sync')();
let rows = readline('Enter rows: '); 
rows = +rows; // Convert string to number
let colums = readline('Enter colums: '); 
colums = +colums;
let NumberInRows = 1; // จำนวนตัว ใน 1 แถว
let NumberInColums = 1; // จำนวนตัว ใน 1 คอลัมป์
let ShowNumber = colums;

while(NumberInColums <= rows) {
    if(NumberInRows <= (rows - (NumberInColums - 1))) {
        print(ShowNumber - (NumberInColums - 1))
    } else {
        ShowNumber = NumberInRows;
        print(ShowNumber);
    }
    if(NumberInRows === colums) {
        print('\n');
        NumberInRows = 0;
        ShowNumber = rows;
        NumberInColums++;
    }
    NumberInRows++;
}




function print(name) {
    process.stdout.write(`${name}`);
}