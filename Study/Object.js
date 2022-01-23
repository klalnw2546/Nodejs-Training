
const profile = {
    name : 'kla',
    score : 80 ,
    grade : 'f'
}

console.log(profile.name);
console.log(profile.score);
console.log(profile.grade);


// Write function getscore(score)
const score = {
    eng : 80 ,
    math : 10 ,
    computer : 20 ,
}

function getscore(subject) {
    console.log(`Score of ${subject} : ${score.subject}`);
    return 0;
}

getscore(eng);