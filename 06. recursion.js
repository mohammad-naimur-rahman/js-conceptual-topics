// Tutorial link: https://www.youtube.com/watch?v=ueJiRQK6FYY

// When a function calls itself in its body, this is called recursion

let myFunc = function () {
    myFunc();
}

// 1 + 2 + 3 + 4 + ...... + n

let total = 0;
let n = 5;
for (let i = 1; i <= n; i++) {
    total += i;
}

console.log(total);

// recursive way

/*
steps
0+1=1 f(0) = 1 >>stopping condition
1+2=3 f(2-1) + 2 = f(2)
3+3=6 f(3-1) + 3 = f(3)
6+4=10 ...
10+5=15 ...
*/

// f(n-1) + n = f(n)
// if you can find the formula, then its easier to make recursion

function sum(n) {
    if (n == 0) {
        return 0;
    } else {
        return sum(n - 1) + n;
    }
}

console.log(sum(5)); // 15

// execution process
/*
sum(5)
>> sum(4) + 5
>> sum(3) + 4 + 5
>> sum(2) + 3 + 4 + 5
>> sum(1) + 2 + 1 + 4 + 5
>> sum(0) + 1 + 2 + 3 + 4 + 5
>> 0 + 1 + 2 + 3 + 4 + 5
*/

// alternate way
function sumTotal(n) {
    return ((1 + n) * n) / 2; // class 6(?) math book solution..
}

console.log(sumTotal(5));