// Example: countDigits(1234) => 4

function countDigitsInANumber(n) {
    let number = String(n).split('');
     if (number.length == 1) {
        return 1;
    }
    let newNumber = number.slice(1);
    newNumber = Number(newNumber.join(''));
    return countDigitsInANumber(newNumber) + 1;
   
}

console.log(countDigitsInANumber(266556565666));