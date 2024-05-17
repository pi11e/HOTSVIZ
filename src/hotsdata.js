
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
            break;
        case "linechart":
            dataSet = generateLineChartDataSet();
            break;
        default:
            break;
    }

    return dataSet;
}

function generateBarChartDataSet()
{
    var barChartData = { labels : [], wins : [], loss : []};

    // read response
    var jsonResponse = JSON.parse(fs.readFileSync('./data/queryForMapStatsResult.json', 'utf-8'));
    Array.from(jsonResponse).forEach(element => 
    {
        barChartData.labels.push(element.game_map);
        barChartData.wins.push(element.total_wins);

        const total_loss = element.total_games - element.total_wins;
        barChartData.loss.push(total_loss);

    });

    console.log(barChartData);
    return barChartData;
}

function generatePieChartDataSet()
{


    // serve and adjust the datasets here
    var pieChartData = { labels : [], data : []};

    // read response
    var jsonResponse = JSON.parse(fs.readFileSync('./data/queryForHeroStatsResult.json', 'utf-8'));
    Array.from(jsonResponse).forEach(element => 
        {
            
            pieChartData.labels.push(element.game_hero);
            
            pieChartData.data.push(element.total_games);
    });

    
    console.log(pieChartData);
    return pieChartData;
}

function generateHeatmapDataSet()
{
    // REAL DATA:
    var jsonResponse = JSON.parse(fs.readFileSync('./data/queryForHeatmapResult.json', 'utf-8'));

    // @TODO: process the real data and return a useful dataset.

    // SAMPLE DATA
    var heatmapData = [
        {x: 'A', y: 'X', v: 11},
        {x: 'A', y: 'Y', v: 12},
        {x: 'A', y: 'Z', v: 13},
        {x: 'B', y: 'X', v: 21},
        {x: 'B', y: 'Y', v: 22},
        {x: 'B', y: 'Z', v: 23},
        {x: 'C', y: 'X', v: 40},
        {x: 'C', y: 'Y', v: 40},
        {x: 'C', y: 'Z', v: 40}
      ];
    // serve and adjust the datasets here
    
    console.log(jsonResponse);
    return heatmapData;
}

function generateLineChartDataSet()
{
    // REAL DATA:
    var jsonResponse = JSON.parse(fs.readFileSync('./data/queryForLineChartResult.json', 'utf-8'));

    // @TODO: process the real data and return a useful dataset.

    // SAMPLE DATA
    // line chart axis labels
    const labels = ["day1", "day2", "day3", "day4"]

    // line chart data
    const lineChartData = {
    labels: labels,
    datasets: [
    {
      label: 'Dataset 1',
      data: [0.54,0.60,0.51,0.42],
      borderColor: 'rgba(0,128,128,0.3)',
    }
  ]
};

    console.log(jsonResponse);
    return lineChartData;
}