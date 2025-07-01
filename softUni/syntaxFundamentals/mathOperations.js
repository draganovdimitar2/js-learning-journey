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