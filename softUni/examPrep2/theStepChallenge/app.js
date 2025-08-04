// Requirements
// Write a JS program that can load, create, remove and edit a list of step records. You will be given an HTML template to which you must bind the needed functionality.
// First, you need to install all dependencies using the npm install command
// Then, you can start the front-end application with the npm start command
// You also must start the server.js file in the server folder using the node server.js command in another console (BOTH THE CLIENT AND THE SERVER MUST RUN AT THE SAME TIME).
// At any point, you can open up another console and run npm test to test the current state of your application. It’s preferable for all of your tests to pass locally before you submit to the Judge platform, like this:

// Endpoints
// -	http://localhost:3030/jsonstore/records/
// -	http://localhost:3030/jsonstore/records/:id

// 1.Load Records
// Clicking the [Load Records] button should send a GET request to the server to fetch all records from your local database. You must add each task to the <ul> with id="list". [Edit Record] button should be deactivated.

// 2.Add а Record
// Clicking the [Add Record] button should send a POST request to the server, creating a new Record record with the Name, Steps and Calories from the input values. After a successful creation, you should send another GET request to fetch all the records including the newly added one. You should also clear all the input fields after the creation!

// 3.Edit a Record
// Clicking the [Change] button  should populate the info into the input fields above. The [Edit Record] button in the form should be activated and the [Add Record] one should be deactivated.
// After clicking the [Edit Record] button in the form, you should send a PUT request to the server to modify the Name, Steps and the Calories of the changed item. After the successful request, you should fetch the items again and see that the changes have been made. After that, the [Edit Record] button should be deactivated and the [Add Record] one should be activated.

// 4.Delete
// Clicking the [Delete] button should send a DELETE request to the server and remove the item from your local database. After you've removed it successfully, fetch the Records again.


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
            await handleLoadRecords();
        }
    })
}

async function handleEditRecord() {
    const name = inputNameEl.value.trim();
    const steps = inputStepsEl.value.trim();
    const calories = inputCaloriesEl.value.trim();

    await fetch(`${BASE_URL}/${selectedRecordId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, steps, calories, _id: selectedRecordId})
    });

    await handleLoadRecords();

    addBtnEl.disabled = false;
    editBtnEl.disabled = true;

    inputNameEl.value = '';
    inputStepsEl.value = '';
    inputCaloriesEl.value = '';
}

async function handleAddRecord() {
    const name = inputNameEl.value.trim();
    const steps = inputStepsEl.value.trim();
    const calories = inputCaloriesEl.value.trim();

    await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, steps, calories})
    });

    inputNameEl.value = '';
    inputStepsEl.value = '';
    inputCaloriesEl.value = '';

    await handleLoadRecords();
}
