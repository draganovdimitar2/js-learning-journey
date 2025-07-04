// Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

function solve(text, word) {
    console.log(text.replaceAll(word, '*'.repeat(word.length)));
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');