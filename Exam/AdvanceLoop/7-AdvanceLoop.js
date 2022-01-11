// print box number pattern with plus in center

const readline = require('prompt-sync')();
let rows = readline('Enter rows: '); 
rows = +rows; // Convert string to number
let colums = readline('Enter colums: '); 
colums = +colums;
let NumberInRows = 1; // จำนวนตัว ใน 1 แถว
let NumberInColums = 1; // จำนวนตัว ใน 1 คอลัมป์

while(NumberInColums <= rows) {
    Math.ceil(colums / 2) === NumberInRows || Math.ceil(rows / 2) === NumberInColums ? print('0') : print('1');
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