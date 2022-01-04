// print all natural numbers from 1 to n using while loop

const ps = require('prompt-sync');
const readline = ps();

let i = 1;
let upperLimit = readline('Enter upper limit: ');
process.stdout.write(`Natural numbers from 1 to ${upperLimit}:`);
while(i <= upperLimit) {
    process.stdout.write(` ${i}`);
    i++;
}