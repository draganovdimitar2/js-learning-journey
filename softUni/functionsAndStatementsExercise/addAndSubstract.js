// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(),
//  which subtracts the result of the function the sum() and the third integer.


function addAndSubstract(firstNum, secondNum, thirdNum) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let tempResult = sum(firstNum, secondNum);
    return subtract(tempResult, thirdNum);
}