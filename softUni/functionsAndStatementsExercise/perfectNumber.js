// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Output
// •	If the number is perfect, print: "We have a perfect number!"
// •	Otherwise, print: "It's not so perfect."


function perfectNumber(num) {
    let totalSum = 0;
    for (let i = 1; i < num; i++) {
        let currentNum = num / i;
        if (Number.isInteger(currentNum)) {
            totalSum += i;
        }
    }

    if (totalSum == num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);