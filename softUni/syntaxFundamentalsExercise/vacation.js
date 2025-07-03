// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.
// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order.


function solve(personCount, ticketType, weekdey) {
    const priceTable = {
        Students: {Friday: 8.45, Saturday: 9.80, Sunday: 10.46},  // price for single person
        Business: {Friday: 10.9, Saturday: 15.6, Sunday: 16},
        Regular: {Friday: 15, Saturday: 20, Sunday: 22.5}
    };

    let currentPrice = priceTable[ticketType][weekdey];
    let totalPrice = currentPrice * personCount;

    if (ticketType == 'Students' && personCount >= 30) {
        totalPrice -= 0.15 * totalPrice;
    } else if (ticketType == 'Business' && personCount >= 100) {
        totalPrice -= 10 * currentPrice;
    } else if (ticketType == 'Regular' && (personCount >= 10  && personCount <= 20)) {
        totalPrice -= 0.05 * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30,
"Students",
"Sunday"
);

solve(40,
"Regular",
"Saturday"
);