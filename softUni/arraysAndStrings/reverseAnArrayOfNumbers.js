// Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.

function reverse(n, inputArr) {
    console.log(inputArr.slice(0, n).reverse().join(' '));
}

reverse(4, [-1, 20, 99, 5]);