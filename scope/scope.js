// this is global scope
let x = "This is global scope variable";
const a = "This is const variable"

function displayVariable() {
    // this is function scope
    let y = "This is local scope variable";

    // this is shadowing
    let x = "Changed";
    
    console.log(x);
    console.log(y);
    var z = 23;
    console.log(a);
    const b = "This is another const variable"
    console.log(b);
};

displayVariable();
// console.log(z); this has error because z is function scoped variable.
// console.log(y); this has error because z is function scoped variable.

console.log(a);
console.log(x);
// console.log(b); this has error because b is function scoped variable.

{
    // this is block scope
    let y = "Hi";
    console.log(y);
}

