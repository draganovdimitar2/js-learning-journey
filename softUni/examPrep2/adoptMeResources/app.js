// Your Task
// Write the missing JavaScript code to make the Adopt Me application work as expected:
// o	Type Of Animal, Age, and Gender should be non-empty strings. If any of them are empty, the program should not do anything.

// 1.Getting the information from the form
// When you click the [Adopt!] button, the information from the input fields must be added to the <ul> with the id "adoption-info"and the input fields should be cleared.
// 2.Edit Info
// When the [Edit] button is clicked, the information from the check info must be sent to the input fields and the record should be deleted from the <ul> "adoption-info".
// After editing the information, add a new item to the <ul> with the updated information.
// 3.Finish Adoption
// When you click the [Done] button, the task must be deleted from the <ul> with id "adoption-info" and appended to the <ul> with id "adopted-list".
// The buttons [Edit] and [Done] should be removed from the <li> element and  the button [Clear] shoud be added.
// 4.Clear List
// When you click the [Clear] button, the task must be deleted from the <ul> with id "adopted-list" .
// Submission
// Submit only your solve() function.


window.addEventListener("load", solve);

function solve() {
    const adoptBtnEl = document.querySelector('#adopt-btn');
    const adoptionInfoUlEl = document.querySelector('#adoption-info');
    const adoptedListUlEl = document.querySelector('#adopted-list');

    const typeInputEl = document.querySelector('#type');
    const ageInputEl = document.querySelector('#age');
    const genderSelectEl = document.querySelector('#gender');

    adoptBtnEl.addEventListener('click', handleGetInfo);

    function handleGetInfo(e) {
      e.preventDefault();
      const type = typeInputEl.value.trim();
      const age = ageInputEl.value.trim();
      const gender = genderSelectEl.value.trim();

      if (!type || !age || !gender) {
        return;
      }

      const liEl = document.createElement('li');
      const articleEl = document.createElement('article');
      
      const pAnimalTypeEl = document.createElement('p');
      pAnimalTypeEl.textContent = `Pet:${type}`;

      const pGenderEl = document.createElement('p');
      pGenderEl.textContent = `Gender:${gender}`;

      const pAgeEl = document.createElement('p');
      pAgeEl.textContent = `Age:${age}`;

      const divBtnClassEl = document.createElement('div');
      divBtnClassEl.classList.add('buttons');

      const editBtnEl = document.createElement('button');
      editBtnEl.classList.add('edit-btn');
      editBtnEl.textContent = 'Edit';

      const doneBtnEl = document.createElement('button');
      doneBtnEl.classList.add('done-btn');
      doneBtnEl.textContent = 'Done';

      divBtnClassEl.appendChild(editBtnEl);
      divBtnClassEl.appendChild(doneBtnEl);
      articleEl.appendChild(pAnimalTypeEl);
      articleEl.appendChild(pGenderEl);
      articleEl.appendChild(pAgeEl);
      liEl.appendChild(articleEl);
      liEl.appendChild(divBtnClassEl);
      adoptionInfoUlEl.appendChild(liEl);

      typeInputEl.value = '';
      ageInputEl.value = '';
      genderSelectEl.value = '';

      editBtnEl.addEventListener('click', handleEdit);
      doneBtnEl.addEventListener('click', handleAdoption);

      function handleEdit() {
        typeInputEl.value = type;
        ageInputEl.value = age;
        genderSelectEl.value = gender;
        liEl.remove();
      }

      function handleAdoption(e) {
        adoptedListUlEl.appendChild(liEl);
        editBtnEl.remove();
        doneBtnEl.remove();

        const clearBtnEl = document.createElement('button');
        clearBtnEl.classList.add('clear-btn');
        clearBtnEl.textContent = 'Clear';
        liEl.appendChild(clearBtnEl);

        clearBtnEl.addEventListener('click', handleClear);

        function handleClear() {
          liEl.remove()
        }
      }
    }
  }
  