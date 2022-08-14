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
  var inputCity = d3.select("#city").property("value");
  var filter = {datetime: inputDate, city: inputCity};
  var mydata = data

  Object.entries(filter).forEach(
  (([key,value]) => {
    mydata = mydata.filter(row => {
      row[key] == value
    })
  })
  );
  console.log(mydata)
  console.log(inputCity)
  console.log(inputDate)
  buildTable(mydata)
};


var button = d3.select("#filter-btn");
button.on("click", filterTable);