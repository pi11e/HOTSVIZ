
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

    //console.log("bar chart = " + barChartData);
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

    
    //console.log(pieChartData);
    return pieChartData;
}

function generateHeatmapDataSet()
{
    // REAL DATA:
    var jsonResponse = JSON.parse(fs.readFileSync('./data/queryForHeatmapResult.json', 'utf-8'));

    // @TODO: process the real data and return a useful dataset.

    // assume data consists of an array of one json blob per map where each looks like this:
    // {"game_map" : "Dragon Shire", "Anubarak_winrate" : 0, "Artanis_winrate" : null, "Fenix_winrate" : 0.571428}
    // there are about a dozen of these blobs which are all the same lenght - ie the number of heroes that every played any one map
    // the values of the $heroname_winrate columns can be anywhere between 0-1 as well as null. a null value indicates this hero
    // was never played on that map. 0 = the hero has been played but never won on that map; 1 = the hero has been played and always won on that map
    // (ie won 100% of games on that map)
    
    // how do we get from there to what looks like the sample data below? it's always triples where 
    // x is the "map" coordinate, y is the "hero" coordinate, and v is the winrate of that hero on that map


    var dataFromDB = Array.from(jsonResponse);
    var resultData = [];
    
    
    
    dataFromDB.forEach(row => 
    {
        const mapName = row.game_map;
        
        Object.keys(row).forEach(key => {
          if (key !== 'game_map') {
            resultData.push({
              x: key,  // hero
              y: mapName,  // map
              v: row[key]  // winrate value
            });
          }
        });
      });
      

    // var heatmapData = winrateMatrix;
    console.log("HERE: " + JSON.stringify(resultData));

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
    
    //console.log(jsonResponse);
    //return heatmapData;
    return resultData;
}

function generateLineChartDataSet()
{
    // REAL DATA:
    var jsonResponse = JSON.parse(fs.readFileSync('./data/queryForLineChartResult.json', 'utf-8'));

    // assume data consists of an array of (about 500) json blobs where each looks like this:
    // {game_date : "2024-01-04", winrate_each_day : 0.66667, games_played : 3, games_won : 2, aggregate_winrate : 0.6333}
    // this will contain one entry for each day at least one game was played on, the amount of wins and total games that day,
    // the individual winrate on that day (ie that day's wins divided by total games played) and an accumulated winrate over this
    // and all previous days, i.e. the total amount of wins divided by defeats on and up until that day
    //console.log(jsonResponse);

    const labels = [];
    const winrate_per_day = []; // dataset 1
    const winrate_aggregate = []; // dataset 2

    Array.from(jsonResponse).forEach(element => 
        {
            labels.push(element.game_date);
            winrate_per_day.push(element.winrate_each_day);
            winrate_aggregate.push(element.aggregate_winrate);
    });

    //console.log(labels);

    // line chart data
    const lineChartData = {
    labels: labels,
    datasets: [
    {
      label: 'daily winrate',
      data: winrate_per_day,
      borderColor: 'rgba(0,128,128,0.3)',
    },
    {
        label: 'aggregate winrate',
        data: winrate_aggregate,
        borderColor: 'rgba(255,0,0,0.5)'
    }
  ]
};

    //console.log(jsonResponse);
    return lineChartData;
}