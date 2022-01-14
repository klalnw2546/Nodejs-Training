// 1  2  3  4  5
// 6  7  8  9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

const readline = require('prompt-sync')();
let rows = readline('Enter rows: '); 
rows = +rows; // Convert string to number
let colums = readline('Enter colums: '); 
colums = +colums;
let NumberInRows = 1; // จำนวนตัว ใน 1 แถว
let NumberInColums = 1; // จำนวนตัว ใน 1 คอลัมป์
let ShowNumber = 1 ;

while(NumberInColums <= rows) {
    print(`${ShowNumber} `);
    if(NumberInRows === colums) {
        print('\n');
        NumberInRows = 0;
        NumberInColums++;
    }
    ShowNumber++;
    NumberInRows++;
}




function print(name) {
    process.stdout.write(`${name}`);
}