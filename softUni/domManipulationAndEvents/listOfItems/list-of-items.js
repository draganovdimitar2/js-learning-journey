// Write a function that reads the text inside an input field and appends the specified text to a list inside an HTML page.

function addItem() {
    const ulEl = document.getElementById('items');
    const nameToAdd = document.getElementById('newItemText').value.trim();

    const newLiEl = document.createElement('li');
    newLiEl.textContent = nameToAdd;
    ulEl.appendChild(newLiEl);
}
