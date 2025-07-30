// Your task is to write a JS function that executes an AJAX request with Fetch API and loads all user github repositories by a given username (taken from an input field with id "username") into a list (each repository as a list-item) with id "repos". Use the properties full_name and html_url of the returned objects to create a link to each repo’s GitHub page. If an error occurs (like 404 "Not Found"), append to the list a list-item with text the current instead. Clear the contents of the list before any new content is appended. See the highlighted lines of the skeleton for formatting details of each list item.


function loadRepos() {
	const usernameInputEl = document.querySelector('#username');
	const reposUlEl = document.querySelector('#repos');
	reposUlEl.innerHTML = '';

	const username = usernameInputEl.value.trim();

	fetch(`https://api.github.com/users/${username}/repos`)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.status);
			};
			
			return res.json();
		})
		.then(data => {
			console.log(data);
			for (let repo of data) {
				const newLiEl = document.createElement('li');
				const newAEl = document.createElement('a');
				newAEl.href = repo.html_url;
				newAEl.textContent = repo.full_name;
				newLiEl.appendChild(newAEl);
				reposUlEl.appendChild(newLiEl);
			};
		})
		.catch(err => {
			const newLiEl = document.createElement('li');
			newLiEl.textContent = err;
			reposUlEl.appendChild(newLiEl);
		})
}