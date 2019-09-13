$(function () {
    "use strict";


    //DONUT CHART
    // var donut = new Morris.Donut({
    //   element: 'sales-chart',
    //   resize: true,
    //   colors: ["#2f3d4a", "#1dc130", "#d180fb"],
    //   data: [
    //     {label: "Download Sales", value: 12},
    //     {label: "In-Store Sales", value: 30},
    //     {label: "Mail-Order Sales", value: 20}
    //   ],
    //   hideHover: 'auto'
    // });

    //BAR CHART
    var bar = new Morris.Bar({
      element: 'bar-chartmorris',
      resize: true,
      data: [
        {y: '2006', a: 1, b: 2},
        {y: '2007', a: 1, b: 1},
        {y: '2008', a: 2, b: 1},
        {y: '2009', a: 1, b: 2},
        {y: '2010', a: 0, b: 3},
        {y: '2011', a: 0, b: 2},
        {y: '2012', a: 2, b: 2}
      ],
      barColors: ['#d180fb', '#f4f5f7'],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['CPU', 'DISK'],
      hideHover: 'auto'
    });

	// Extra chart
	 Morris.Area({
		element: 'extra-area-chart',
		data: [{
					period: '2010',
					iphone: 0,
					ipad: 0,
					itouch: 0
				}, {
					period: '2011',
					iphone: 50,
					ipad: 15,
					itouch: 5
				}, {
					period: '2012',
					iphone: 20,
					ipad: 50,
					itouch: 65
				}, {
					period: '2013',
					iphone: 60,
					ipad: 12,
					itouch: 7
				}, {
					period: '2014',
					iphone: 30,
					ipad: 20,
					itouch: 120
				}, {
					period: '2015',
					iphone: 25,
					ipad: 80,
					itouch: 40
				}, {
					period: '2016',
					iphone: 10,
					ipad: 10,
					itouch: 10
				}


				],
				lineColors: ['#1dc130', '#2f3d4a', '#009efb'],
				xkey: 'period',
				ykeys: ['iphone', 'ipad', 'itouch'],
				labels: ['Website A', 'Website B', 'Website C'],
				pointSize: 0,
				lineWidth: 0,
				resize:true,
				fillOpacity: 0.8,
				behaveLikeLine: true,
				gridLineColor: '#e0e0e0',
				hideHover: 'auto'

		});
});
