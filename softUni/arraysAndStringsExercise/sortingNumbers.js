// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
// Return the resulting array.


function solve(someArray) {
    let sortedArr = someArray.sort((a, b) => a - b);
    let arrayLength = someArray.length;
    let newArr = [];

    for (let i = 0; i < arrayLength; i++) {
        i % 2 == 0 ? newArr.push(sortedArr.shift()) :  newArr.push(sortedArr.pop());
    }
    return newArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);