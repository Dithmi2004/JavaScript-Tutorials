// hoisting with var output is undefined
console.log(a);
var a = 30;


// hoisting with let output is reference error
// console.log(a);
// let a = 30;

// hoisting with const output is reference error
// console.log(a);
// const a = 30;

// hoisitng with functions declaration
displayAge();

function displayAge(){
    console.log(20);
}

// hoisitng with functions expression. this has an error
// displayName();

// var displayName = function(){
//     console.log("Denul");
// }

