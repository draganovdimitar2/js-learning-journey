// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code.
// Keep in mind that the second character code might be before the first one inside the ASCII table.


function charactersInRange(firstChar, secondChar) {
    let firstCharAscii = firstChar.charCodeAt(0);
    let secondCharAscii = secondChar.charCodeAt(0);

    let startAscii = Math.min(firstCharAscii, secondCharAscii);
    let endAscii = Math.max(firstCharAscii, secondCharAscii);

    let result = [];
    for (let i = startAscii + 1; i < endAscii; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#',':');
charactersInRange('C','#');