// A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket.
//  If the given age does not fit one of the categories, you should print "Error!".  
// You can see the prices in the table below:

// Day / Age | 0 <= age <= 18 | 18 < age <= 64	| 64 < age <= 122
// Weekday |    12$	| 18$ |	12$
// Weekend |	15$ | 20$ | 15$
// Holiday |	5$	| 12$ |	10$

// Input
// The input comes in two parameters. The first one will be the type of day (string). The second – is the age of the person (number).
// Output
// Print the price of the ticket according to the table, or "Error!" if the age is not in the table.


function solve(dayParam, ageParam) {
    if (ageParam < 0 || ageParam > 122) {
        console.log('Error!');
    } else if (dayParam == 'Weekday') {
        if (ageParam <= 18) {
            console.log('12$');
        } else if (ageParam <= 64) {
            console.log('18$');
        } else {
            console.log('12$');
        }
    } else if (dayParam == 'Weekend') {
        if (ageParam <= 18) {
            console.log('15$');
        } else if (ageParam <= 64) {
            console.log('20$');
        } else {
            console.log('15$');
        }
    } else if (dayParam == 'Holiday') {
        if (ageParam <= 18) {
            console.log('5$');
        } else if (ageParam <= 64) {
            console.log('12$');
        } else {
            console.log('10$');
        }
    }
}

solve('Weekday', 42);