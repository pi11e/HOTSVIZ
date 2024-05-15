import Chart from 'chart.js/auto';
import { create } from 'domain';
import * as fs from'fs';
import * as mysql from 'mysql';
import * as util from 'util';

import Chart from 'chart.js/auto';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';


/*
function accumulateWinsForHeroOnMap(hero, map)
{
  let heroes = getHeroes();
  let maps = getMaps();
  

  heroes.forEach(hero => 
    {
      maps.forEach(map =>{
        heatMap.increaseWinrateForHeroOnMap(hero, map);
      });
    
  });
}*/



/* PSEUDOCODE
function generateHeatMapDataset()
{
  //imagine a two-dimensional datastructure (eg matrix) where the keys are a pair of hero_map combination and the value is the winrate
  // of that hero on that map as defined by # of wins divided by # of games.

  var games = [];
  var totalGames = games.length;
  

  //loop over every game (this is pseudocode for now)
  games.forEach(game => 
    {
      var hero = game.hero;
      var map = game.map;
      var isWinner = game.winner;

      if(isWinner)
        {
          // check if we already have a record for the hero,map vector - if so, update its winrate value. otherwise, initialise it.
          if()
        }

  });
}*/

/* DELETE THIS OR REWRITE THE VARIABLE NAME
function hasWinrateForHeroOnMap(hero,map)
{
  const key = `${x}_${y}`;
  return heatMap.has(key);
}

function getWinrateForHeroOnMap(hero, map)
{
  const key = `${x}_${y}`;
  return heatMap.get(key);
}

function setWinrateForHeroOnMap(hero,map,winrate)
{
  const key = `${x}_${y}`;
  heatMap.set(key, winrate);
}
*/
(async function() 
{

  
  


  var jsonData = JSON.parse(fs.readFileSync('./data/gameData.json', 'utf-8'));

  //console.log("test");
  //console.log(jsonData);
  
  // lets build a new array that contains the map name and number of wins on it
  const defeatPerMap = new Map(); // key = map, value = # of losses on that map
  const winsPerMap = new Map(); // key = map, value = # of wins on that map
  var globalWins = 0;

  const heroWins = new Map(); // holds all hero names that appear in the dataset

  const heroPerformanceForMap = new Map(); // keys are all the maps, value per hero is an object with hero name : wins on the map
  const mapPerformanceForHero = new Map(); // keys are all the heroes, values is an object with map name : wins on the map

  
  
  for(var i = 0; i < jsonData.length; i++)
  {
    var uniqueGame = jsonData[i];

    // skip non-storm league games
    if(uniqueGame.game_mode != 'stormLeague') continue;

    var gameMap = uniqueGame.game_map;
    var gameHero = uniqueGame.game_hero;
    
    const mapWinsForHero = new Map(); 
    const heroWinsForMap = new Map();

    mapWinsForHero.set(gameHero, 0);
    heroWinsForMap.set(gameMap, 0);
  

    if(!defeatPerMap.has(gameMap)) defeatPerMap.set(gameMap, 0); 
    if(!winsPerMap.has(gameMap)) winsPerMap.set(gameMap, 0);
    if(!heroWins.has(gameHero)) heroWins.set(gameHero,0);

    // unfinished: imagine a matrix where (x,y) = (hero,map) = winrate of that hero on this map
    //if(!heroPerformanceForMap.has(gameMap)) heroPerformanceForMap.set(gameMap, new Map().set(gameHero,0));
    //if(!mapPerformanceForHero.has(gameHero)) mapPerformanceForHero.set(gameHero, new Map().set(gameMap, 0));
    // or like this
    // const heatmap = {heroName : gameHero, map : gameMap, wins++};
    // if we're winning, get the hero/map we're on and increase the wincount
    // if (game_winner) 
    //  var currentWinsOfHeroOnMap = heroPerformanceForMap.get(gameMap).get(gameHero)
    //  currentWinsOfHeroOnMap++;
    // heroPerformanceForMap.set(gameMap).set(gameHero, currentWinsOfHeroOnMap);
    //  var currentWinsOnMapForHero = mapPerformanceForHero.get(gameHero).get(gameMap)
    //  currentWinsOfHeroOnMap++;
    //  mapPerformanceForHero.set(gameHero).set(gameMap, currentWinsOfHeroOnMap)

    var winsPerHero = heroWins.get(uniqueGame.game_hero);


    // increase total games
    //var totalGames = new Number(defeatPerMap.get(gameMap));
    //totalGames++;
    //defeatPerMap.set(gameMap, totalGames);

    // increase total wins
    if(uniqueGame.game_winner)
    {
      var totalWins = new Number(winsPerMap.get(gameMap));
      totalWins++; 
      globalWins++;
      winsPerMap.set(gameMap, totalWins);

      winsPerHero++;
      heroWins.set(uniqueGame.game_hero, winsPerHero);
      
    }
    else
    {
      var totalDefeats = new Number(defeatPerMap.get(gameMap));
      totalDefeats++;
      defeatPerMap.set(gameMap, totalDefeats);
      
    }
      

    

    //console.log(heroPerformancePerMap);
  };


  // create datasets to use here
  
  var lossData = Array.from(defeatPerMap.values());
  var winData = Array.from(winsPerMap.values());
  
  var xAxisLabels = Array.from(defeatPerMap.keys());

  

  // now make the charts
  const totalGames = lossData.concat(winData).reduce((a,b)=>a+b);
  const winRate = Math.round(globalWins/totalGames*100)/100;
  //const totalGames = totalDefeats + totalWins;


  new Chart(
    document.getElementById('barchart'),
    {
      type: 'bar',
      data: {
        labels: xAxisLabels,
        datasets: [
          {
            label: 'Loss',
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
            text: 'Winrate for last '+totalGames+' games: ' + winRate*100 + "%" 
          }
        },
        responsive: true,
        scales:{
          x: { stacked: true},y: { stacked: true}
        }
      }
    }
  );


  

  new Chart(
    document.getElementById('piechart'),
    {
        type: 'doughnut',
        data: {
            labels: Array.from(heroWins.keys()),
            datasets: [
                {
                    label: 'Games',
                    data: Array.from(heroWins.values())
                }
            ]
        }

});

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

example for providing tree instead of data:

const data = [
  {category: 'main', value: 1},
  {category: 'main', value: 2},
  {category: 'main', value: 3},
  {category: 'other', value: 4},
  {category: 'other', value: 5},
];

config = {
  ...
  data: {
    datasets: [{
      ...
      tree : data,
      ...
    }]
  }
}
*/


const heatmapdata = [{x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}] // replace with proper dataset from DB or JSON file

// @TODO try providing data via the tree propery - for some reason this doesn't seem to work
/*
const heatmapdata = [
  {category: 'main', value: 1},
  {category: 'main', value: 2},
  {category: 'main', value: 3},
  {category: 'other', value: 4},
  {category: 'other', value: 5},
];
*/

const config = {
    type: 'matrix',
    data: {
      datasets: [{
        label: 'Winrate per hero per map',
        data: heatmapdata,
        //tree : heatmapdata, // for some reason this doesn't seem to work - @TODO
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(0,128,128,0.3)',
        width: ({chart}) => (chart.chartArea || {}).width / 2 - 1,
        height: ({chart}) => (chart.chartArea || {}).height / 2 - 1,
      }],
    },
    options: {
      scales: {
        x: {
          display: false,
          min: 0.5,
          max: 2.5,
          offset: false
        },
        y: {
          display: false,
          min: 0.5,
          max: 2.5
        }
      }
    }
  };
  
  new Chart(
    document.getElementById('heatmap'),
    config
  )

})();