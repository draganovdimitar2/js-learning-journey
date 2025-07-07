// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
// Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

// Output
// •	If the current integer is a palindrome, print: "true"
// •	Otherwise, print: "false"


function palindromeIntegers(input) {
    input.forEach(num => {
        let numString = String(num);

        function isPalindrome(str) {  // using recursion
            if (str.length <= 1) return true;
            if (str[0] !== str[str.length - 1]) return false;
            return isPalindrome(str.slice(1, str.length - 1));
        }

        console.log(isPalindrome(numString));
    });
}

arrPalindromeChecker([123,323,421,121]);
arrPalindromeChecker([32,2,232,1010]);