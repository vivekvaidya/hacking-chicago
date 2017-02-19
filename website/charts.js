<script src = "Chart.bundle.js"></script>
<script>
	var myChart = new Chart({})
</script>

<script type = "text/javascript" src = "sampleJSON.json"></script>
<script type = "text/javascript" src = "charts.js"></script>

<canvas id="myChart" width="400" height="400"></canvas>
//Canvas Variable of myChart
var ctx = "myChart";

//check this method
//should get JSON and parse it
//.var data = JSON.parse(sampleJSON);

var myDoughnutChart = new Chart(ctx, {
	type: 'doughnut',
	data:{
	        "labels": ["Resources", "Customers", "Staff", "Other"],
	        "datasets:" [ {
	              //integer array, same size as labels
	              "data": [40, 10, 23, 27],
	              //array of colors
	              "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56", "#00FF00"],
	              "hoverBackgroundColor": ["#FF6384", "#36A2EB", "#FFCE56", "#00FF00"]
	        }]
	    },
	options: options
});
