// check whether a number is even or odd.

const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInterface.question('Enter number ', number => {
    
    number = parseInt(number);

    if(number % 2 == 0) {
        console.log(`${number} is even number`);
    } else {
        console.log(`${number} is odd number`);
    }
    readInterface.close();
});