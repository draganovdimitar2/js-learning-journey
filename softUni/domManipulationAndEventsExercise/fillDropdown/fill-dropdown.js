// Your task is to take values from input fields with ids "newItemText" and "newItemValue". Then you should create and append an <option> to the <select> with id "menu".


document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const addButton = document.querySelector('input[type="submit"][value="Add"]');
    const textInputEl = document.querySelector('#newItemText');
    const valueInputEl = document.querySelector('#newItemValue');
    const menuSelectEl = document.querySelector('#menu');

    addButton.addEventListener('click', handleAddOption);

    function handleAddOption(e) {
        e.preventDefault();
        const optionEl = document.createElement('option');
        optionEl.textContent = textInputEl.value;
        optionEl.value = valueInputEl.value;
        menuSelectEl.appendChild(optionEl);
        textInputEl.value = '';
        valueInputEl.value = '';
    };
}