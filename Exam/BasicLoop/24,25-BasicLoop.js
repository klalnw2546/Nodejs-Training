// find HCF (GCD) of two numbers.

const readline = require('prompt-sync')();
let fistNumber = readline('Enter first number: ');
let secondNumber = readline('Enter second number: ');
let i = 1; 
let HCF, LCM;
while(i <= fistNumber || i <= secondNumber) {
    if(fistNumber % i === 0 && secondNumber % i === 0) {
        HCF = i;
    }
    if(i >= fistNumber && i >= secondNumber) {
        console.log(`HCF of ${fistNumber} and ${secondNumber}: ${HCF}`);
        LCM = (fistNumber / HCF) * (secondNumber / HCF) * HCF;
        console.log(`LCM of ${fistNumber} and ${secondNumber}: ${LCM}`);
    }
    i++;
}