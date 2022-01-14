// 11111
// 22222
// 33333
// 44444
// 55555

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
        NumberInColums++;
        ShowNumber++;
    }
    NumberInRows++;
}




function print(name) {
    process.stdout.write(`${name}`);
}