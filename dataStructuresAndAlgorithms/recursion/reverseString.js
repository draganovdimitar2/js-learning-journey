// Example: reverse("hello") => "olleh"

function reverseString(someString) {
    if (someString.length == 1) {
        return someString;
    }
    return someString[someString.length - 1] + reverseString(someString.slice(0, someString.length - 1)); 
}

console.log(reverseString('hello'));