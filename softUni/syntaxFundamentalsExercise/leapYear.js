// Write a JS function to check whether a year is a leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. The output should be following:
// •	If the year is a leap, print: "yes"
// •	Otherwise, print: "no"

function solve(year) {
  console.log(((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 'yes' : 'no');
}

solve(4);