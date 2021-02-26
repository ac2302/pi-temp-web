var chart = new SmoothieChart({millisPerPixel:100,grid:{strokeStyle:'#000000',borderVisible:false},labels:{precision:6},tooltip:true,timestampFormatter:SmoothieChart.timeFormatter,maxValue:100,minValue:30}),
    canvas = document.getElementById('smoothie-chart'),
    series = new TimeSeries();
    throttle = new TimeSeries();
    critical = new TimeSeries();

chart.addTimeSeries(series, {lineWidth:2,strokeStyle:'#00ff00'});
chart.addTimeSeries(throttle, {lineWidth:0.5,strokeStyle:'#880000'});
chart.addTimeSeries(critical, {lineWidth:0.5,strokeStyle:'#ff0000'});
chart.streamTo(canvas, 0);

function plotTemp(temp) {
	series.append(new Date().getTime(), temp);
	throttle.append(new Date().getTime(), 80);
	critical.append(new Date().getTime(), 85);
}
