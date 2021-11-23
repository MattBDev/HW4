// Matt Bonanno
// matthew_bonanno <at> student <dot> uml <dot> edu
// UML COMP 4610
var topMin = document.getElementById('topRowMin');
var topMax: HTMLElement = document.getElementById('topRowMax');
var leftColMin: HTMLElement = document.getElementById('leftColMin');
var leftColMax: HTMLElement = document.getElementById('leftColMax');
var form = document.getElementById('form');
var result = document.getElementById('result');

// Prevents the minimum value from being greater than the maximum value
topMin.oninput = function (e) {
    //@ts-ignore
    (topMax as HTMLInputElement).min = e.target.value;
    console.log(e);
}
leftColMin.oninput = function (e) {
    //@ts-ignore
    (leftColMax as HTMLInputElement).min = e.target.value;
    console.log(e);
}

// Event listener for the form
form.onsubmit = (e): void => {
    //Cancel the default action of the form so the page doesn't refresh.
    e.preventDefault();
    //clear any previous results
    result.textContent = '';

    //Start creating the new table.
    // Horiztonal
    let minMultiplier = parseInt(e.target[0].value);
    let maxMultiplier = parseInt(e.target[1].value);
    // Vertical
    let minMultiplicand = parseInt(e.target[2].value);
    let maxMultiplicand = parseInt(e.target[3].value);

    // Check if the values are valid
    if (minMultiplier > maxMultiplier || minMultiplicand > maxMultiplicand) {
        //This will show a dialog box to the user in the worst case scenario.
        //Unless I missed something, this should never happen.
        //Because this should never happen the rule of "NO POPUPS" is still being followed.
        alert('Invalid input. Please try again.');
        return;
    }
    let columns = Math.abs(maxMultiplier - minMultiplier + 1);
    let rows = Math.abs(maxMultiplicand - minMultiplicand);
    // Create the table
    let table = document.createElement('table');
    table.className = 'table table-light table-striped';
    // Create the header
    let header = document.createElement('tr');
    let headerCell = document.createElement('th');
    headerCell.setAttribute('colspan', `${columns + 1}`);
    headerCell.innerHTML = `Multiplication Table`;
    headerCell.style.textAlign = 'center';
    header.appendChild(headerCell);
    table.appendChild(header);
    //Create the columns
    let headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th'));
    for (let i = minMultiplicand; i <= maxMultiplicand; i++) {
        let headerCell = document.createElement('th');
        headerCell.innerHTML = i.toString();
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
    // Create the rows
    for (let i = minMultiplier; i <= maxMultiplier; i++) {
        let row = document.createElement('tr');
        let headerCell = document.createElement('th');
        headerCell.innerHTML = i.toString();
        row.appendChild(headerCell);
        //Create the inner cells
        for (let j = minMultiplicand; j <= maxMultiplicand; j++) {
            let cell = document.createElement('td');
            cell.innerHTML = (i * j).toString();
            cell.style.textAlign = 'center';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    result.appendChild(table);
};