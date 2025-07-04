// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.


function solve(words, text) {
    words.split(', ').forEach(word => text = text.replace('*'.repeat(word.length), word));
    console.log(text);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'  
);