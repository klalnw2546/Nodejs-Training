//input and print element without special command

const readline = require('prompt-sync')();
let size = readline('Input size: ');
size = Number(size);
let element = [];
let temp;

getElement(size);

// Reverst Arrays
for(let i = 0; i < size/2; i++) {
    temp = element[i];
    element[i] = element[size-i-1];
    element[size-i-1] = temp;
}

for(let i = 0; i < size; i++) {
    i === size-1 ? process.stdout.write(`${element[i]}`) : process.stdout.write(`${element[i]}, `);
}


function getElement(size) {
    if(size > 0) {
    element[size - 1] = readline('Input Element: ');
    return getElement(size-1);
    }
    return element;
}