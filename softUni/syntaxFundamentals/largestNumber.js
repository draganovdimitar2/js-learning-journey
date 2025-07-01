function solve(firstParam, secondParam, thirdParam) {
    let largestNum = Math.max(firstParam, secondParam, thirdParam);
    console.log(`The largest number is ${largestNum}.`);
}


function solve(a, b, c) {
    let largest;

    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    console.log(`The largest number is ${largest}.`);
}

solve(5,4,3);
solve2(5,4,3);