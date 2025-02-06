let strnum = "123.45";
let strbool = "true";
let num = 123;

console.log(`Original: "${strnum}" (${typeof strnum})`);

let numvalue = Number(strnum);
let intvalue = parseInt(strnum);
let floatvalue = parseFloat(strnum);

console.log(`To number: ${numvalue} (${typeof numvalue})`);
console.log(`To number: ${intvalue} (${typeof intvalue})`);
console.log(`To number: ${floatvalue} (${typeof floatvalue})`);

console.log(`Original: "${strbool}" (${typeof strbool})`);

let boolvalue = (strbool === "true");
console.log(`To boolean: ${boolvalue} (${typeof boolvalue})`);

console.log(`Original: ${num} (${typeof num})`);
let stringvalue = num.toString();
console.log(`To string: "${stringvalue}" (${typeof stringvalue})`);
