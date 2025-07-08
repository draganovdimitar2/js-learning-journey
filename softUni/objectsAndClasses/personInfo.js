// Write a function that receives 3 parameters, sets them to an object, and returns that object.
// The input comes as 3 separate strings in the following order: firstName, lastName, age.


function personInfo(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age
    };
}

console.log(personInfo("Peter", 
"Pan",
"20"
));
