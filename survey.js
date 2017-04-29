
/*
var myData = new Array(['2005', 2], ['2006', 1], ['2007', 3], ['2008', 6]);
var myChart = new JSChart('chartid', 'bar');
myChart.setDataArray(myData);
myChart.setBarColor('#42aBdB');
myChart.setBarOpacity(0.8);
myChart.setBarBorderColor('#D9EDF7');
myChart.setBarValues(false);
myChart.setTitleColor('#8C8383');
myChart.setAxisColor('#777E81');
myChart.setAxisValuesColor('#777E81');
myChart.draw();
*/
$("#surveyform").submit(function(event){
  event.preventDefault();
  var selected = $(":radio:checked");
  if (selected.length != 6){
    alert("Not completed");
  }
  else{
    $(this).hide();
      var formanswers=$(":radio:checked").map(
        function(){
          return [[
            this.id,
            parseInt(this.value)
          ]]
          
        }
      )
      .toArray();
      drawChart(formanswers);
    $("#results").show();
  }
});


  
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
     // google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart(formanswers) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Questions');
        data.addColumn('number', 'Score');
        data.addRows(formanswers);
          

        // Set chart options
        var options = {'title':'Food Health'
                       };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
      