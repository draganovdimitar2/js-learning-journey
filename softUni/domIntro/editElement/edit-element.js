// Create function edit() that takes three parameters.
// Input / Output
// The first parameter is a reference to an HTML element, the other two parameters are string–match and replacer.
// You have to replace all occurrences of the match inside the text content of the given element with a replacer.


function editElement(htmlEl, match, replacer) {
    let htmlContent = htmlEl.textContent;
    htmlContent = htmlContent.replaceAll(match, replacer);

    htmlEl.textContent = htmlContent;  // replace in html
}