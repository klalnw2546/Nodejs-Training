// print all even numbers between 1 to 100. - using while loop

const ps = require('prompt-sync');
const readline = ps();

let upperLimit = readline('Enter upper range: ');
process.stdout.write(`Even numbers between 1 to ${upperLimit}: ` );
let i = 1;
while(i <= upperLimit) {
    if(i % 2 === 0) {
        process.stdout.write(` ${i},`);
    }
    i++
}