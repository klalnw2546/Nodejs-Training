function print(name) {
    console.log(name);
}
let num;
function ChangeNum(j) {
    if(j % 2 === 0) {
        num = 0;
    } else {
        num = 1;
    }
    return num;
}

ChangeNum(2);
print(num);
print('kla');