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

// function filterTable() {
//   tbody.html("");
//   var inputDate = d3.select("#datetime").property("value");

//   var filteredData = data.filter(alien => alien.datetime == inputDate)

//   buildTable(filteredData);
// }

function filterTable() {
  tbody.html("");
  var inputDate = d3.select("#datetime").property("value");
  
}


function filterTable() {
  tbody.html("");
  var inputDate = d3.select("#datetime").property("value");

  var filteredData = data.filter(alien => alien.datetime == inputDate)

  buildTable(filteredData);
}



var button = d3.select("#filter-btn");

button.on("click", filterTable);