// An HTML file is given and your task is to show more/less information. By clicking the [More] button, 
// it should reveal the content of a hidden div and changes the text of the button to [Less]. 
// When the same link is clicked again (now reading Less), hide the div and change the text of the link to More. 
// Link action should be toggleable (you should be able to click the button an infinite amount of times).


function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const pEl = document.getElementById('extra');

    if (button.innerHTML === 'More') {
        button.innerHTML = 'Less';
        pEl.style.display = 'block';
    } else {
        button.innerHTML = 'More';
        pEl.style.display = 'none';
    }
}