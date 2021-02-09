// tutorial link: https://www.youtube.com/watch?v=pT9xqCS8Vwk&t=84s

// what is hoisting? hoisting is a concept that tells us where where we can access a variable and when and what condition is.. it is like scope but for scope system, variable is hoisted by some rules and the matter is hoisting

// in other word, when we declare a variable, how javascript deal with it, is is called hoisting


//console.log(a); // this will give a reference error because a is not defined anywhere

//var a = 'Bangladesh';
//console.log(a); // this will work properly cz a is already defined

console.log(a); // but this will return undefined, strange??
// this is because js save all the reference of defining variables within the whole document at the top of the document but doesn't save the values, it only saves the reference of defining the variable, so here, a is defined but the assiging value is not saved by js, so it is returning undefined
// this is like, js is doing [var a;] at the top of the document
// so, console.log(a) will obviously return undefined
var a = 'Bangladesh';

// the word hoist means pulling upward, so, all the defining references of the variables are saved at the top of the document by js hoisting

// everything of above is exampled by var variable,
// by default only declaring a var without assigning its value and if we call it later, it will return undefined
// like
var b;
console.log(b);
b = 'Saudi Arabia';
console.log(b); // it will return saudi arabia cz now b is assigned with a value now and it is called after assigning its value
// exact same thing is happened in above example of defining a, a was defined only at the top of document by js hoisting by default, so, calling it before its assigning value, it returned undefined

let c;
console.log(c);
c = 'Qatar';
console.log(c);
// for let, also the same thing happened

/////// but for let, game changes when

//console.log(p);
let p = 'Pagol'; // this will occur error with reference error and saying, cannot access 'p' before initialization

// let also hoisted by js but for var, automatically js define its value as undefined at the top of the document, but for let it doesn't defined undefined as a value, it just save the reference and doesn't assign value as undefined like var

//but

let q; // here be default q = undefined
console.log(q); // this will return undefined cz only declaring a variable without its value means we are defining its value as undefined, now it is saving its value as undefined at the top of the document by js hoisting and giving result of undefined

// and also

//console.log(m); // this will also return error with reference error
let m; // cz only after declaring it without value, that means only defining, we can use it cz let works this way and the error says so, 'm' cannot be accessed berore initialization
// and also, at line of defining via let, it is defined undefined, not above it unlike var

//// more examples

var LANGUAGE = 'Java';
var language = 'JavaScript';

function getLanguage() {
    if (!language) {
        var language = LANGUAGE;
    }
    return language;
}

console.log(`I love ${getLanguage()}`); // this will return Java cz var is a function scope, !language condition is searching language first in the function, didn't find and then it set var language as LANGUAGE

// but
let LANGUAGE2 = 'Java';
let language2 = 'JavaScript';

function getLanguage2() {
    if (!language2) {
        let language2 = LANGUAGE2;
    }
    return language2;
}
console.log(`I love ${getLanguage2()}`); // this will return JavaScript by declaring all the variables by let instead of var. and let is a block scope variable, and not function scoped.. in this case, it didn't find any language defined in the function but it also didn't searched for language in the function and went up to it's parent scope and found language and its condition fullfuilled and didn't reassigned language to LANGUAGE and thus it returned JavaScript...


//// hoisting in function

myFunction(); // function also hoisted by js to the top of the document and so it is working here

function myFunction() {
    console.log(`I love function`);
}

// another example

function myFunction2() {
    language = 'JavaScript';
    var language;
    console.log(language);
}
myFunction2(); // it should return undefined (cz at first language is assinged but it defined no where, so, it should go one level up and js hoisting should assign its value as undefined and set the reference of declaration and the next defining of language should be another language (not the global language) and should console.log(language) as undefined) but it returned JavaScript, but why?
// we know that var is function scoped.. so in this function when it finds a declaration of var, it is hoisted by the function within and saves its referece, so then it finds language assigned its value as 'javascript' and so it console log 'javascript' here

function myFunction3() {
    language = 'JavaScript';
    let language;
    console.log(language);
}
//myFunction3(); // but it will occur an error cz we know when any var is defined without assinging value by let, it defines undefined only from that line, so, in this case, in the first line language won't be able to redefine its value cz language is defined without its value in the next line.. so, it will return with an error saying cannot acces before initialization

/// from a previous example again see... (function declaration vs funtion expression)

fn(); // it worked
function fn() {
    console.log('function');
}

// but 

//fn2(); // it won't work
const fn2 = function () {
    console.log('function');
}

/////// why??
// by function declaration, it saves the reference of the function as well as assign the value as undefined at the top by js hoisting (first example).. and when it finds its value, it will take that and it will work
// but in the second example we used function expression, and we know for let and const any variable assign its value only in the line of declaration.. so, above of declaring the function, it won't find the value even as undefined and give an error.. clear?