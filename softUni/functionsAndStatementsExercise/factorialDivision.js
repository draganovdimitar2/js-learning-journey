// Write a function that receives two integer numbers. Calculate the factorial of each number. 
// Divide the first result by the second and print the division formatted to the second decimal point.
// Use recursion!

function solution(firstNum, secondNum) {
    function factorial(n) {  // recursive function
        if (n == 0 || n == 1) {
            return 1;
        }
        return factorial(n - 1) * n;
    }
    return (factorial(firstNum) / factorial(secondNum)).toFixed(2);
}

console.log(solution(5, 2));
console.log(solution(6, 2));

