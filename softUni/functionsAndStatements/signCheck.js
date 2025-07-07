// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.

// Input
// The input comes as parameters named numOne, numTwo, numThree.

// Output
// · If the result is positive, print on the console -> "Positive"
// · Otherwise, print -> "Negative"


function signCheck(numOne, numTwo, numThree) {
    let numsArr = [numOne, numTwo, numThree];
    let negativeNumsArr = numsArr.filter(num => num < 0);

    if (negativeNumsArr.length % 2 !== 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);