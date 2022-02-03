//find sum of array elements

const readline = require('prompt-sync')();
let size = readline('Input size: ');
size = Number(size);
let element = [];

getElement(size);

// Sum
const reducer = (accumulator, curr) => accumulator + curr;
console.log(`Sum of all elements: ${element.reduce(reducer)}`);


function getElement(size) {
    if(size > 0) {
    element[size - 1] = readline('Input Element: ');
    element[size - 1] = Number(element[size - 1]);
    return getElement(size-1);
    }
    return element;
}