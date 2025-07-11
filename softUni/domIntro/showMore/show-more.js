// Write a JS function that expands a hidden section of text when a link is clicked. The link should disappear as the rest of the text shows up.
// Input / Output
// There will be no input / output, your program should instead modify the DOM of the given HTML document.


function showText() {
    const aEl = document.getElementById('more');
    const spanEl = document.getElementById('text');

    aEl.style.display = 'none';
    spanEl.style.display = 'inline';
}