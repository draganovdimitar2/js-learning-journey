// Write a function that prints all the numbers from 1 to 5 (inclusive) each on a separate line.


// Both loops
function solve() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

function solve2() {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

solve();
solve2();

