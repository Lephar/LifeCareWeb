$(function () {
    "use strict"



	//BAR CHART
    var bar = new Morris.Bar({
      element: 'bar-chart',
      resize: true,
      data: [
        {y: '2006', a: 100, b: 90},
        {y: '2007', a: 75, b: 65},
        {y: '2008', a: 50, b: 40},
        {y: '2009', a: 75, b: 65},
        {y: '2010', a: 50, b: 40},
        {y: '2011', a: 75, b: 65},
        {y: '2012', a: 100, b: 90}
      ],
      barColors: ['#d180fb'],
      xkey: 'y',
      ykeys: ['a'],
      labels: ['CPU'],
      hideHover: 'auto'
    });



    // LINE CHART
	Morris.Area({
        element: 'line-chart-4',
        data: [{
            period: '2010',
            iphone: 40,
            ipad: 150,
            itouch: 250,
	          samsung: 350
        }, {
            period: '2011',
            iphone: 43,
            ipad: 153,
            itouch: 252,
			samsung: 352
        }, {
            period: '2012',
            iphone: 45,
            ipad: 155,
            itouch: 254,
			samsung: 354
        }, {
            period: '2013',
            iphone: 47,
            ipad: 157,
            itouch: 256,
			samsung: 356
        }, {
            period: '2014',
            iphone: 49,
            ipad: 159,
            itouch: 258,
			samsung: 358
        }, {
            period: '2015',
            iphone: 51,
            ipad: 161,
            itouch: 260,
			samsung: 360
        },
         {
            period: '2016',
            iphone: 53,
            ipad: 163,
            itouch: 262,
			samsung: 362
        }],
        xkey: 'period',
        ykeys: ['iphone'],
        labels: ['iPhone'],
        pointSize: 4,
        fillOpacity: 0,
        pointStrokeColors:['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        resize: true

    });






	// LINE CHART
	Morris.Area({
        element: 'line-chart-5',
        data: [{
            period: '2010',
            iphone: 40,
            ipad: 150,
            itouch: 250,
			samsung: 350
        }, {
            period: '2011',
            iphone: 43,
            ipad: 153,
            itouch: 252,
			samsung: 352
        }, {
            period: '2012',
            iphone: 45,
            ipad: 155,
            itouch: 254,
			samsung: 354
        }, {
            period: '2013',
            iphone: 47,
            ipad: 157,
            itouch: 256,
			samsung: 356
        }, {
            period: '2014',
            iphone: 49,
            ipad: 159,
            itouch: 258,
			samsung: 358
        }, {
            period: '2015',
            iphone: 51,
            ipad: 161,
            itouch: 260,
			samsung: 360
        },
         {
            period: '2016',
            iphone: 53,
            ipad: 163,
            itouch: 262,
			samsung: 362
        }],
        xkey: 'period',
        ykeys: ['iphone'],
        labels: ['iPhone'],
        pointSize: 4,
        fillOpacity: 0,
        pointStrokeColors:['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        resize: true

    });






	// LINE CHART
	Morris.Area({
        element: 'line-chart-6',
        data: [{
            period: '2010',
            iphone: 40,
            ipad: 150,
            itouch: 250,
			samsung: 350
        }, {
            period: '2011',
            iphone: 43,
            ipad: 153,
            itouch: 252,
			samsung: 352
        }, {
            period: '2012',
            iphone: 45,
            ipad: 155,
            itouch: 254,
			samsung: 354
        }, {
            period: '2013',
            iphone: 47,
            ipad: 157,
            itouch: 256,
			samsung: 356
        }, {
            period: '2014',
            iphone: 49,
            ipad: 159,
            itouch: 258,
			samsung: 358
        }, {
            period: '2015',
            iphone: 51,
            ipad: 161,
            itouch: 260,
			samsung: 360
        },
         {
            period: '2016',
            iphone: 53,
            ipad: 163,
            itouch: 262,
			samsung: 362
        }],
        xkey: 'period',
        ykeys: ['iphone'],
        labels: ['iPhone'],
        pointSize: 4,
        fillOpacity: 0,
        pointStrokeColors:['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        resize: true

    });






	// LINE CHART
	Morris.Area({
        element: 'line-chart-7',
        data: [{
            period: '2010',
            iphone: 40,
            ipad: 150,
            itouch: 250,
			samsung: 350
        }, {
            period: '2011',
            iphone: 43,
            ipad: 153,
            itouch: 252,
			samsung: 352
        }, {
            period: '2012',
            iphone: 45,
            ipad: 155,
            itouch: 254,
			samsung: 354
        }, {
            period: '2013',
            iphone: 47,
            ipad: 157,
            itouch: 256,
			samsung: 356
        }, {
            period: '2014',
            iphone: 49,
            ipad: 159,
            itouch: 258,
			samsung: 358
        }, {
            period: '2015',
            iphone: 51,
            ipad: 161,
            itouch: 260,
			samsung: 360
        },
         {
            period: '2016',
            iphone: 53,
            ipad: 163,
            itouch: 262,
			samsung: 362
        }],
        xkey: 'period',
        ykeys: ['iphone'],
        labels: ['iPhone'],
        pointSize: 4,
        fillOpacity: 0,
        pointStrokeColors:['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        resize: true

    });






	// LINE CHART
	Morris.Area({
        element: 'line-chart-8',
        data: [{
            period: '2010',
            iphone: 40,
            ipad: 150,
            itouch: 250,
			samsung: 350
        }, {
            period: '2011',
            iphone: 43,
            ipad: 153,
            itouch: 252,
			samsung: 352
        }, {
            period: '2012',
            iphone: 45,
            ipad: 155,
            itouch: 254,
			samsung: 354
        }, {
            period: '2013',
            iphone: 47,
            ipad: 157,
            itouch: 256,
			samsung: 356
        }, {
            period: '2014',
            iphone: 49,
            ipad: 159,
            itouch: 258,
			samsung: 358
        }, {
            period: '2015',
            iphone: 51,
            ipad: 161,
            itouch: 260,
			samsung: 360
        },
         {
            period: '2016',
            iphone: 53,
            ipad: 163,
            itouch: 262,
			samsung: 362
        }],
        xkey: 'period',
        ykeys: ['iphone'],
        labels: ['iPhone'],
        pointSize: 4,
        fillOpacity: 0,
        pointStrokeColors:['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#1cc100', '#fdc006', '#1db4bd', '#909090'],
        resize: true

    });





});
