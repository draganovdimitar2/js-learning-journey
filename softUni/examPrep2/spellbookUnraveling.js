// Write a program that performs a series of commands in order to decode that information. First, you will receive a string representing a mysterious spell waiting to be unraveled, and afterwards, until the command "End" is given, you will be receiving strings with commands split by a exclamation mark. The commands will be the following:
// •	"RemoveEven"
// o	The encoded spell is changed to consist only of its characters at even indices. Then, the updated spell is printed. 

// •	"TakePart!{from index}!{to index}":
// o	Selects a portion of the spell specified by two numbers, unveiling a segment of its hidden power and then prints the spell.

// •	"Reverse!{substring}":
// o	If the spell contains the given substring, cut it out, reverse it and add it at the end of the spell. Then, print the updated spell.   
// o	Otherwise, print "Error".
// o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.

// Input
// •	You will be receiving strings until the "End" command is given.
// Output
// •	After the "End" command is received, print:
// o	"The concealed spell is: {spell}"
// Constraints
// •	All given commands will be valid.
// •	Aways will recive encoded spell


function solve(arr) {
    let word = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let currCommand = arr[i];
        if (currCommand == 'End') {
            break;
        };

        if (currCommand == "RemoveEven") {
            word = [...word].filter((_, idx) => idx % 2 == 0).join('');
            console.log(word);
        } else {
            currCommand = currCommand.split('!');
            if (currCommand[0] == 'TakePart') {
                const fromIdx = currCommand[1];
                const toIdx = currCommand[2];
                word = word.slice(fromIdx, toIdx);
                console.log(word);
            } else if (currCommand[0] == 'Reverse') {
                let wordToReverse = currCommand[1];
                if (word.includes(wordToReverse)) {
                    word = word.replace(wordToReverse, "");
                    wordToReverse = wordToReverse.split('').reverse().join('');
                    word += wordToReverse;
                    console.log(word);
                } else {
                    console.log('Error');
                };
            };
        };
    };
    console.log(`The concealed spell is: ${word}`);
};

solve((["asAsl2adkda2mdaczsa", 
"RemoveEven",
"TakePart!1!9",
"Reverse!maz",
"End"])
);

solve((["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
"TakePart!31!42",
"RemoveEven",
"Reverse!anim",
"Reverse!sad",
"End"])
);



