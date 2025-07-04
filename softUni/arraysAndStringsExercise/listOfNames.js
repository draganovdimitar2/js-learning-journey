// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.


function solve(someNames) {
  someNames.sort((a, b) => a.localeCompare(b)).forEach((name, i) => {  // localeCompare for proper alphabetical sorting
    console.log(`${i + 1}.${name}`);
  });
}

solve(["John", "Bob", "Christina", "Ema"]);