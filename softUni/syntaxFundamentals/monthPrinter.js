// Write a program, that takes an integer as a parameter and prints the corresponding month. 
// If the number is more than 12 or less than 1 print "Error!"

// Input
// You will receive a single number.

// Output
// If the number is within the boundaries print the corresponding month, otherwise print "Error!"



function solve(month) {
    const calendar = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June', 
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };

    if (month < 1 || month > 12) {
        console.log("Error!");
    } else {
        console.log(calendar[month]);
    }
}

solve(12);