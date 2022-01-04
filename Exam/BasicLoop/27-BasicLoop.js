//  print all Prime numbers between 1 to n.

const readline = require('prompt-sync')();

let lowerNumber = readline('Enter lower number: ');
let upperNumber = readline('Enter upper number: '); 
lowerNumber = Number(lowerNumber);
upperNumber = Number(upperNumber);
let i = 1;

process.stdout.write(`Prime number from ${lowerNumber} to ${upperNumber}:`);

while(i <= upperNumber) {
    if(lowerNumber % i === 0 && i != lowerNumber && lowerNumber != 2 && lowerNumber != 1 && i != 1) {
       lowerNumber++;
       i = 1;
    } else if(lowerNumber % i != 0 || lowerNumber === 1 || lowerNumber === 2 || i === 1) {
        if(i+1 === lowerNumber || lowerNumber === 1 || lowerNumber === 2) {
            if(lowerNumber === 1){
                lowerNumber++;
                i = 1;
            }
            process.stdout.write(` ${lowerNumber}`);
            lowerNumber++;
            i = 1;
        } else if(i+1 === upperNumber) {
            break;
        } else
            i++;
    } 
}