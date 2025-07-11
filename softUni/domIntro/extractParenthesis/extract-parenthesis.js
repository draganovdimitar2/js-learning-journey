// Write a JS function that when executed, extracts all parenthesized text from a target paragraph by given element ID. The result is a string, joined by "; " (semicolon, space).
// Input
// Your function will receive a string parameter, representing the target element ID, from which text must be extracted. The text should be extracted from the DOM.
// Output
// Return a string with all matched text, separated by "; " (semicolon, space).


function extract(targetElId) {
    const pElText = document.getElementById(targetElId);
    const content =pElText.textContent;

    let regExMatch = content.match(/\(.+?\)/g);
    const formattedMatches = regExMatch.map(match => match.substring(1, match.length - 1));
    return formattedMatches.join('; ');
}