// Write a function that receives a number M and a number N (M will always be bigger than N). 
// Print all numbers from M to N.


// Both loops

function solve(M, N) {
    while (M >= N) {
        console.log(M);
        M--;
    }
}

function solve2(M, N) {
    for (let i = M; i >= N; i--) {
        console.log(i);
    }
}


solve(6,2);
solve2(6,2);
