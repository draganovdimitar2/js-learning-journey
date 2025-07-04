// Write a function that receives a text and a single word that you need to search. Print the number of all occurrences of this word in the text.


function solve(text, searchedWord) {
    let textArr = text.split(' ').filter((word) => word == searchedWord);
    console.log(textArr.length);
}

solve('This is a word and it also is a sentence',
'is'
);

solve('softuni is great place for learning new programming languages',
'softuni'
);