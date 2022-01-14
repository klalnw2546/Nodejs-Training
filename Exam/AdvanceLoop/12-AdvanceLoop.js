// 12345
// 23456
// 34567
// 45678
// 56789

const readline = require('prompt-sync')();
let rows = readline('Enter rows: '); 
rows = +rows; // Convert string to number
let colums = readline('Enter colums: '); 
colums = +colums;
let NumberInRows = 1; // จำนวนตัว ใน 1 แถว
let NumberInColums = 1; // จำนวนตัว ใน 1 คอลัมป์
let ShowNumber = 1 ;

while(NumberInColums <= rows) {
    print(ShowNumber);
    if(NumberInRows === colums) {
        print('\n');
        NumberInRows = 0;
        ShowNumber = 0;
        ShowNumber+= NumberInColums;
        NumberInColums++;
    }
    NumberInRows++;
    ShowNumber++;
}




function print(name) {
    process.stdout.write(`${name}`);
}