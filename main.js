// Matt Bonanno
// matthew_bonanno <at> student <dot> uml <dot> edu
// UML COMP 4610
var topMin = document.getElementById('topRowMin');
var topMax = document.getElementById('topRowMax');
var leftColMin = document.getElementById('leftColMin');
var leftColMax = document.getElementById('leftColMax');
var form = document.getElementById('form');
var result = document.getElementById('result');
// Prevents the minimum value from being greater than the maximum value
topMin.oninput = function (e) {
    //@ts-ignore
    topMax.min = e.target.value;
    console.log(e);
};
leftColMin.oninput = function (e) {
    //@ts-ignore
    leftColMax.min = e.target.value;
    console.log(e);
};
// Event listener for the form
form.onsubmit = function (e) {
    //Cancel the default action of the form so the page doesn't refresh.
    e.preventDefault();
    //clear any previous results
    result.textContent = '';
    //Start creating the new table.
    // Horiztonal
    var minMultiplier = parseInt(e.target[0].value);
    var maxMultiplier = parseInt(e.target[1].value);
    // Vertical
    var minMultiplicand = parseInt(e.target[2].value);
    var maxMultiplicand = parseInt(e.target[3].value);
    // Check if the values are valid
    if (minMultiplier > maxMultiplier || minMultiplicand > maxMultiplicand) {
        //This will show a dialog box to the user in the worst case scenario.
        //Unless I missed something, this should never happen.
        //Because this should never happen the rule of "NO POPUPS" is still being followed.
        alert('Invalid input. Please try again.');
        return;
    }
    var columns = Math.abs(maxMultiplier - minMultiplier + 1);
    var rows = Math.abs(maxMultiplicand - minMultiplicand);
    // Create the table
    var table = document.createElement('table');
    table.className = 'table table-light table-striped';
    // Create the header
    var header = document.createElement('tr');
    var headerCell = document.createElement('th');
    headerCell.setAttribute('colspan', "" + (columns + 1));
    headerCell.innerHTML = "Multiplication Table";
    headerCell.style.textAlign = 'center';
    header.appendChild(headerCell);
    table.appendChild(header);
    //Create the columns
    var headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th'));
    for (var i = minMultiplicand; i <= maxMultiplicand; i++) {
        var headerCell_1 = document.createElement('th');
        headerCell_1.innerHTML = i.toString();
        headerRow.appendChild(headerCell_1);
    }
    table.appendChild(headerRow);
    // Create the rows
    for (var i = minMultiplier; i <= maxMultiplier; i++) {
        var row = document.createElement('tr');
        var headerCell_2 = document.createElement('th');
        headerCell_2.innerHTML = i.toString();
        row.appendChild(headerCell_2);
        //Create the inner cells
        for (var j = minMultiplicand; j <= maxMultiplicand; j++) {
            var cell = document.createElement('td');
            cell.innerHTML = (i * j).toString();
            cell.style.textAlign = 'center';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    result.appendChild(table);
};
