// check whether a year is leap year or not.

const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInterface.question('Enter years ', years => {
    
    years = parseInt(years);
    if(`(${years} % 4) === 0`) {
        console.log(`${years} is leap year`);
    }
    readInterface.close();
});