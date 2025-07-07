// Write a JS function that takes two numbers and a string as input. 
// The string may be one of the following: '+', '-', '*', '/', '%', '**'.
// Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.


function solve(firstNum, secondNum, operator) {
    let result = 0;

    switch(operator){
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '%': result = firstNum % secondNum; break;
        case '**': result = firstNum ** secondNum; break;
    }
    console.log(result);
}

solve(5, 6, '+');


function solve2(firstNum, secondNum, operator) {
    let result = 0;
    if (operator == '+') {
        result = firstNum + secondNum;
    } else if (operator == '-') {
        result = firstNum - secondNum;
    } else if (operator == '*') {
        result = firstNum * secondNum;
    } else if (operator == '/') {
        result = firstNum / secondNum;
    } else if (operator == '%') {
        result = firstNum % secondNum;
    } else if (operator == '**') {
        result = firstNum ** secondNum;
    } 
    console.log(result);
}

solve2(5, 6, '+');