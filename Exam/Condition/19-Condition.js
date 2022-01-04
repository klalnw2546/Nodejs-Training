// input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:

const ps = require('prompt-sync');
const readline = ps();

console.log('*** Enter Points ***'); 
let PhysicsPoints = readline('Physic Points: '); 
PhysicsPoints = parseInt(PhysicsPoints);
let ChemistryPoints = readline('Chemistry Points: '); 
ChemistryPoints = parseInt(ChemistryPoints);
let BiologyPoints = readline('Biology Points: '); 
BiologyPoints = parseInt(BiologyPoints);
let MathematicsPoints = readline('Mathematics Points: '); 
MathematicsPoints = parseInt(MathematicsPoints);
let ComputerPoints = readline('Computer points: '); 
ComputerPoints = parseInt(ComputerPoints);
let Percentage = ((PhysicsPoints + ChemistryPoints + BiologyPoints + MathematicsPoints + ComputerPoints) / 5);

console.log(`Percentage = ${Percentage}`);
if(Percentage >= 90) {
    console.log('Grade: A');
} else if(Percentage >= 80) {
    console.log('Grade: B');
} else if(Percentage >= 70) {
    console.log('Grade: C');
} else if(Percentage >= 60) {
    console.log('Grade: D');
} else if(Percentage >= 40) {
    console.log('Grade: E');
} else if(Percentage < 40) {
    console.log('Grade: F');
}