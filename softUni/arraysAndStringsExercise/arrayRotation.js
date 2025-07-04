// Write a function that receives an array and the number of rotations you have to perform. 
// Note: For each rotation, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.


function solve(someArray, num) {
    for (let i = 0; i < num; i++) {
        someArray.push(someArray.shift());
    }
    console.log(someArray.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);