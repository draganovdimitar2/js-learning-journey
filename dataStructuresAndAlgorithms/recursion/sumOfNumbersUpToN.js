// Example: sumOfNumbersUpToN(4) => 4 + 3 + 2 + 1 = 10

function sumOfNumbersUpToN(n) {
    if (n == 1) {
        return 1;
    }
    return sumOfNumbersUpToN(n - 1) + n;
}

console.log(sumOfNumbersUpToN(10));
