// Write a program that takes an email from an input field and deletes the matching row from a table. 
// •	If entry is found, the textContent in the element with id="result" must be set to "Deleted."
// •	Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found." 
// Submit only the deleteByEmail() function in Judge. 
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.


function deleteByEmail() {
    const tdEmailEls = document.querySelectorAll('tbody tr td:nth-child(2)');
    const searchedEmail = document.querySelector('input').value.trim();
    const resultEl = document.getElementById('result');

    for (const emailEl of tdEmailEls) {
        if (emailEl.textContent == searchedEmail) {
            const trEl = emailEl.parentElement;
            trEl.remove();
            resultEl.textContent = "Deleted.";
        } else {
            resultEl.textContent = "Not found.";
        }
    }
}
