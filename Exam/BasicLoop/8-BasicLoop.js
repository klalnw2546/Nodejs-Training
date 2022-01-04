//  find sum of all odd numbers between 1 to n.

const ps = require('prompt-sync');
const readline = ps();

let upperLimit = readline('Enter upper range: ');
process.stdout.write(`Sum of natural odd numbers between 1 to ${upperLimit}: ` );
let i = 1;
let sum = 0;
while(i <= upperLimit) {
    if(i % 2 != 0) {
        sum+= i;
    }
    i++
}
process.stdout.write(`${sum}`);