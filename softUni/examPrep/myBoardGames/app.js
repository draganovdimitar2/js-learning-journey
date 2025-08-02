// Requirements
// Write a JS program that can load, create, remove and edit a list of board games. You will be given an HTML template to which you must bind the needed functionality.
// First, you need to install all dependencies using the npm install command
// Then, you can start the front-end application with the npm start command
// You also must start the server.js file in the server folder using the node server.js command in another console (BOTH THE CLIENT AND THE SERVER MUST RUN AT THE SAME TIME).
// At any point, you can open up another console and run npm test to test the current state of your application. It’s preferable for all of your tests to pass locally before you submit to the Judge platform, like this:

// Endpoints
// -	http://localhost:3030/jsonstore/games/
// -	http://localhost:3030/jsonstore/games/:id

// Load Games
// Clicking the [Load Games] button should send a GET request to the server to fetch all records from your local database. You must add each task to the <div> with id="games-list". [Edit Game] button should be deactivated.

// Add а Game
// Clicking the [Add Game] button should send a POST request to the server, creating a new game record with the name, type, and max players from the input values. After a successful creation, you should send another GET request to fetch all games records, including the newly added one. You should also clear all the input fields after the creation!

// Edit a Game
// Clicking the [Change] button on a game the information about the game should be populated into the input fields above. The [Edit Game] button in the form should be activated and the [Add Game] one should be deactivated.
// After clicking the [Edit Game] button in the form, you should send a PUT request to the server to modify the name, type and the max players of the changed item. After the successful request, you should fetch the games again and see that the changes have been made. After that, the [Edit Game] button should be deactivated and the [Add Game] one should be activated. You should also clear all the input fields after the edit!

// Delete
// Clicking the [Delete] button should send a DELETE request to the server and remove the item from your local database. After you've removed it successfully, fetch the games again.


const BASE_URL = 'http://localhost:3030/jsonstore/games/';

const nameInputEl = document.querySelector('#g-name');
const typeInputEl = document.querySelector('#type');
const playersInputEl = document.querySelector('#players');
const gamesListDiv = document.querySelector('#games-list');

const addGameBtn = document.querySelector('#add-game');
const editGameBtn = document.querySelector('#edit-game');
const loadGameBtn = document.querySelector('#load-games');
const changeBtn = document.querySelector('.change-btn');
const deleteBtn = document.querySelector('.delete-btn');

let selectedGameId = null;  // to save the gameId from handleLoadEdit fumction


loadGameBtn.addEventListener('click', handleLoadGames);
addGameBtn.addEventListener('click', handleAddGame);
editGameBtn.addEventListener('click', handleEditGame);

async function handleLoadGames() {
    const gamesRes = await fetch(BASE_URL);
    const gamesData = await gamesRes.json();
    const gamesArr = Object.values(gamesData);
    gamesListDiv.innerHTML = '';  // delete the hardcoded game

    gamesArr.forEach(gameObj => {
        const boardGameDivEl = document.createElement('div');
        boardGameDivEl.classList.add('board-game');

        const contentDivEl = document.createElement('div');
        contentDivEl.classList.add('content');

        const namePEl = document.createElement('p');
        namePEl.textContent = gameObj.name;

        const playersPEl = document.createElement('p');
        playersPEl.textContent = gameObj.players;

        const typePEl = document.createElement('p');
        typePEl.textContent = gameObj.type;

        const btnsContainerDiv = document.createElement('div');
        btnsContainerDiv.classList.add('buttons-container');

        const newChangeBtnEl = document.createElement('button');
        newChangeBtnEl.classList.add('change-btn');
        newChangeBtnEl.textContent = 'Change';

        const newDeleteBtnEl = document.createElement('button');
        newDeleteBtnEl.classList.add('delete-btn');
        newDeleteBtnEl.textContent = 'Delete';

        gamesListDiv.appendChild(boardGameDivEl);
        boardGameDivEl.appendChild(contentDivEl);
        contentDivEl.appendChild(namePEl);
        contentDivEl.appendChild(playersPEl);
        contentDivEl.appendChild(typePEl);

        boardGameDivEl.appendChild(btnsContainerDiv);
        btnsContainerDiv.appendChild(newChangeBtnEl);
        btnsContainerDiv.appendChild(newDeleteBtnEl);

        newChangeBtnEl.addEventListener('click', handleLoadEdit);

        newDeleteBtnEl.addEventListener('click', handleDeleteGame);

        async function handleDeleteGame() {
            await fetch(`${BASE_URL}/${gameObj._id}`, {
                method: 'DELETE'
            });
            
            await handleLoadGames();
        }

        function handleLoadEdit() {
            nameInputEl.value = gameObj.name;
            typeInputEl.value = gameObj.type;
            playersInputEl.value = gameObj.players;

            editGameBtn.disabled = false;
            addGameBtn.disabled = true;

            selectedGameId = gameObj._id;
        }
    });
}

async function handleAddGame() {
    const name = nameInputEl.value.trim();
    const type = typeInputEl.value.trim();
    const players = playersInputEl.value.trim();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, type, players })
    });

    nameInputEl.value = '';
    typeInputEl.value = '';
    playersInputEl.value = '';

    await handleLoadGames();
}

async function handleEditGame() {
    const name = nameInputEl.value.trim();
    const type = typeInputEl.value.trim();
    const players = playersInputEl.value.trim();

    await fetch(`${BASE_URL}/${selectedGameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, type, players})
    });

    nameInputEl.value = '';
    typeInputEl.value = '';
    playersInputEl.value = '';

    selectedGameId = null;
    
    addGameBtn.disabled = false;
    editGameBtn.disabled = true;

    await handleLoadGames();
}

