
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


