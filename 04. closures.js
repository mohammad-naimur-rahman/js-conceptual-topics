// tutorial link: https://www.youtube.com/watch?v=9acXwUkddZI&t=0s
/*
// var sum = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(2, 3));

// also work with this

var num1 = 2;
var num2 = 3;

var sum = function () {
    return num1 + num2;
};
console.log(sum()); // this will definitely works for scoping...
// this sum function works and access num1 and num2 var, but why and how?
// the answer is closure... now let's dig into it

// closure means bracket

// to be noted, every function is like an object to js

// a function always keeps all the references of all the variables from all the parents up to root to itself.. It closes them all up.. that's why this is called closure

// another example

var n1 = 34;

var total = function () {
    var n2 = 25;
    return function () {
        return n1 + n2;
    }
}

console.dir(total()); //console.dir is a modern version of console.log which shows more details...

// the output of this

// 04. closures.js:17 5
// 04. closures.js:38
// ƒ anonymous()
// arguments: null
// caller: null
// length: 0
// name: ""
// prototype: {constructor: ƒ}
// __proto__: ƒ ()
// [[FunctionLocation]]: 04. closures.js:33
// [[Scopes]]: Scopes[2]
// 0: Closure (total) {n2: 25}
// 1: Global {window: Window, self: Window, document: document, name: "", location: Location, …}
//(this result won't show in this way if you run this on terminal, so i created a html file and linked it with it an saw it on browser console)

// if you notice its scope that is printed on the browser console, it has two scope and they are closure and window object...

// by the way, both are closure here, the recent version of chrome doesn't show the global scope as closure...

// so, we can say closure is function with remembered values. and if the function need to access the values, it has to close the value to itself.. this concept is closure

// if in a return function of a funciton, if the inner function needs to use the variable from the parent function, it will create scope for them. but if it doesn't needed, it won't create closure...

/// more example

function bankAccount(itinialBalance) {
    var balance = itinialBalance;
    return function () {
        return balance;
    }
}

var account = bankAccount(100000);

console.log(account());
console.dir(account);


(function () {
    var num1 = 2;

    var sum = function () {
        var num2 = 3;
        return num1 + num2;
    };
    console.dir(sum);
})(); // this will make a closure and keep num1 in it


(function () {
    var num1 = 2;
    var num2 = 3;

    var sum = function () {
        return num1 + num2;
    };

    console.log(sum()); // this will result 5 as num1 is 2 and num2 is 3
    console.dir(sum);

    num1 = 6;
    num2 = 7;

    console.log(sum()); // this will result 13 as num1 is 6 now and num2 is 7
    console.dir(sum);

    // in console.dir >> we se in the console, both time we colsole.dir, after and before reassigning the value of num1 and num2, it shows it's closure value num1 as 6 and num2 as 7 but for the first console.dir, it should give the value in the closure num1 as 2 and num2 as 3, but why everytime it shows 6 and 7?

    // closure keeps the reference of the values, that's why
})();


let num1 = 2;
let num2 = 3;

var sum = function () {
    return num1 + num2;
};

console.dir(sum); // we can see now num1 and num2 are under script in scopes.. for let... and we know let doesn't remain in global scope, so, it makes a scope named script and count the window object as script

(function () {
    let num1 = 2;
    let num2 = 3;

    var sum = function () {
        return num1 + num2;
    };

    console.dir(sum); // we get back our closure now, you know the reason
})();
*/

function stopWatch() {
    var startTime = Date.now();

    function getDelay() {
        console.log(Date.now() - startTime);
    }

    return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 10000000; i++) {
    var a = Math.random() * 100000;
}

timer(); // this will result after a delay, so how the delay time showed? because of closure, startTime was saved by closure in getDelay, and it is used when we called it...

// if we confirm that we won't call or use timer later after now, we can close the closure and thus optimize code by saying timer as null

timer = null;

// if we didn't do so, js will keep the reference to itself in closure, and in a big application, js handles multiples data in closure, whenever we don't need them we can clear them and thus we can optimize code

// I am clear about async js yet, so, I am stopping her now, I will continue this after I am clear about async js

// present video time is 44:51