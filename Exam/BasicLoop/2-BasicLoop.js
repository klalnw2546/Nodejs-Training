// print all natural numbers in reverse (from n to 1). - using while loop

const ps = require('prompt-sync');
const readline = ps();

let upperLimit = readline('Enter upper limit: ');
i = upperLimit
process.stdout.write(`Natural numbers from ${upperLimit} to 1:`);
while(i >= 1) {
    process.stdout.write(` ${i}`);
    i--;
}