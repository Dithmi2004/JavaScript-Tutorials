// create an object 
let student = {
    name : "Saman",
    age : 19,
    city : "Colombo",
    sayHi : function(){
        console.log("Hi");
    }
}

// access object properties 
console.log(student.age);
console.log(student.city);

// delete a object field
delete student.city;
console.log(student.city);

// change a object field 
student.name = "Kamal";
console.log(student.name);


// add another function 
student.sayHello = function(){
    console.log("Hello");
};

student.sayHello();

console.log(student);

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));


// assign object to another object 
let teacher = {
    name: "Kumara",
    subject:"Maths"
};

Object.assign(teacher,student);
console.log(teacher.age);
console.log(teacher);


// creating object using constructor function 
function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}

let p = new Person("Abhi", 22, "Colombo");
console.log(p);


// creating object using new object()
let person = new Object();
person.name = "Abhi";
person.city = "Colomnbo";

console.log(person);

