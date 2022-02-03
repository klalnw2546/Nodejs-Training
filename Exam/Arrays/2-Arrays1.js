// print all negative elements in array without special command

const readline = require('prompt-sync')();
let size = readline('Input size: ');
size = Number(size);
let element = [];

getElement(size);


for(let i = 0; i < size; i++) {
    if(Number(element[i]) < 0 ) {
        i === 0? process.stdout.write(`${element[i]}`) :process.stdout.write(`, ${element[i]}`);
    }
}

function getElement(size) {
    if(size > 0) {
    element[size - 1] = readline('Input Element: ');
    return getElement(size-1);
    }
    return element;
}