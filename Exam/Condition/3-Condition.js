// check whether a number is negative, positive or zero.

const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInterface.question('Enter number ', number => {
    
    number = parseInt(number);

    if(number === 0) {
        console.log(`${number} is zero` );
    } else if(number > 0) {
        console.log(`${number} is positive` );
    } else if(number < 0) {
        console.log(`${number} is negative` );
    }
    readInterface.close();
});