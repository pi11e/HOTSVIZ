/*

This script is responsible for generating JSON blobs from a local MySQL database to be transformed into data that can be plugged into 
the Chart.js charts used by the visualizer (hotsviz) to render player statistics.

*/

function processData()
{
    // create JSON blobs for the various chart types here
}


export function generateDataForChartType(chartType)
{
    console.log("Generating data for chart type " + chartType);

    var dataSet = undefined;

    switch (chartType) {
        case "heatmap":
            // generate & return heat map data
            dataSet = generateHeatmapDataSet();
            break;
        case "piechart":
            dataSet = generatePieChartDataSet();
            break;
        case "barchart":
            dataSet = generateBarChartDataSet();
        default:
            break;
    }

    return dataSet;
}

function generateBarChartDataSet()
{
    
}

function generatePieChartDataSet()
{
    // serve and adjust the datasets here
}

function generateHeatmapDataSet()
{
    // serve and adjust the datasets here
    return [
        {x: 'A', y: 'X', v: 11},
        {x: 'A', y: 'Y', v: 12},
        {x: 'A', y: 'Z', v: 13},
        {x: 'B', y: 'X', v: 21},
        {x: 'B', y: 'Y', v: 22},
        {x: 'B', y: 'Z', v: 23},
        {x: 'C', y: 'X', v: 40},
        {x: 'C', y: 'Y', v: 40},
        {x: 'C', y: 'Z', v: 40}
      ]
}