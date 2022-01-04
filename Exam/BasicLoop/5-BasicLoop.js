//  print all odd number between 1 to 100.

const ps = require('prompt-sync');
const readline = ps();

let upperLimit = readline('Enter upper range: ');
process.stdout.write(`Odd numbers between 1 to ${upperLimit}: ` );
let i = 1;
while(i <= upperLimit) {
    if(i % 2 != 0) {
        process.stdout.write(` ${i},`);
    }
    i++
}