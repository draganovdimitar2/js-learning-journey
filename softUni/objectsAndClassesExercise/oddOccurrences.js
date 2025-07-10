// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.


function oddOccurrences(str) {
    let words = str.toLowerCase().split(' ');
    let wordOccurrences = new Map();

    for (const word of words) {
        if (wordOccurrences.has(word)) {
            let currentCount = wordOccurrences.get(word);
            wordOccurrences.set(word, currentCount + 1);
        } else {
            wordOccurrences.set(word, 1);
        }
    }

    let entries = wordOccurrences.entries();
    let result = [];
    for (let [word, occurrences] of entries) {
        if (occurrences % 2 != 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');