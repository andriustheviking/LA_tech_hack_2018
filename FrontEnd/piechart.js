google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 8],
    ['Friends', 2],
    ['Eat', 2],
    ['TV', 3],
    ['Gym', 2],
    ['Sleep', 7]
  ]);


  var data2 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 1],
    ['Friends', 1],
    ['Eat', 1],
    ['TV', 1],
    ['Gym', 1],
    ['Sleep', 7]
  ]);
  

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Did Research', 'width':600, 'height':600};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
  chart.draw(data, options);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Title2', 'width':600, 'height':600};
  var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
  chart.draw(data2, options);
}