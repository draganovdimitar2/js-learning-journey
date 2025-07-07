// Write a function that takes three number arguments as input and finds the largest of them. 
// Print the following text on the console:  `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.


function solve(firstParam, secondParam, thirdParam) {
    let largestNum = Math.max(firstParam, secondParam, thirdParam);
    console.log(`The largest number is ${largestNum}.`);
}


function solve(a, b, c) {
    let largest;

    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    console.log(`The largest number is ${largest}.`);
}

solve(5,4,3);
solve2(5,4,3);