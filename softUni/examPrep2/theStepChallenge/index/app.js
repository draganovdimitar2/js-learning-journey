const BASE_URL = 'http://localhost:3030/jsonstore/records/';

const loadBtnEl = document.querySelector('#load-records');
const addBtnEl = document.querySelector('#add-record');
const editBtnEl = document.querySelector('#edit-record');
const listUlEl = document.querySelector('#list');

const inputNameEl = document.querySelector('#p-name');
const inputStepsEl = document.querySelector('#steps');
const inputCaloriesEl = document.querySelector('#calories');

let selectedRecordId = null;

loadBtnEl.addEventListener('click', handleLoadRecords);
addBtnEl.addEventListener('click', handleAddRecord);
editBtnEl.addEventListener('click', handleEditRecord);

async function handleLoadRecords() {
    listUlEl.innerHTML = '';
    selectedRecordId = null;
    const fetchAllRecords = await fetch(BASE_URL);
    const dataObj = await fetchAllRecords.json();
    const valuesObj = Object.values(dataObj);

    valuesObj.forEach(obj => {
        const liRecordEl = document.createElement('li');
        liRecordEl.classList.add('record');
        
        const divInfoEl = document.createElement('div');
        divInfoEl.classList.add('info');

        const pNameEl = document.createElement('p');
        pNameEl.textContent = obj.name;

        const pStepsEl = document.createElement('p');
        pStepsEl.textContent = obj.steps;

        const pCaloriesEl = document.createElement('p');
        pCaloriesEl.textContent = obj.calories;

        const divWrapperEl = document.createElement('div');
        divWrapperEl.classList.add('btn-wrapper');

        const newChangeBtnEl = document.createElement('button');
        newChangeBtnEl.classList.add('change-btn');
        newChangeBtnEl.textContent = 'Change';

        const newDeleteBtnEl = document.createElement('button');
        newDeleteBtnEl.classList.add('delete-btn');
        newDeleteBtnEl.textContent = 'Delete';

        listUlEl.appendChild(liRecordEl);
        liRecordEl.appendChild(divInfoEl);
        divInfoEl.appendChild(pNameEl);
        divInfoEl.appendChild(pStepsEl);
        divInfoEl.appendChild(pCaloriesEl);

        liRecordEl.appendChild(divWrapperEl);
        divWrapperEl.appendChild(newChangeBtnEl);
        divWrapperEl.appendChild(newDeleteBtnEl);

        newChangeBtnEl.addEventListener('click', handleAddInfoToInputFields);
        newDeleteBtnEl.addEventListener('click', handleDeletion);

        function handleAddInfoToInputFields() {
            inputNameEl.value = obj.name;
            inputStepsEl.value = obj.steps;
            inputCaloriesEl.value = obj.calories;
            selectedRecordId = obj._id;

            addBtnEl.disabled = true;
            editBtnEl.disabled = false;
        };

        async function handleDeletion() {
            await fetch(`${BASE_URL}/${obj._id}`, {
                method: 'DELETE'
            });
            handleLoadRecords();
        }
    })
}

async function handleEditRecord() {
    const name = inputNameEl.value;
    const steps = inputStepsEl.value;
    const calories = inputCaloriesEl.value;

    await fetch(`${BASE_URL}/${selectedRecordId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, steps, calories})
    });

    handleLoadRecords();

    addBtnEl.disabled = false;
    editBtnEl.disabled = true;

    inputNameEl.value = '';
    inputStepsEl.value = '';
    inputCaloriesEl.value = '';
}

async function handleAddRecord() {
    const name = inputNameEl.value;
    const steps = inputStepsEl.value;
    const calories = inputCaloriesEl.value;

    await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, steps, calories})
    });

    handleLoadRecords();

    inputNameEl.value = '';
    inputStepsEl.value = '';
    inputCaloriesEl.value = '';
}
