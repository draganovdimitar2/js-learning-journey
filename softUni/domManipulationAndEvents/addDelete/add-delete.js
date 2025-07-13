// Extend the previous problem to display a [Delete] link after each list item. Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.


function addItem() {
    const ulEl = document.getElementById('items');
    const nameToAdd = document.getElementById('newItemText').value.trim();

    const newLiEl = document.createElement('li');
    newLiEl.textContent = nameToAdd;

    const delAEL = document.createElement('a');
    delAEL.textContent = '[Delete]'
    delAEL.href = '#';

    delAEL.addEventListener('click', handleDelete);
    newLiEl.appendChild(delAEL);

    ulEl.appendChild(newLiEl);

    function handleDelete() {
        newLiEl.remove();
    }
}
