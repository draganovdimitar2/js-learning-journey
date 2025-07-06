// Write a function that receives three parameters – two numbers and an operator (string) 
// – and calculates the result depending on the operator. 
// Operator can be 'multiply', 'divide', 'add' or 'subtract'. 

// !!! Try to solve this task using arrow functions.!!!

// Bonus
//  !!! Solve this task without using any conditional statements  !!!
//  !!! (no if or switch statements or ternary operators). !!!

// Input
// The input comes as parameters named numOne, numTwo, operator.


function simpleCalculator(numOne, numTwo, operator) {
    const calculator = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => b != 0 ? a / b : 'Cannot divide by zero'
    };

    return calculator[operator](numOne, numTwo);
}


console.log(simpleCalculator(5,
5,
'multiply'
));


console.log(simpleCalculator(5,
0,
'divide'
));