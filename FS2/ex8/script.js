const a = 3.7;

const roundValue = Math.round(a);
const floorValue = Math.floor(a);
const ceilValue = Math.ceil(a);
const truncValue = Math.trunc(a);
const powerValue = Math.pow(a, 2);
const sqrtValue = Math.sqrt(a);
const sineValue = Math.sin(a);
const signValue = Math.sign(a);

console.log("Original number: " + a);
console.log("Round: " + roundValue);
console.log("Floor: " + floorValue);
console.log("Ceil: " + ceilValue);
console.log("Trunc: " + truncValue);
console.log("Power of 2: " + powerValue.toFixed(2));
console.log("Square root: " + sqrtValue.toFixed(2));
console.log("Sine: " + sineValue.toFixed(2));
console.log("Sign: " + signValue);
