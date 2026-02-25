const tableBody = document.getElementById("tableBody");
let idCounter = 1;

/* ---------------- CSV UPLOAD ---------------- */

document.getElementById("csvFile").addEventListener("change", function(e) {

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(event) {

        const text = event.target.result.trim();
        const lines = text.split("\n");

        // Skip header row
        for (let i = 1; i < lines.length; i++) {

            // Proper CSV parsing (handles quotes)
            const rowData = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

            if (!rowData) continue;

            addRow(rowData);
        }
    };

    reader.readAsText(file);
});

/* ---------------- ADD ROW FUNCTION ---------------- */

function addRow(data) {

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${idCounter++}</td>
        ${data.map(value => `<td>${value.replace(/"/g, "")}</td>`).join("")}
    `;

    tableBody.appendChild(row);
}

/* ---------------- FORM SUBMIT ---------------- */

const form = document.getElementById("recordForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Collect all inputs automatically
    const inputs = form.querySelectorAll("input, select");
    let values = [];

    inputs.forEach(input => {
        values.push(input.value);
    });

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>New</td>
        ${values.map(v => `<td>${v}</td>`).join("")}
    `;

    tableBody.appendChild(row);

    form.reset();
});
