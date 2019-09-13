$(function () {
    "use strict"
	
	
	

    // LINE CHART
	Morris.Area({
        element: 'line-chart-2',
        data: [{
            period: '2010',
           
			samsung: 350
        }, {
            period: '2011',
           
			samsung: 150
        }, {
            period: '2012',
            
			samsung: 250
        }, {
            period: '2013',
           
			samsung: 320
        }],
        xkey: 'period',
        ykeys: ['samsung'],
        labels: ['samsung'],
        pointSize: 4,
        fillOpacity: 0,
        pointStrokeColors:['#909090'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#909090'],
        resize: true
        
    });
	


   
	
    
	
	
}); 