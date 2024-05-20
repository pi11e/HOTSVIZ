/*

hotsvis.jz
This script is responsible for creating charts on a given canvas element (specified in index.html) and assigning relevant
options and data to them. 

*/

import Chart from 'chart.js/auto';
import { create } from 'domain';
import * as fs from'fs';
import * as mysql from 'mysql';
import * as util from 'util';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';

import * as hotsdata from './hotsdata.js'

(async function() 
{

  
  


  var jsonData = JSON.parse(fs.readFileSync('./data/gameData.json', 'utf-8'));

  // BEGIN BAR CHART

  
  

  // now we ignore all of the above and create the data from SQL instead.
  // we need a labels[] that contains all the map names
  // we need a wins[] and losses[] that contain the total wins / losses for the map
  let barChartData = hotsdata.generateDataForChartType("barchart");

  console.log(barChartData);

  let lossData = barChartData.loss;
  let winData = barChartData.wins;

  const totalGames = lossData.concat(winData).reduce((partialSum, a) => partialSum + a, 0);
  const totalWins = winData.reduce((partialSum, a) => partialSum + a, 0);

  const winRate = Math.round(totalWins *10000 / totalGames) / 100;

  new Chart(
    document.getElementById('barchart'),
    {
      type: 'bar',
      data: {
        labels: barChartData.labels,//xAxisLabels,
        datasets: [
          {
            label: 'Defeat',
            data: lossData,
            backgroundColor: 'rgb(255, 99, 132)' //red
          },
          {
            label: 'Win',
            data: winData,
            backgroundColor: 'rgb(75, 192, 192)' // green
          }
        ]
      },
      options :{
        plugins: {
          title : {
            display: true,
            text: 'Winrate over the last '+totalGames+' ranked games: ' + winRate + "%" 
          }
        },
        responsive: true,
        scales:{
          x: { stacked: true},y: { stacked: true}
        }
      }
    }
  );

  // END BAR CHART

  // BEGIN PIE CHART
  //console.log(Array.from(heroWins.keys()));  
  //console.log(Array.from(heroWins.values()));

  let pieChartData = hotsdata.generateDataForChartType("piechart");

  new Chart(
    document.getElementById('piechart'),
    {
        type: 'doughnut',
        data: {
            labels: pieChartData.labels, // array[36] = ["Raynor", "Tracer", ...]
            datasets: [
                {
                    label: 'Games',
                    data: pieChartData.data // array[36] = [4,35,...]
                }
            ]
        }, 
        options :{
          plugins: {
            title : {
              display: true,
              text: "Total ranked games per hero"
            }
          }}

});

// END PIE CHART

// BEGIN HEATMAP

//this registers the MatrixController and MatrixElement plugins
Chart.register(MatrixController, MatrixElement);

/*
Usage:
https://chartjs-chart-matrix.pages.dev/usage.html

Tree data should be provided in tree property of dataset. 
data is then automatically build. 
key defines the key name in data objects to use for value. 
groups array can be provided to display multiple levels of hierarchy. 
Data is summarized to groups internally.

Samples:
https://github.com/kurkle/chartjs-chart-matrix/tree/main/docs/samples

example for providing tree instead of data:

*/

var tealColor = 'rgba(0,128,128,0.3)';

// testing: get the data from hotsdata.js
var heatmapData = hotsdata.generateDataForChartType("heatmap");


const data = {
  datasets: [{
    label: 'Hero winrate heatmap',
    data: heatmapData,
    backgroundColor(context) {
      const value = context.dataset.data[context.dataIndex].v;
      const alpha = (value - 5) / 40;
      return tealColor;
    },
    borderColor(context) {
      const value = context.dataset.data[context.dataIndex].v;
      const alpha = (value - 5) / 40;
      return tealColor;
    },
    borderWidth: 1,
    width: ({chart}) => (chart.chartArea || {}).width / 2,
    height: ({chart}) =>(chart.chartArea || {}).height / 2
  }]
};

console.log(data);


const config = {
  type: 'matrix',
  data: data,
  options: {
    plugins: {
      legend: false,
      tooltip: {
        callbacks: {
          title() {
            return '';
          },
          label(context) {
            const v = context.dataset.data[context.dataIndex];
            return ['x: ' + v.x, 'y: ' + v.y, 'v: ' + v.v];
          }
        }
      }
    },
    scales: {
      x: {
        type: 'category',
        //labels: ['A', 'B', 'C'], // this should be the heroes
        labels: ['Anubarak', 'Artanis', 'Blaze', 'Fenix'],
        ticks: {
          display: true
        },
        grid: {
          display: false
        }
      },
      y: {
        type: 'category',
        //labels: ['X', 'Y', 'Z'], // this should be the maps
        labels: ["Braxis Holdout", "Battlefield of Eternity", "Volskaya Foundry", "Dragon Shire"],
        offset: true,
        ticks: {
          display: true
        },
        grid: {
          display: false
        }
      }
    }
  }
};



  new Chart(
    document.getElementById('heatmap'),
    config
  )

// END HEATMAP

// BEGIN LINE CHART - indicating winrate over time
let lineChartData = hotsdata.generateDataForChartType('linechart');

const lineChartConfig = {
  type: 'line',
  data: lineChartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },
};



new Chart(document.getElementById('linechart'), lineChartConfig);
// END LINECHART

})();