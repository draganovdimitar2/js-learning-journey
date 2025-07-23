// Create a program that converts different time units. Your task is to add a click event listener to all [CONVERT] buttons. When a button is clicked, read the corresponding input field, convert the value to the three other time units and display it in the input fields.
// One day is equal to 24 hours/1440 minutes/86400 seconds. Whichever button we click, the input fields should change depending on the added value on the left. (For example, if we write 48 hours and click convert the days, the field value should change to 2).


document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const allConvertBtns = document.querySelectorAll('input[type="submit"]');
    const allFormEls = document.querySelectorAll('form');

    const daysInputEl = document.getElementById('days-input');
    const hoursInputEl = document.getElementById('hours-input');
    const minutesInputEl = document.getElementById('minutes-input');
    const secondInputEl = document.getElementById('seconds-input');
    allFormEls.forEach(formEl => formEl.addEventListener('submit', handleConversion));

    function handleConversion(e) {
        e.preventDefault();
        
        const currentFormEl = e.target;
        const currentInputEl = currentFormEl.querySelector('input[type="number"]');
        const originalValue = Number(currentInputEl.value.trim());
        const currentUnit = currentFormEl.id;

        if (currentUnit == 'days') {
            hoursInputEl.value = (originalValue * 24).toFixed(2);
            minutesInputEl.value = (originalValue * 1440).toFixed(2);
            secondInputEl.value = (originalValue * 86400).toFixed(2);
        } else if (currentUnit == 'hours') {
            const days = originalValue / 24;

            daysInputEl.value = days.toFixed(2);
            minutesInputEl.value = (days * 1440).toFixed(2);
            secondInputEl.value = (days * 86400).toFixed(2);
        } else if (currentUnit == 'minutes') {
            const days = originalValue / 1440;

            daysInputEl.value = days.toFixed(2);
            hoursInputEl.value = (days * 24).toFixed(2);
            secondInputEl.value = (days * 86400).toFixed(2);
        } else if (currentUnit == 'seconds') {
            const days = originalValue / 86400;

            daysInputEl.value = days.toFixed(2);
            hoursInputEl.value = (days * 24).toFixed(2);
            minutesInputEl.value = (days * 1440).toFixed(2);
        };
    };
};