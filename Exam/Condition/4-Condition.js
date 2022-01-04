//  check whether a number is divisible by 5 and 11 or not

const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInterface.question('Enter number ', number => {
    
    number = parseInt(number);

    if((number % 5 && number % 11) == 0) {
        console.log('Number is divisible by 5 and 11')
    }
    readInterface.close();
});