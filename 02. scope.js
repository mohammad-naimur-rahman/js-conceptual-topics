// tutorial link: https://www.youtube.com/watch?v=YJMdjddGMmQ&t=0s


/// what is scope? a block { } is a scope in js
// and window object is global scope


// parent scope or global scope here cz this is the root
var x = 23;

function myFunc() {
    // child scope or myFunc er scope
    x = 10; // child can access and also redefine things from parent
    // and also
    // if we define x again
    // then
    var x = 25;
    // it will assign x differently from the global defined x
    // this x is different from the globally or parently defined x

    // so let is a solution here
    var y = 10;
    console.log(`${x} from myFunc()`);
}

myFunc();

console.log(x); // x is accessible heer cz it is defined in global scope or window scope

//console.log(y); // y is not accesible here cz it is defined under a function and also a block { }

// [In javascript, CHILD can access everrything from PARENT
// but PARENT can not access anything from CHILD]

/// global scoped variable that are set implicitely

// var p; // js will do it itself implicitely cz p is not defined anywhere, the below comment says the reason
function myFunc2() {
    p = 10; // p is not defined here, so, it will search its parent and till the global object till it finds the defining of p, if not found, it will implicitely define the p as var like I have given in the upper comment
    console.log(p);
}

myFunc2(); // though p is not defined anywhere but p will print here, the reason is written up in the function comment

// but
// if we write "use strict"; at the beginning of the file, this things will not occur cz everything will happen strictly then