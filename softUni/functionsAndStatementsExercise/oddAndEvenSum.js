// You will receive a single number. You have to write a function,
// that returns the sum of all even and all odd digits from that number. 


function oddAndEvenSum(digitsString) {
    let digitsArr = String(digitsString).split('');
    let oddSum = 0;
    let evenSum = 0;

    for (let num of digitsArr) {
        num % 2 == 0 ? evenSum += Number(num) : oddSum += Number(num);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);