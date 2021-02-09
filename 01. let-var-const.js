// tutorial link: https://www.youtube.com/watch?v=6LvKgfLP8uU&t=480s

if (true) {
    var varVariable = 'This is var';
}
console.log(varVariable);

if (true) {
    let letVariable = 'This is let';
}
//console.log(letVariable); // let is not accesible here cz let is a block scope variable, and a { } is a block here

var a = 5;
var a = 6; // var can be assigned twice or more than that but let and const can not...
console.log(a);

function x() {
    var y = 5;
    console.log(y);
}
//console.log(y); // var is not accesible here cz var is a function scoped variable and can not be accessed outside a funciton

//const is exact same as let but const value can not be reassigned

let p = 10;
p = 12;
// but 
const q = 15;
//q = 24; // this is not possible

// const can use all of the method to update and manupulate objects, array or anything like that

const nums = [1, 34, 5, 63, 6];
nums.push(34); // this is possible

// child can access parent but parent can not access child (for let, var, const all)

let parent = 'parent';
function f() {
    return parent + 'could access parent from one level up';
}

//but 

function func() {
    let child = 'child';
}

//console.log(child); // child can not be asscess from parent here