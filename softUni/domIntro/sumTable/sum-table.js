// Write a JS function that finds the first table in a document and sums the values in the last column. The result is then displayed in an element with ID "sum".
// Input / Output
// There will be no input / output, your program should instead modify the DOM of the given HTML document.



function sumTable() {
    const tdPrices = document.querySelectorAll('tbody tr td:nth-child(2)');
    let totalSum = 0;

    tdPrices.forEach((price) => {
        totalSum += Number(price.innerHTML);
    });
    
    document.getElementById('sum').textContent = totalSum;
}