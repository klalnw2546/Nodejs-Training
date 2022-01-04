// input basic salary of an employee and calculate its Gross salary according to following:

const ps = require('prompt-sync');
const readline = ps();

let hra; 
let da;
let basicSalary = readline('Enter basic salary of an employee: ');
basicSalary = parseInt(basicSalary);

if(basicSalary <= 10000) {
    hra = basicSalary * 0.2;
    da = basicSalary * 0.8;
} else if(basicSalary <= 20000) {
    hra = basicSalary * 0.25;
    da = basicSalary * 0.9;
} else if(basicSalary > 20000) {
    hra = basicSalary * 0.3;
    da = basicSalary * 0.95;
}
console.log(`Gross salary = ${basicSalary + hra + da}`);