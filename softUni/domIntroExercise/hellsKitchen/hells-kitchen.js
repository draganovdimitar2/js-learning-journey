// You will be given an array of strings, which represents a list of all the restaurants with their workers.

// When the [Send] button is clicked:
// •	Display the best restaurant of all the added restaurants with its average salary and best salary. 
// •	If there is a restaurant in the input array that is added more than once, you need to add new workers to the old ones and update the values of the average salary and the best salary.
// •	The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.
// •	Display all workers in the best restaurant with their salaries.
// The best restaurant's workers should be sorted by their salaries in descending order.


// Input
// The input will be received from the given textarea in the form of an array of strings. Each string represents a restaurant with its workers: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]

// Output
// •	The output contains two strings
// o	The first one is the best restaurant in the format:
// `Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
// avgSalary and bestSalary must be formatted to the second decimal point.
// o	The second one is all the workers in that restaurant in the following format:
// `Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`


function solve() {
    const textareaEl = document.querySelector('textarea');
    const bestRestaurantPEl = document.querySelector('#bestRestaurant p');
    const workersPEl = document.querySelector('#workers p');

    const JSONTextInput = textareaEl.value;
    const text = JSON.parse(JSONTextInput);
    let restaurants = {};
    
    for (const entry of text) {
        const [restaurantName, workersStr] = entry.split(' - ');
        const workersArr = workersStr.split(', ');

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = [];
        }

        for (const worker of workersArr) {
            const [name, salaryStr] = worker.split(' ');
            const salary = Number(salaryStr);
            restaurants[restaurantName].push({ name, salary });
        }
    }

    let bestRestaurant = '';
    let bestAvgSalary = 0;

    const entries = Object.entries(restaurants);
    for (const [restaurantName, workersArr] of entries) {
        const workersSalaries = workersArr.map(worker => worker.salary);
        const avgSalary = workersSalaries.reduce((acc, val) => acc + val) / workersSalaries.length;  // there will always be workers
        
        if (avgSalary > bestAvgSalary) {
            bestRestaurant = restaurantName;
            bestAvgSalary = avgSalary;
        }
    }

    const bestWorkers = restaurants[bestRestaurant].sort((a, b) => b.salary - a.salary);
    const bestSalary = bestWorkers[0].salary;

    bestRestaurantPEl.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    for (const {name, salary} of bestWorkers) {
        workersPEl.textContent += `Name: ${name} With Salary: ${salary} `;
    }
}
