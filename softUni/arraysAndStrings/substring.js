// Write a function that receives a string and two numbers. The numbers will be a starting index and count of elements to substring. Print the result.


function solve(someString, startingIdx, countOfElements) {
    console.log(someString.slice(startingIdx, startingIdx + countOfElements));
}