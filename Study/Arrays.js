let arr = [2 , 1];
let tempArr = [ arr[1] , arr[0]];
arr = tempArr;
console.log(arr);

let numbs = [1, 2, 3, 4, 5]; // to 5 4 3 2 1
let temp = [ numbs[4], numbs[3], numbs[2], numbs[1], numbs[0] ];
numbs = temp;
console.log(numbs);

numbs = ['A', 2, 3, 4, 5];
for(let i = 1; i <= numbs.length ; i++) {
    temp[i-1] = numbs[numbs.length - i];
}
console.log(temp);