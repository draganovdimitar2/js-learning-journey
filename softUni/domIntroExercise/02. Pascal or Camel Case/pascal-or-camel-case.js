// An HTML file is given and your task is to write a function that takes two string parameters as an input and transforms the first parameter to the type required by the second parameter.
// •	The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always be separated by space.
// •	The second parameter will be either "Camel Case" or "Pascal Case". In case of different input, your output should be "Error!"
// When the button is clicked the function should convert the first string to either of the cases. The output should consist of only one word - the string you have modified. Once your output is done, you should set it as HTML to the <span> element. For more information, see the examples below:


function solve() {
  const namingConvention = document.getElementById('naming-convention').value;
  let text = document.getElementById('text').value.trim();
  let textToLowerCase = text.toLowerCase().split(' ');
  let result = '';

  if (namingConvention != 'Camel Case' && namingConvention != 'Pascal Case') {
    document.getElementById('result').textContent = 'Error!';  // error case
    return;  // stop executing anymore
  } else if (namingConvention == 'Camel Case') {
    textToLowerCase.forEach((word, idx) => {
      if (idx > 0) {
        result += word[0].toUpperCase() + word.slice(1);
      } else {
        result+=word;
      }
    })
  } else if (namingConvention == 'Pascal Case') {
    textToLowerCase.forEach(word => result += word[0].toUpperCase() + word.slice(1));
  }
  document.getElementById('result').textContent = result;
}