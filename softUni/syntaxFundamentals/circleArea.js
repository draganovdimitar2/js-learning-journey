// Write a function that takes a single argument as input. Check the type of input argument. 
// If it is a number, assume it is the radius of a circle and calculate the circle area. 
// Print the area rounded to two decimal places.
// If the argument type is NOT a number, print the following text on the console: 
// `We can not calculate the circle area, because we receive a {type of argument}.`
// The input comes as a single argument passed to your function.
// The output should be printed on the console.


function solve(inputParam) {
    const typeOfParam = typeof inputParam;
    if (typeOfParam === 'number') {
        console.log((Math.PI * inputParam ** 2).toFixed(2));
    } else if (typeOfParam != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfParam}.`);
    }
    //else {
    //    console.log(`We can not calculate the circle area, because we receive a ${typeOfParam}.`);
    //}
}

solve(5);