const name = 'nash';
const age = 28;

// this is called a template string its used for concatenation
console.log(`May I ask what is your ${name} and your ${age}`);


//assing a variable
const person = (`May I ask what is your ${name} and your ${age}`);
console.log(person);


//method is a function associated with an object

const a = 'east';
console.log(a.toUpperCase());    // the brackets mean that that is the method

const b = 'north';
console.log(b.length) // if the .length had the extra brackets it would be a method


let v = 'kid'
// let toUpperCase = v.toUpperCase()

console.log(v.toLocaleUpperCase()); // the brackets mean that