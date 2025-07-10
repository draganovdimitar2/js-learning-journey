// Write a function that:
// •	Records a car number for every car that enters the parking lot
// •	Removes a car number when the car goes out
// •	Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".


function piccolo(arr) {
    let parking = new Set();
    for (const str of arr) {
        let [direction, carNumber] = str.split(', ');
        if (direction == 'IN') {
            parking.add(carNumber);
        } else {
            parking.delete(carNumber);
        }
    }
    if (parking.size == 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sorted = Array.from(parking).sort((a, b) => a.localeCompare(b));
        sorted.forEach((plate) => console.log(plate));
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);