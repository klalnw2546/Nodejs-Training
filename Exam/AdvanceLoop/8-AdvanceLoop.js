// print 0 or 1 square number pattern รูปแบบที่ 2

const readline = require('prompt-sync')();
let rows = readline('Enter rows: '); 
rows = +rows; // Convert string to number
let colums = readline('Enter colums: '); 
colums = +colums;
let NumberInRows = 1; // จำนวนตัว ใน 1 แถว
let NumberInColums = 1; // จำนวนตัว ใน 1 คอลัมป์

while(NumberInColums <= rows) {
    let i = NumberInColums - 1;
    NumberInRows === (1 + i) || NumberInRows === (colums - i) ? print('1') : print('0');
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