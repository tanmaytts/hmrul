function calculate() {
	//calculate age in age
	var x = document.getElementById("define").value;
	var age = 2021-x;
	
	//display calculated data
	document.querySelector('#age_teller').innerHTML = `You are ${age} years old <br> Assuming you'll live 100 years, you have`

	var left = 100-age;
	var weeks = left*52;
	var days = weeks*7;
	var hours = days*24;
	var seconds = hours*60;

	document.querySelector('#left_teller').innerHTML = `${left} YEARS or <br> ${weeks} WEEKS or <br> ${days} DAYS or <br> ${hours} HOURS or<br>${seconds} SECONDS left`

	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Left', 'Age'],
          ['Left',  left],
          ['Age',   age]
          ]);

        var options = {
          title: 'Visualization'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
      var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Visualization of Age"
	},
	axisX: {
		valueFormatString: ""
	},
	axisY: {
		prefix: ""
	},
	toolTip: {
		shared: true
	},
	legend:{
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "stackedBar",
		name: "Lived",
		showInLegend: "true",
		xValueFormatString: "Age Lived",
		yValueFormatString: "",
		dataPoints: [
			{ y: age }
		]
	},{
		type: "stackedBar",
		name: "Total",
		showInLegend: "true",
		xValueFormatString: "Total age",
		yValueFormatString: "",
		dataPoints: [
			{y:left}
			
		]
	}
	]
});
chart.render();

function toggleDataSeries(e) {
	if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}



}