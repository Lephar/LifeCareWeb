google.charts.load('current', {
       'packages': ['geochart'],
       // Note: you will need to get a mapsApiKey for your project.
       // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
       'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
     });
     google.charts.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['Country',   'Population', 'Area Percentage'],
        ['France',  65700000, 50],
        ['Germany', 81890000, 27],
        ['Poland',  38540000, 23]
      ]);

      var options = {
        sizeAxis: { minValue: 0, maxValue: 300 },
        region: 'world', // World
        displayMode: 'markers',
        colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
