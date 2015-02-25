var chart;

AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.pathToImages = "/public/amcharts/images/";
    chart.categoryField = "hour";

    // AXES
    // category
    var categoryAxis = chart.categoryAxis;
    //categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
    categoryAxis.minPeriod = "DD"; // our data is daily, so we set minPeriod to DD
    categoryAxis.minorGridEnabled = true;
    categoryAxis.axisColor = "#DADADA";
    categoryAxis.twoLineMode = true;

    // first value axis (on the left)
    var valueAxis1 = new AmCharts.ValueAxis();
    valueAxis1.axisColor = "#FF6600";
    valueAxis1.axisThickness = 2;
    valueAxis1.gridAlpha = 0;
    chart.addValueAxis(valueAxis1);

    // second value axis (on the right)
    var valueAxis2 = new AmCharts.ValueAxis();
    valueAxis2.position = "right"; // this line makes the axis to appear on the right
    valueAxis2.axisColor = "#FCD202";
    valueAxis2.gridAlpha = 0;
    valueAxis2.axisThickness = 2;
    chart.addValueAxis(valueAxis2);

    // GRAPHS
    // first graph
    var graph1 = new AmCharts.AmGraph();
    graph1.valueAxis = valueAxis1; // we have to indicate which value axis should be used
    graph1.title = "inside";
    graph1.valueField = "inside";
    graph1.bullet = "round";
    graph1.hideBulletsCount = 30;
    graph1.bulletBorderThickness = 1;
    chart.addGraph(graph1);

    // second graph
    var graph2 = new AmCharts.AmGraph();
    graph2.valueAxis = valueAxis1;
    graph2.title = "outside";
    graph2.valueField = "outside";
    graph2.bullet = "square";
    graph2.hideBulletsCount = 30;
    graph2.bulletBorderThickness = 1;
    chart.addGraph(graph2);

    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorAlpha = 0.1;
    chartCursor.fullWidth = true;
    chart.addChartCursor(chartCursor);

    // LEGEND
    var legend = new AmCharts.AmLegend();
    legend.marginLeft = 110;
    legend.useGraphSettings = true;
    chart.addLegend(legend);

    // WRITE
    chart.write("chartDiv");
});