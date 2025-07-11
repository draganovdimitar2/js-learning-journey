// Write a JS function that reads two numbers from input fields in a web page and puts their sum in another field when the user clicks on a button.
// Input / Output
// There will be no input / output, your program should instead modify the DOM of the given HTML document.


function calc() {
    const num1InputEl = document.getElementById('num1');
    const num2InputEl = document.getElementById('num2');
    const sumInputEl = document.getElementById('sum');

    const num1 = Number(num1InputEl.value);
    const num2 = Number(num2InputEl.value);
    const sum = Number(num1 + num2);

    sumInputEl.value = sum;
}