let points = 0;
function chartTemp(temp) {
	addData([[points, temp]]);
	points++;
}

// chart stuff

var dataPoints = [];

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light2",
	title: {
		text: "Temperature",
	},
	data: [
		{
			type: "area",
			dataPoints: dataPoints,
		},
	],
});

// Initial Values
var xValue = 0;
var yValue = 10;
var newDataCount = 1;

function addData(data) {
	if (newDataCount != 1) {
		$.each(data, function (key, value) {
			dataPoints.push({ x: value[0], y: parseInt(value[1]) });
			xValue++;
			yValue = parseInt(value[1]);
		});
	} else {
		//dataPoints.shift();
		dataPoints.push({ x: data[0][0], y: parseInt(data[0][1]) });
		xValue++;
		yValue = parseInt(data[0][1]);
	}

	newDataCount = 1;
	chart.render();
}

