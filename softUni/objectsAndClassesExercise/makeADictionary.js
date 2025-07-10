// You will receive an array with strings in the form of JSON's. 
// You have to parse these strings and combine them into one object. 
// Every string from the array will hold terms and a description. 
// If you receive the same term twice, replace it with the new definition.
// Print every term and definition in that dictionary on new line in format:
// `Term: ${term} => Definition: ${definition}`
// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.


function makeADictionary(arr) {
    let dictionary = {};

    for (let jsonStr of arr) {
        let parsed = JSON.parse(jsonStr);
        let [term, definition] = Object.entries(parsed)[0];
        dictionary[term] = definition; // overwrites if duplicate
    }

    let sorted = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [term, definition] of sorted) {
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

makeADictionary([
'{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
'{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
'{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
'{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
'{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
]
);