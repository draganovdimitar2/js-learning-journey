// Write a function that receives a single integer number n and prints nxn matrix with that number.

function matrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++){
        matrix.push([]);
        for (let j = 0; j < n; j++) {
            matrix[i].push(n);
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

matrix(3);
matrix(7);