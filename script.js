animation: {"startup": true}
function init() {
    var options = {
      width: 400,
      height: 240,
      animation:{
        duration: 1000,
        easing: 'out',
      },
      vAxis: {minValue:0, maxValue:1000}
    };
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'N');
    data.addColumn('number', 'Value');
    data.addRow(['V', 200]);

    var chart = new google.visualization.ColumnChart(
        document.getElementById('visualization'));
    var button = document.getElementById('b1');

    function drawChart() {
      // Disabling the button while the chart is drawing.
      button.disabled = true;
      google.visualization.events.addListener(chart, 'ready',
          function() {
            button.disabled = false;
          });
      chart.draw(data, options);
    }

    button.onclick = function() {
      var newValue = 1000 - data.getValue(0, 1);
      data.setValue(0, 1, newValue);
      drawChart();
    }
    drawChart();
  }


// JAVASCRIPT FOR THE GOOGLE MAP 

 function Map(){
   var coordinates = { lat: -25.363, lng: 131.044};
   var googlemap = new google.maps.Map(document.getElementById("googlemap"), { 
     zoom: 4, 
     center: coordinates });


   }

     async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7_m0Ln15uq2xtuIQj-DX3nwgDkR50yp8&callback=initMap"
  type="text/javascript"

 
