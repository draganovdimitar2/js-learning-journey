// You are given a webpage with a form containing a text input and a submit button. When the form is submitted, split the input value by ", " and use each resulting string to create a section.
// Each section must be a <div> containing a hidden <p> element with the section title. When the <div> is clicked, the paragraph should become visible.
// Append all generated sections to the element with id="content".


document.addEventListener('DOMContentLoaded', solve);


function solve() {
   const formEl = document.querySelector('form');
   const divContentEl = document.querySelector('#content'); // ✅ FIXED

   formEl.addEventListener('submit', handleSplit);

   function handleSplit(e) {
      e.preventDefault();

      const currentText = document.querySelector('input[type="text"]').value;
      const sections = currentText.split(', '); // ✅ Use ", " to match the requirement

      sections.forEach(section => {
         const newDivEl = document.createElement('div');
         const newPEl = document.createElement('p');
         newPEl.style.display = 'none';
         newPEl.textContent = section;
         newDivEl.appendChild(newPEl);
         divContentEl.appendChild(newDivEl);

         newDivEl.addEventListener('click', handlePShow);
      });
   };

   function handlePShow(e) {
      const pEl = e.currentTarget.querySelector('p');
      pEl.style.display = 'block';
   };
};