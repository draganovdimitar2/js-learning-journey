// Example: sumDigits(123) => 1 + 2 + 3 = 6

function sumOfDigits(n) {
    let number = String(n).split('');
    let firstDigit = Number(number[0]);
    if (number.length == 1) {
        return firstDigit;
    } 
    
    let newNumber = Number(number.slice(1).join(''));
    return sumOfDigits(newNumber) + firstDigit;
}

console.log(sumOfDigits(959484984))