$("#surveyform").submit(function(event){
  event.preventDefault();
  var selected = $(":radio:checked");
  if (selected.length != 7){
    alert("Not completed");
  }
  else{
    $(this).hide();
      var formanswers=$(":radio:checked").map(
        function(){
          return [[
            $(this).parents(".QuestionBlock").find(".header").get(0).textContent,
            parseFloat(this.value)
          ]]
          
        }
      )
      .toArray();
    $("#results").show();
       drawChart(formanswers);

  }
});
 

  
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      //google.charts.setOnLoadCallback(drawChart);

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
        var options = {'title':'Food Health',
                         width: "100%",
                         height: "100%",
                         margin: "0",
                         border: "none"
          
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
      