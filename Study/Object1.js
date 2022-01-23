
let profile = {
    name: 'kla',
    old: 18,
    hight: 165,
    weight: 54,
}

function getValue(key) {
    return profile[key] || 0;
}

console.log(getValue('hight'));