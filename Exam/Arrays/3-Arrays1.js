//find sum of array elements

const readline = require('prompt-sync')();
let size = readline('Input size: ');
size = Number(size);
let element = [];
let sum = 0;

getElement(size);

// Sum
for(let i = 0; i < size; i++) {
    sum += Number(element[i]);
}
console.log(`Sum of all elements: ${sum}`);


function getElement(size) {
    if(size > 0) {
    element[size - 1] = readline('Input Element: ');
    return getElement(size-1);
    }
    return element;
}