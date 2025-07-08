// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.


function convertToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(obj));
}

convertToJSON("Ivan", "Ivanov", "Black");