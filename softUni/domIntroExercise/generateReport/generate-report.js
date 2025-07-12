// You will be given a web page, containing a table and output area. 

// When the "Generate Report" button is pressed:
// •	You must generate a JSON report from the data inside the table, by only taking the columns, which are selected.
// Each table header has a checkbox. If the checkbox is checked, then the data from this column must be included in the report. Unchecked columns must be omitted. 

// For every row (excluding the header):
// •	Create an object with properties for each of its columns.
// •	The name of each property is the name attribute of the column’s header, and the value is the text content of the cell.
// •	Store the result in an array and output it as a JSON string display it inside the <textarea> with id "output". See the example for details.

// Input / Output
// There will be input, your program must execute based on the page content. The output must be a JSON string, displayed in the <textarea> with id "output".



function solve() {
    const table = document.querySelector("table");
    const output = document.getElementById("output");

    const headerCells = Array.from(table.querySelectorAll("thead th"));
    const selectedColumns = [];

    headerCells.forEach((th, index) => {
        const checkbox = th.querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            selectedColumns.push({
                name: checkbox.name,
                index: index
            });
        }
    });

    const rows = Array.from(table.querySelectorAll("tbody tr"));
    const result = [];

    for (const row of rows) {
        const cells = Array.from(row.children);
        const obj = {};
        for (const col of selectedColumns) {
            obj[col.name] = cells[col.index].textContent.trim();
        }
        result.push(obj);
    }

    const joined = result.map(obj => JSON.stringify(obj)).join(',');
    output.value = `[${joined}]`;
}
