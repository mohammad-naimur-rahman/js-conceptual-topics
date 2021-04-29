// Tutorial link: https://www.youtube.com/watch?v=uZqyRJkTQog

//Rules fot 'this' keyword

//implicit binding
//explicit binding
//new binding
//window binding

// var printPlayerName = function (name) {
//     console.log(name);
// }

//printPlayerName('Sakib');

//// implicit binding
// var sakib = {
//     name: 'Sakib Khan',
//     age: 01,
//     printPlayerName: function () {
//         console.log(this.name);
//     }
// }

//sakib.printPlayerName(); // to find 'this', go where a function is called, check if there is a dot notation before the function name, if is does, 'this' will be of that object(before dot notation);

// var printPlayerNameFunction = function (obj) {
//     obj.printPlayerName = function () {
//         console.log(this.name);
//     }
// };

// var sakib = {
//     name: 'Sakib Khan',
//     age: 01
// }

// var tamim = {
//     name: 'Tamim Khan',
//     age: 02
// }

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();

// another example

// var Person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function () {
//             console.log(this.name);
//         },
//         father: {
//             name: 'Mr. X',
//             printName: function () {
//                 console.log(this.name);
//             }
//         }
//     }
// }


// var sakib = Person('Sakib', 35);

// sakib.printName();

// sakib.father.printName(); // here, father is immidiate object before dot notation...

//// explicit binding (also call(), bind(), apply())

// var printName = function (virtue1, virtue2, virtue3) {
//     console.log(`${this.name} is ${virtue1}, ${virtue2} and ${virtue3}`);
// }

// var sakib = {
//     name: 'Sakib',
//     age: 25
// };

// var v1 = 'Handsome';
// var v2 = 'all-rounder';
// var v3 = 'best player';

// var v = [v1, v2, v3];

// printName.call(sakib, v1, v2, v3); // the first param call() recieve is an object
// printName.apply(sakib, v);
// var newFunc = printName.bind(sakib, v1, v2, v3);
// newFunc();

//// new binding

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(`${this.name} is ${this.age} years old`);
// }

// var sakib = new Person('Sakib', 35);

//// window binding

// var printName = function () {
//     console.log(this.name);
// };
// var name = 'Antutu';
// var sakib = {
//     name: 'Sakib'
// };
// printName(); // here, 'this' refers window object

/// in this tutorial, 'this' isn't shown for arrow function, in arrow function, 'this' has different definition
// in future, for arrow function, example will be added