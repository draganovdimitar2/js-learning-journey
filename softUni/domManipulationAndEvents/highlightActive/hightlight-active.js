// Write a function that highlights the currently active section of a document. There will be multiple divs with input fields inside them. Set the class of the div that contains the currently focused input field to "focused". When the focus is lost (blurred), remove the class from the element.
// Submit only the focused() function in Judge.
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.


document.addEventListener('DOMContentLoaded', focused);

function focused() {
  const inputs = document.querySelectorAll('div input');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
}