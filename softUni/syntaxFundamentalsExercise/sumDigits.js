// Write a function, which will be given a single number. Your task is to find the sum of its digits.


function solve(num) {
    let numString = String(num);
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    
    console.log(sum);
}

function solve2(num) {  // next level
    const sum = String(num)
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}

solve(245678);
solve(97561);