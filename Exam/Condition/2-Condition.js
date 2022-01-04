//find maximum between three numbers

let a = 20;
let b = 25;
let c = 100;
if(a >= (b && c)) {
    console.log('max = ',a);
} else if(b >= (a && c)) {
    console.log('max = ',b);
} else {
    console.log('max = ',c);
}