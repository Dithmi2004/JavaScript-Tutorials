let a = 2;
let b = 8;

console.log(a + b);
console.log(b - a);
console.log(b / a);
console.log(b % 3);
console.log(a * b);
console.log(b**a);
console.log(b++);
 

// inplicit type conversion
let x = '5' + 2;
let y = '5' - 3;
console.log(y);

//  explicit conversion
let t = Number('10');
let s = String(20);
console.log (typeof s);
console.log (typeof t);

// ternary operator
let age = 18;
let result = (age >=18) ? "Adult" : "Minor";
console.log(result);