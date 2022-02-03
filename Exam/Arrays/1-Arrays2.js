//input and print element with special command

const readline = require('prompt-sync')();
let size = readline('Input size: ');
size = Number(size);
let element = [];
let temp;

getElement(size);

// Reverst Arrays 
element.reverse() 

// print element
element.forEach((el, i, arr) => {
    i === size-1 ? process.stdout.write(`${el}`) : process.stdout.write(`${el}, `);
});


function getElement(size) {
    if(size > 0) {
    element[size - 1] = readline('Input Element: ');
    return getElement(size-1);
    }
    return element;
}
