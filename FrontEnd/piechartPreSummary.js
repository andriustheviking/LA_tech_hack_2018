google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(piechart1);
      // Draw the pie chart for Sarah's pizza when Charts is loaded.
google.charts.setOnLoadCallback(piechart2);
google.charts.setOnLoadCallback(piechart3);
google.charts.setOnLoadCallback(piechart4);
google.charts.setOnLoadCallback(piechart5);

options = {'title': '',
'width': 350,
'height': 400,
'chartArea': {'width': '100%', 'height': '80%'},
'legend': {'position': 'center'},
 'colors': ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
};

// Callback that draws the pie chart for chart1
      function piechart1() {

        // Create the data table for Sarah's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 1],
          ['Onions', 1],
          ['Olives', 2],
          ['Zucchini', 2],
          ['Pepperoni', 1]
        ]);


        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
        chart.draw(data, options);
      }

// Callback that draws the pie chart for chart1
function piechart2() {

    // Create the data table for Sarah's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 5],
      ['Onions', 5],
      ['Olives', 5],
      ['Zucchini', 5],
      ['Pepperoni', 1]
    ]);

    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart.draw(data, options);
  }


  // Callback that draws the pie chart for chart1
function piechart3() {

    // Create the data table for Sarah's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 5],
      ['Onions', 5],
      ['Olives', 5],
      ['Zucchini', 5],
      ['Pepperoni', 20]
    ]);



    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
    chart.draw(data, options);
  }




    // Callback that draws the pie chart for chart1
function piechart4() {

    // Create the data table for Sarah's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 5],
      ['Onions', 55],
      ['Olives', 5],
      ['Zucchini', 5],
      ['Pepperoni', 20]
    ]);


    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('piechart4'));
    chart.draw(data, options);
  }




      // Callback that draws the pie chart for chart1
function piechart5() {

    // Create the data table for Sarah's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 5],
      ['Onions', 5],
      ['Olives', 15],
      ['Zucchini', 45],
      ['Pepperoni', 20]
    ]);

    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('piechart5'));
    chart.draw(data, options);
  }