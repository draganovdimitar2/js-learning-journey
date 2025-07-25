// Example: fibonacci(5) => 5

function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1 || n == 2) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(10));