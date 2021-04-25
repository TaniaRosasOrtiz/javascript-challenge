// from data.js
var tableData = data;

// YOUR CODE HERE!
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");
var form = d3.select("#form-control");

// New UFO row
tableData.forEach(function(newUFO) {
    console.log(newUFO);
    
    // Append row for each new UFO
    var row = tbody.append("tr");

    Object.entries(newUFO).forEach(function([key, value]) {
        console.log(key, value);
        // Append cell at row
        var cell = row.append("td");
        cell.text(value);
      });
});

// Filter
var button = d3.select("#filter-btn");
button.on("click", onClick);

function onClick() {
    d3.event.preventDefault();
    tbody.html("");

    // Select all inputs 
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    // Clear data
    tbody.html('');
    
    // Filter tableData = input
    var filteredData = tableData.filter(tableData => (tableData.datetime == inputDate || inputDate == "")
        && (tableData.city == inputCity || inputCity == "")
        && (tableData.state == inputState || inputState == "")
        && (tableData.country == inputCountry || inputCountry == "")
        && (tableData.shape == inputShape || inputShape == "")
    );
       

    filteredData.forEach((finalData) => {
        // Row
        var row = tbody.append("tr");
        Object.entries(finalData).forEach(([key, value]) => {
            // Append cell at row
            var cell = row.append("td");
            cell.text(value);
        });
        
    });
}