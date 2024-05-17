
import * as fs from 'fs';

/*

This script is responsible for generating JSON blobs from a local MySQL database.
It also exposes functions to serve this data so it can be plugged into 
the Chart.js charts used by the visualizer (hotsviz) to render player statistics.

*/




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
    return undefined;
}

function generatePieChartDataSet()
{


    // serve and adjust the datasets here
    var pieChartData = { labels : [], data : []};

    // read response
    var jsonResponse = JSON.parse(fs.readFileSync('./data/response.json', 'utf-8'));
    Array.from(jsonResponse).forEach(element => 
        {
            
            pieChartData.labels.push(element.game_hero);
            
            pieChartData.data.push(element.win_rate);
    });

    console.log("Generated pie chart data set: " + pieChartData)

    return pieChartData;
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



function main()
{
    generatePieChartDataSet();
}


//main();