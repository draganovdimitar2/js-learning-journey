// Write a function that searches in a table by given input.

// When the "Search" button is clicked, go through all cells in the table except for the first row (Student name, Student email, and Student course) and check if the given input has a match (check for both full words and single letters).
// If any of the rows contain the submitted string, add a class select to that row. Note that more than one row may contain the given string. 
// Оtherwise, if there is no match, nothing should happen.
// Note: After every search ("Search" button is clicked), clear the input field and remove all already selected classes (if any) from the previous search, for the new search to contain only the new result.


function solve() {
   const trEls = document.querySelectorAll('tbody tr');
   const searchedWord = document.getElementById("searchField").value.trim();
   
   for (const tr of trEls) {
      tr.classList.remove('select'); // remove any previous highlighting
      for (const td of tr.children) {
         if (td.textContent.includes(searchedWord) && searchedWord !== '') {
            tr.classList.add('select'); // highlight the row
            break; // no need to check other tds in this row
         }
      }
   }
}
