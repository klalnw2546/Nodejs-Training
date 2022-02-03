// print all negative elements in array with special command

const readline = require('prompt-sync')();
let size = readline('Input size: ');
size = Number(size);
let element = [];

getElement(size);

element.forEach((el, i, arr) => {
    if(Number(el) < 0) {
        i === 0? process.stdout.write(`${el}`) :process.stdout.write(`, ${el}`);
    }
});

function getElement(size) {
    if(size > 0) {
    element[size - 1] = readline('Input Element: ');
    return getElement(size-1);
    }
    return element;
}