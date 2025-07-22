// In this problem, you should create a JS functionality that shows and hides the additional information about users.
// When one of the [Show more] buttons is clicked, the hidden information inside the div should
// be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.
// If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working! 
// Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.


document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const controlShowBtnEls = document.querySelectorAll('button');
    controlShowBtnEls.forEach(btnEl => btnEl.addEventListener('click', handleControlShow));

    function handleControlShow(e) {
        const fullProfileDivEl = e.target.parentElement;
        const lockedBtnEl = fullProfileDivEl.querySelector('input[type="radio"]');
        
        if (lockedBtnEl.checked) {
            return;
        } 

        const infoDivEl = fullProfileDivEl.querySelector('.hidden-fields');

        if (infoDivEl.style.display === 'none') {
            infoDivEl.style.display = 'block';
            e.target.textContent = 'Show less';
        } else {
            infoDivEl.style.display = 'none';
            e.target.textContent = 'Show more';
        };
    };
};