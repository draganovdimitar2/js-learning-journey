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