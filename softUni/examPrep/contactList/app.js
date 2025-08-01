// Your Task
// Write the missing JavaScript code to make the Contact List work as expected:
// o	Name, Phone Number, and Category should be non-empty strings. If any of them are empty, the program should not do anything.

// 1.Getting the information from the form

// When you click the [Add] button, the information from the input fields must be added to the <ul> with the id "check-list"and the input fields should be cleared.

// 2. Edit Contact
// When the [Edit] button is clicked, the information from the check must be sent to the input fields on the left side and the record should be deleted from the <ul> "check-list".
// After editing the information, add a new item to the <ul> with the updated information.

// 3.Save Contact
// When you click the [Save] button, the task must be deleted from the <ul> with id "check-list" and appended to the <ul> with id "contact-list".
// The buttons [Edit] and [Save] should be removed from the <li> element and  the button [Delete] shoud be added.

// 4.Delete Contact
// When you click the [Delete] button, the task must be deleted from the <ul> with id "contact-list" .


window.addEventListener("load", solve);

function solve() {
    const checkListUlEl = document.getElementById('check-list');
    const nameInputEl = document.getElementById('name');
    const phoneNumberInputEl = document.getElementById('phone');
    const addBtnInputEl = document.getElementById('add-btn');
    const categorySelect = document.getElementById('category');
    const contactListUlEl = document.getElementById('contact-list');

    addBtnInputEl.addEventListener('click', handleAddToCheckList);

    function handleAddToCheckList(e) {
      e.preventDefault();
      const name = nameInputEl.value;
      const number = phoneNumberInputEl.value;
      const selectedCategory = categorySelect.value;

      nameInputEl.value = '';
      phoneNumberInputEl.value = '';
      categorySelect.value = '';

      const newLiEl = document.createElement('li');
      checkListUlEl.appendChild(newLiEl);

      const newArticleEl = document.createElement('article');
      newLiEl.appendChild(newArticleEl);

      const pNameEl = document.createElement('p');
      pNameEl.textContent = `name:${name}`;
      const pPhoneEl = document.createElement('p');
      pPhoneEl.textContent = `phone:${number}`;
      const pCategoryEl = document.createElement('p');
      console.log(selectedCategory);
      pCategoryEl.textContent = `category:${selectedCategory}`;

      newArticleEl.appendChild(pNameEl);
      newArticleEl.appendChild(pPhoneEl);
      newArticleEl.appendChild(pCategoryEl);

      const divEl = document.createElement('div');
      divEl.classList.add('buttons');
      newLiEl.appendChild(divEl);

      const editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      divEl.appendChild(editBtn);

      const saveBtn = document.createElement('button');
      saveBtn.classList.add('save-btn');
      divEl.appendChild(saveBtn);

      editBtn.addEventListener('click', handleEdit);

      function handleEdit() {
        const currentArticle = document.querySelector('article');
        const nameToAdd = currentArticle.children[0].textContent.split(':')[1];
        const phoneToAdd = currentArticle.children[1].textContent.split(':')[1];
        const categoryToAdd = currentArticle.children[2].textContent.split(':')[1];
        console.log(categoryToAdd);
        
        
        nameInputEl.value = nameToAdd;
        phoneNumberInputEl.value = phoneToAdd;
        categorySelect.value = categoryToAdd;

        checkListUlEl.innerHTML = '';
      }

      saveBtn.addEventListener('click', handleSave);

      function handleSave() {
        const items = Array.from(checkListUlEl.children); // All <li> elements

        checkListUlEl.innerHTML = ''; // Clear the original list

        items.forEach(item => {
          contactListUlEl.appendChild(item); // Move each <li> to contact-list
        });

        const btnEls = document.querySelectorAll('button');
        Array.from(btnEls).forEach(btn => btn.remove());
        const divEls = document.querySelectorAll('.buttons'); // Note querySelectorAll (plural)
        Array.from(divEls).forEach(div => div.remove());

        const liEl = contactListUlEl.children[0];
        const delBtnEl = document.createElement('button');
        delBtnEl.classList.add('del-btn');
        liEl.appendChild(delBtnEl);

        delBtnEl.addEventListener('click', handleDeletion);

        function handleDeletion() {
          const contactListEl = document.getElementById('contact-list');
          contactListEl.innerHTML = '';
        }
      }
    }
  }
  