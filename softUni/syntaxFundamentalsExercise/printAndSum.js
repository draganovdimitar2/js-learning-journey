// Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. 

function solve(start, end) {
    let totalSum = 0;
    let numArray = [];
    for (let i = start; i <= end; i++) {
        totalSum += i;
        numArray.push(i);
    }
    console.log(numArray.join(' '));
    console.log(`Sum: ${totalSum}`);
}

solve(5, 10);
solve(0, 26);