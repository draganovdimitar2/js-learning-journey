// You’re tasked to create and print objects from a text table. 
// You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!


function townsToJSON(data) {
    for (let row of data) {
        const [town, latitude, longitude] = row.split(' | ').map(x => x.trim());

        const townObj = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };

        console.log(townObj);
    }
}