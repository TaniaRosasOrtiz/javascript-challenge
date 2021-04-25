// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

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

button.on("click", function(event) {
    d3.event.preventDefault();
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    // Filter tableData = input
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selectDate) {
        console.log(selectDate);

        // Row
        var row = tbody.append("tr");
        Object.entries(selectDate).forEach(function([key, value]) {
            console.log(key, value);
            // Append cell at row
            var cell = row.append("td");
            cell.text(value);
          });
        
    });
});