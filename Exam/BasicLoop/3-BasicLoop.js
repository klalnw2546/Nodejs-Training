// print all alphabets from a to z. - using while loop

let i = 97
let ch;
process.stdout.write('Alphabets:');
while(i <= 122) {
    ch = String.fromCharCode(i);
    process.stdout.write(` ${ch},`);
    i++;
}