// find sum of all natural numbers between 1 to n.

const ps = require('prompt-sync');
const readline = ps();

let upperLimit = readline('Enter upper range: ');
process.stdout.write(`Sum of natural numbers 1 to ${upperLimit}: ` );
let i = 1;
let sum = 0;
while(i <= upperLimit) {
    sum+= i;
    i++
}
process.stdout.write(`${sum}`);