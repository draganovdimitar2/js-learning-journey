// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.


function solve(num) {
    let n = String(num);  // convert the int to str
    let firstDigit = Number(n[0]);  // taking the first digit of the num and compare others to it using for loop
    let areSame = true;  // flag var 
    let sumOfAllDigits = firstDigit;

    for (let i = 1; i < n.length; i++) {  // skipping first digit
        let currentDigit = Number(n[i]);
        sumOfAllDigits += currentDigit;
        if (currentDigit != firstDigit) {
            areSame = false;
        }
    }

    console.log(areSame);
    console.log(sumOfAllDigits);
}

function solve2(num) {  // much better option
    const digits = String(num).split('').map(Number);
    const areSame = digits.every(d => d === digits[0]);
    const sum = digits.reduce((a, b) => a + b, 0);

    console.log(areSame);
    console.log(sum);
}

solve(1234);
solve2(1234);