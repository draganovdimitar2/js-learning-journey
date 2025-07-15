// Write a function that dynamically validates an email input field when it is changed. If the input is invalid, apply the class "error". Do not validate on every keystroke, as it is annoying for the user, consider only change events.
// A valid email is considered to be in the format: <name>@<domain>.<extension>
// Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style. Submit only the solve() function in Judge.
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.


document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const input = document.getElementById('email');

    input.addEventListener('change', () => {
        const email = input.value;
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(email)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    });
}
