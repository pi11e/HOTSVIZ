//https://www.w3schools.com/nodejs/nodejs_mysql.asp
//import mysql from 'mysql2/promise';
import mysql from 'mysql';
import * as fs from 'fs';
import * as path from 'path';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


var username = "root";
var password = "123456789";

var uniqueGamesJSON = [];

var _globalPool = undefined;

const replayFilePath = fs.readFileSync("./data/data_path.cfg", "utf-8");


const queryForHeroStats = "SELECT game_hero, COUNT(*) AS total_games, SUM(CASE WHEN game_winner = 1 THEN 1 ELSE 0 END) AS total_wins, CAST(SUM(CASE WHEN game_winner = 1 THEN 1 ELSE 0 END) AS FLOAT) / COUNT(*) AS win_rate FROM uniqueGames WHERE game_mode = 'stormLeague' GROUP BY game_hero ORDER BY total_games DESC LIMIT 0, 1000";
const queryForMapStats = "SELECT game_map, COUNT(*) AS total_games, SUM(CASE WHEN game_winner = 1 THEN 1 ELSE 0 END) AS total_wins, CAST(SUM(CASE WHEN game_winner = 1 THEN 1 ELSE 0 END) AS FLOAT) / COUNT(*) AS win_rate FROM uniqueGames WHERE game_mode = 'stormLeague' GROUP BY game_map ORDER BY game_map LIMIT 0, 1000";
const queryForRankedHeroes = "SELECT DISTINCT game_hero FROM uniqueGames WHERE game_mode = 'stormLeague'";
const queryForRankedMaps = "SELECT DISTINCT game_map FROM uniqueGames WHERE game_mode = 'stormLeague'";
const queryForPartyWinrate = "SELECT game_winner, game_players FROM uniqueGames";
const queryForHeatmap = fs.readFileSync('./data/heatmapquery.cfg', 'utf-8'); 
const queryForLineChart = fs.readFileSync('./data/linechartquery.cfg', 'utf-8');
const queryForNestedMap = fs.readFileSync('./data/nestedmapquery.cfg', 'utf-8');








//TODO - use connection pool when running out of connections which happens as soon as you compile due to 500 connections being opened
//var persistentConnection = undefined;


/* 
function createConnection(){
    var con =  mysql.createConnection({
        host: "localhost",
        user: username,
        password: password,
        database: "games"
      });
    
    
    return con;
}
 */

function serializeQuery(queryResult, filename)
{
    // create JSON blobs for the various chart types here

    // Step 1: Take incoming query result and form a JSON string

    // Step 2: Write JSON string as file of the given filename
    // filename expects something like 'abc.json'
    const filepath = './data/'+filename;
    console.log("serializing JSON: "+JSON.stringify(queryResult));
    fs.writeFileSync(filepath, JSON.stringify(queryResult));
}

function openConnection(){
  
  if(_globalPool == undefined)
    {
      _globalPool = mysql.createPool({
        host: "localhost",
        user: username,
        password: password,
        database: "games"
      });
    }
  
  
  
  return _globalPool;
}


function handleResultset (err, result) {
  var i, len;
  if (err) 
    {
    if(err.code == 'ER_DATA_TOO_LONG')
      {
        console.log("ERROR: data exceeding max length")
        
      }
      else{
        throw err;
      }
      
  }
  len = result.length;
  
  console.log("query successful.");
  

}

function handleResultsetAndSerialize (err, result) {
  
  if (err) 
    {
    if(err.code == 'ER_DATA_TOO_LONG')
      {
        console.log("ERROR: data exceeding max length")
        
      }
      else{
        throw err;
      }
      
  }

  var filename = undefined;
  this.sql == queryForHeroStats ? filename = "queryForHeroStatsResult.json" : undefined;
  this.sql == queryForMapStats ? filename = "queryForMapStatsResult.json" : undefined;
  this.sql == queryForHeatmap ? filename = "queryForHeatmapResult.json" : undefined;
  this.sql == queryForLineChart ? filename = "queryForLineChartResult.json" : undefined;
  this.sql == queryForRankedHeroes ? filename = "queryForRankedHeroesResult.json" : undefined;
  this.sql == queryForRankedMaps ? filename = "queryForRankedMapsResult.json" : undefined;
  this.sql == queryForNestedMap ? filename = "queryForNestedMapResult.json" : undefined;
  this.sql == queryForPartyWinrate ? filename = "queryForPartyWinrateResult.json" : undefined;

  serializeQuery(result,filename);
  
  

}

// OLD queryDatabase (using mysql)
// async function queryDatabase(queryString)
// {
//   /* 
//   var con =  mysql.createConnection({
//     host: "localhost",
//     user: username,
//     password: password,
//     database: "games"
//   }); */
//   let con = openConnection();

//   await sleep(1000);
//   //console.log("executing query: " + queryString.slice(0,100) + " ...");
//   con.query(queryString, handleResultset);
// }

// new queryDatabase (using local sqlite file)
async function queryDatabase(queryString)
{
  const fileDB = new sqlite3.Database("./data/gameData_sqlite.db")

  const parameters = [];
  
   // using db.each 
  const resultSet = fileDB.all(queryString, parameters, (err, result) => {
    // each row processed here
    if(err)
      {
        console.error("ERROR: " + err);
      }
      else
      {
        console.log("Input operation successful.");
      }
  });

  fileDB.close();
  
}

// OLD queryDatabaseAndSerializeResult
// export async function queryDatabaseAndSerializeResult(queryString)
// {
//   /* 
//   var con =  mysql.createConnection({
//     host: "localhost",
//     user: username,
//     password: password,
//     database: "games"
//   }); */
//   let con = openConnection();

//   await sleep(1000);
//   //console.log("executing query: " + queryString.slice(0,100) + " ...");
//   con.query(queryString, handleResultsetAndSerialize);
 

// }

// NEW queryDatabaseAndSerializeResult (using sqlite local file)
export async function queryDatabaseAndSerializeResult(queryString, filename)
{
  const fileDB = new sqlite3.Database("./data/gameData_sqlite.db")

  const parameters = [];
  
   // using db.each 
  const resultSet = fileDB.all(queryString, parameters, (err, result) => 
    {
    // serialize result
    if (err) 
      {
      if(err.code == 'ER_DATA_TOO_LONG')
        {
          console.log("ERROR: data exceeding max length")
          
        }
        else{
          throw err;
        }
        
    }

    serializeQuery(result,filename);
  });
  fileDB.close();

}


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function createRowFromJSON(obj)
{
  //console.log(obj);

  // check if a replay owner exists - otherwise the replay may be incomplete or otherwise garbage
  if(obj.ReplayOwner == null)
  {
    console.log("No replay owner found. Skipping file.")
    return; 
  }
  
  //var hero = undefined;
  var playerInfo = [];  



  var replay_gameID = obj.RandomValue;
  var replay_timestamp = obj.Timestamp;
  var replay_winner = "'N/A'";
  var replay_mode = obj.GameMode;
  var replay_hero = undefined;
  var replay_map = obj.MapInfo.MapName;
  var replay_players = playerInfo

  

  //DEBUG
  if(replay_map.includes("'"))
  {
    replay_map = obj.MapInfo.MapId;
  }

  // loop over all players
  Array.from(obj.Players).forEach(player => 
  {
      
      

      // determine if the replay owner was the winner of this match and store their hero name as well
      if(obj.ReplayOwner == player.PlayerToonId)
      {
        var sanitizedHeroName = undefined;

        //console.log("Replay owner is " + player.PlayerToonId);
        // sanitize hero names that contain ' because SQL doesn't like that
        if(player.PlayerHero.HeroName.includes("'"))
          {
            sanitizedHeroName = player.PlayerHero.HeroId;
          }
          else
          {
            sanitizedHeroName = player.PlayerHero.HeroName;
          }
          
          replay_winner = player.IsWinner.toString();
          replay_hero = sanitizedHeroName;

          if(replay_hero == undefined) console.log("replay_hero still undefined!");
          
      }

      playerInfo.push({
        name : player.Name,
        battleTag : player.BattleTagName,
        toonId : player.PlayerToonId,
        heroPlayed : replay_hero,
        team : player.Team,
        isWinner : player.IsWinner.toString(),
        isReplayOwner : (player.PlayerToonId == obj.ReplayOwner),
        accountLevel : player.AccountLevel,
        party : player.PartyValue,
        talents : player.HeroTalents,
        scoreEvents : undefined // if desired in the future, add properties contained in "player.ScoreResult" here
      });

  });

    
  const replay = {
    game_id : replay_gameID,
    game_timestamp : replay_timestamp,
    game_winner : replay_winner,
    game_mode : replay_mode,
    game_hero : replay_hero,
    game_map : replay_map,
    game_players : replay_players
  }

  // use mysql model:
  var insertThis = "INSERT INTO uniqueGames VALUES ("+replay.game_id+", '" + replay.game_timestamp + "', " + replay.game_winner +", '"+replay.game_mode+"', '"+replay.game_hero+"', '"+replay.game_map+"', '"+JSON.stringify(playerInfo).replaceAll("'","")+"');";
  queryDatabase(insertThis);

  // use runtime JSON model:
  uniqueGamesJSON.push(replay);
}

/*
 given a collection of filenames and the filepath taken from data_path.cfg, 
 this function will loop over each file, parse it as json, and create a record in the database treating each as a unique game
*/
function populateDatabase(files)
{
  for(const file of files)
    {
      const fullPath = path.join(replayFilePath, file);
      try {
        const jsonData = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
        createRowFromJSON(jsonData);  
      } catch (error) 
      {
        console.log("Database population failed for replay " + fullPath +". Check replay integrity. Skipping file.")
        //console.log(error)  
      }
      
    };

    return uniqueGamesJSON;
}

export function getResultForQuery(queryString)
{
  return _globalResults.get(queryString);
}




//PROGRAM EXECUTION BELOW

// to recreate the entire table, execute the following queries:
// DROP uniqueGames
// and then
/*
CREATE TABLE uniqueGames (
    game_id varchar(255),
    game_timestamp varchar(255),
    game_winner varchar(255),
	game_mode varchar(255),
    game_hero varchar(255),
    game_map varchar(255),
    game_players varchar(255)
);

*/



// rebuild gameData.json based on the blob of all joined unique games as json - not needed if we're building data based on the SQL database
//fs.writeFileSync('./data/gameData.json', JSON.stringify(uniqueGamesJSON));



// load them in the visualization module
function queryHeroWinrate()
{
    //this is for the bar chart

    // this query should return a result that contains a table with game_hero, total_games, total_wins, win_rate stats
    

    queryDatabaseAndSerializeResult(queryForHeroStats, 'queryForHeroStatsResult.json');
    // result should be an array ordered by the highest number of total wins per unique hero
}

function queryMapWinrate()
{
    // this is for another bar chart, data should look like this:
    queryDatabaseAndSerializeResult(queryForMapStats, 'queryForMapStatsResult.json');
}

function queryWinrateOverTime()
{
    // this is for the line chart, data should look like this:
    // data: [0.54,0.60,0.51,0.42],
    // labels : [day1, ...]
    queryDatabaseAndSerializeResult(queryForLineChart, 'queryForLineChartResult.json');

  
}

function queryHeroPerformancePerMap()
{
  // dynamically construct heatmap query
  // START NEW STUFF
/*
  # Example list of heroes and maps
heroes = ['Zuljin', 'Tracer', 'Anubarak', 'Tyrael', 'Fenix']
maps = ['Braxis Holdout', 'Alterac Pass', 'Dragon Shire', 'Towers of Doom', 'Volskaya Foundry']

# Create a connection to the SQLite database
conn = sqlite3.connect('your_database.db')
cursor = conn.cursor()

# Construct the SQL query dynamically
base_query = """
SELECT 
    game_map, 
"""

# Add each hero's winrate calculation to the query
for hero in heroes:
    base_query += f"""
    IFNULL(SUM(CASE WHEN game_hero = '{hero}' THEN game_winner ELSE 0 END) / NULLIF(SUM(CASE WHEN game_hero = '{hero}' THEN 1 ELSE 0 END), 0), 0) AS {hero},
    """

# Remove the last comma
base_query = base_query.rstrip(',') 

# Add the rest of the query
base_query += """
FROM 
    uniqueGames 
WHERE 
    game_mode = 'stormLeague' 
"""

# Add the maps condition dynamically
if maps:
    maps_str = ', '.join(f"'{map}'" for map in maps)
    base_query += f"AND game_map IN ({maps_str}) "

base_query += "GROUP BY game_map;"
*/

  // END NEW STUFF

  queryDatabaseAndSerializeResult(queryForHeatmap, 'queryForHeatmapResult.json');
}

function queryRankedHeroes()
{
  
  queryDatabaseAndSerializeResult(queryForRankedHeroes, "queryForRankedHeroesResult.json");
}

function queryRankedMaps()
{
  
  queryDatabaseAndSerializeResult(queryForRankedMaps, "queryForRankedMapsResult.json");
}

function queryNestedMap()
{
  queryDatabaseAndSerializeResult(queryForNestedMap, "queryForNestedMapResult.json");
}

function queryPartyWinrate()
{
  queryDatabaseAndSerializeResult(queryForPartyWinrate, "queryForPartyWinrateResult.json");
}

function resetDatabase()
{
  
  
  // read all files in the folder and build a collection
  const replays = fs.readdirSync(replayFilePath);

  // use this to purge all records from said table to start over
  queryDatabase("DELETE FROM uniqueGames");

  // use this to fill the uniqueGames table in the games database on localhost with
  // replay data stored as JSON files found in the folder specified in data_path.cfg
  populateDatabase(replays);

}

// RESET DATABASE OR GENERATE DATA - for concurrency reasons, these need to be separate compilations
const reset = false;
if(reset)
{
  resetDatabase();
}
else
{
  queryHeroWinrate(); // this should generate a queryForHeroStatsResponse.json that holds all heroes, their total wins, games and winrate using the queryForHeroStats query.
  queryMapWinrate(); // this should generate a queryForMapStatsResponse.json that holds all maps, their total wins, games and winrate using the queryForMapStats query.
  queryWinrateOverTime();
  queryHeroPerformancePerMap();

  queryRankedHeroes();
  queryRankedMaps();
  queryNestedMap();
  queryPartyWinrate();
}


