// Write a function that stores information about a person’s name and phone number. 
// The input is an array of strings with space-separated name and number. 
// Replace duplicate names. Print the result as shown.

function phoneBook(arr) {
    let phoneBook = {};
    for (let data of arr) {
        let [name, phone] = data.split(' ');
        phoneBook[name] = phone;
    }
    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

phoneBook(
    ['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
);