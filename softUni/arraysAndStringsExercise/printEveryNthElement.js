// The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.
// The output is every element on the N-th step starting from the first one. If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. 
// The output is the return value of your function and must be an array.


function solve(someArray, num) {
    let newArr = [];
    for (let i = 0; i < someArray.length; i += num) {
        newArr.push(someArray[i]);
    }
    return newArr;
}


solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);