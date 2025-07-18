// Write a program that detects and displays how far along a gradient the user has moved their mouse. The result should be rounded down and displayed as a percentage inside the <div> with id "result". 
// Submit only the attachGradientEvents() function in Judge. 
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.


function attachGradientEvents() {
    const gradientEl = document.getElementById('gradient');
    const resultEl = document.getElementById('result');

    gradientEl.addEventListener('mousemove', calclulatePercentage)

    function calclulatePercentage(e) {;
        const percentage = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        resultEl.textContent = `${percentage}%`;
    }
}
