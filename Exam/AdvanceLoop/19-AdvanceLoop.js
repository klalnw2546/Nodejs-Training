
const readline = require('prompt-sync')();
let N = readline('Enter N: ');
N = Number(N);
let fromLeft = 0;
let fromRigth = N - 1; // Concept is limit left to rigth 
let x = 0; // X-asis
let y = 0; // Y-asis
let Num = 1;
let ArrNum = [];

// Make 2d Arrays
for(let i = 0 ; i < 4*(N/2); i++) {
    ArrNum[i] = [];
}

for(let round = 1; round <= N/2; round++, fromLeft++, fromRigth--) {
    //left to rigth
    for(let j = fromLeft, i = fromLeft ; j <= fromRigth ; j++,Num++) {
        ArrNum[i][j] = Num;
    }
    //top to down
    for(let i = fromLeft+1, j = fromRigth; i <= fromRigth; i++, Num++) {
        ArrNum[i][j] = Num;
    }
    //rigth to left
    for(let j = fromRigth-1, i = fromRigth; j >= fromLeft ;j--, Num++) {
        ArrNum[i][j] = Num;
    }
    //down to up
    for(let i = fromRigth - 1, j = fromLeft; i >= fromLeft+1; i--, Num++) {
        ArrNum[i][j] = Num;
    }
}

while(y < N) {
    Num = ArrNum[y][x];
    print(`${Num}`);
    if(Num.toString().length === 1) {
        print(`   `);
    }else if(Num.toString().length === 2) {
        print(`  `);
    }else {
        print(` `);
    }
    if(x === N-1) {
        print('\n');
        y++; x = -1;
    }
    x++;
}








function print(name) {
    process.stdout.write(`${name}`);
}