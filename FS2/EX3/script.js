const a = new Date();
console.log(a);

const b = new Date("January 27,2025 15:04:00");
console.log(b);

const c = new Date("2025-01-27");
console.log(c);

/*7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):*/
const d = new Date(2025,0,27,10,33,30,0);
console.log(d);
/*Note
JavaScript counts months from 0 to 11:

January = 0.

December = 11.*/

/*6 numbers specify year, month, day, hour, minute, second:*/
const e = new Date(2025,0,25,10,33,30);
console.log(e);

/*5 numbers specify year, month, day, hour, and minute*/
const f = new Date(2025,0,27,10,33);
console.log(f);

/*4 numbers specify year, month, day, and hour:*/
const g = new Date(2025,0,27,10);
console.log(g);

/*3 numbers specify year, month, and day:*/
const h = new Date(2025,0,27);
console.log(h);

/*2 numbers specify year and month:*/
const i = new Date(2025,0);
console.log(i);

/*You cannot omit month. If you supply only one parameter it will be treated as milliseconds.*/
const j = new Date(2025);
console.log(j);

