// Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number
// The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
// The output should be printed on the console.


function solve(n, firstOperation, secondOperation, thirdOperation, fourthOperation, fifthOperation, sixthOperation) {
    let num = Number(n);

    const operations = {
        chop: n => n / 2,
        dice: n => Math.sqrt(n),
        spice: n => n + 1,
        bake: n => n * 3,
        fillet: n => n * 0.8
    };

    const ops = [firstOperation, secondOperation, thirdOperation, fourthOperation, fifthOperation];

    for (let op of ops) {
        num = operations[op](num);
        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');