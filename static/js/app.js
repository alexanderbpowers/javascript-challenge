var tbody = d3.select("tbody");

function buildTable(arr) {
    tbody.html("");
  arr.forEach(function (alien) {
    var row = tbody.append("tr");
    Object.entries(alien).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

buildTable(data);

function filterTable() {
  tbody.html("");
  var inputDate = d3.select("#datetime").property("value");

  var filteredData = data.filter(alien => alien.datetime == inputDate)

  buildTable(filteredData);
}



var button = d3.select("#filter-btn");

button.on("click", filterTable);



// I recommend utilizing a for loop.
// map all the entries to an object

// var myObj = {'city':'benton', 'datetime': '1999-09-19'}

// Run a filter for each entry On the object
// Have an array outside of the for loop That you set the result to 
// And filter upon multiple iterations


  // var inputCity = d3.select("#city").property("value");
  // var inputState = d3.select("#state").property("value");
  // var inputCountry = d3.select("#dropdownCountry").property("value");
  // var inputShape = d3.select("#dropdownShape").property("value");

  // var myObj = {'city':'benton', 'datetime': '1999-09-19'}