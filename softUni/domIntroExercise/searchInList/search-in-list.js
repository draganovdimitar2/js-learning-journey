// An HTML page holds a list of towns, a search box, and a [Search] button. Implement the search function to bold and underline the items from the list which include the text from the search box. Also, print the number of items the current search matches in the format `${matches} matches found`.
// Note: It is necessary to clear the results of the previous search.


function solve() {
   const searchedText = document.getElementById('searchText').value.toLowerCase();
   const liEls = document.querySelectorAll('#towns li');
   let matchCount = 0;

   for (const town of liEls) {
      const townName = town.textContent.toLowerCase();
      if (townName.includes(searchedText) && searchedText !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matchCount++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   document.getElementById('result').textContent = `${matchCount} matches found`;
}