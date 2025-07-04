// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function solve(arr) {
    let even = 0;
    let odd = 0;

    for (let num of arr) {
        if (num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    }
    console.log(even - odd);
}

