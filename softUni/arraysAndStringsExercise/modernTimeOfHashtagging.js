// The input will be a single string.
// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed. 
// Finally, print out all the special words you found without the label (#) on a new line.


function solve(text) {
    let matches = text.match(/#[A-Za-z]+/g);
    if (matches) {  // still hits 100/100 without this if-statement
        matches.forEach(match => console.log(match.slice(1)));
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');