// Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description.
// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"


function formatGrade(grade) {
    let description;

    if (grade < 3.00) {
        description = "Fail";
        console.log(`${description} (${Math.floor(grade)})`);
    } else if (grade < 3.50) {
        description = "Poor";
        console.log(`${description} (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        description = "Good";
        console.log(`${description} (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        description = "Very good";
        console.log(`${description} (${grade.toFixed(2)})`);
    } else {
        description = "Excellent";
        console.log(`${description} (${grade.toFixed(2)})`);
    }
}
