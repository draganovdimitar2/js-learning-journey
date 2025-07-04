// You will be given a string representing a username. The correct password will be that username reversed. Until you receive the correct password print on the console: "Incorrect password. Try again.". When you receive the correct password print: "User {username} logged in." 
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program. 
// The input comes as an array of strings - the first string represents username and each subsequent string is a password.


function solve(someArray) {
    let username = someArray[0];
    let password = username.split('').reverse().join('');  // username reversed
    for (let i = 1; i < someArray.length; i++)
        if (i == 4 && someArray[i] != password) {  // on 4th failed attempt get blocked
            console.log(`User ${username} blocked!`);
            break;
        }
        else if (someArray[i] == password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);