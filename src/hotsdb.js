//https://www.w3schools.com/nodejs/nodejs_mysql.asp
//import mysql from 'mysql2/promise';
import mysql from 'mysql';
import * as fs from 'fs';
import * as path from 'path';

var username = "root";
var password = "123456789";

var uniqueGamesJSON = [];

var _globalPool = undefined;


const queryForHeroStats = "SELECT game_hero, COUNT(*) AS total_games, SUM(CASE WHEN game_winner = 1 THEN 1 ELSE 0 END) AS total_wins, SUM(CASE WHEN game_winner = 1 THEN 1 ELSE 0 END) / COUNT(*) AS win_rate FROM uniqueGames WHERE game_mode = 'stormLeague' GROUP BY game_hero ORDER BY total_games DESC LIMIT 0, 1000";
const queryForMapStats = "SELECT game_map, COUNT(*) AS total_games, SUM(CASE WHEN game_winner = 1 THEN 1 ELSE 0 END) AS total_wins, SUM(CASE WHEN game_winner = 1 THEN 1 ELSE 0 END) / COUNT(*) AS win_rate FROM uniqueGames WHERE game_mode = 'stormLeague' GROUP BY game_map ORDER BY game_map LIMIT 0, 1000";
const queryForHeatmap = fs.readFileSync('./data/heatmapquery.cfg', 'utf-8'); // these don't work yet, the SQL throws errors due to a malformed query although in MySQL client they work. I assume a parsing problem.
//const queryForLineChart = fs.readFileSync('./data/linechartquery.cfg', 'utf-8'); // these don't work yet, the SQL throws errors due to a malformed query although in MySQL client they work. I assume a parsing problem.
const queryForLineChart = "SELECT game_timestamp from uniqueGames"; // this is just sample data, throw it away later
//const queryForHeatmap = "SELECT game_hero, game_map from uniqueGames"; // this is just sample data, throw it away later






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
    //console.log("serializing JSON: "+JSON.stringify(queryResult));
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
  

  /* for (i = 0; i < len; i += 1) 
    {
      console.log(result[i]);
  } */
}

function handleResultsetAndSerialize (err, result) {
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

  var filename = undefined;
  this.sql == queryForHeroStats ? filename = "queryForHeroStatsResult.json" : undefined;
  this.sql == queryForMapStats ? filename = "queryForMapStatsResult.json" : undefined;
  this.sql == queryForHeatmap ? filename = "queryForHeatmapResult.json" : undefined;
  this.sql == queryForLineChart ? filename = "queryForLineChartResult.json" : undefined;

  serializeQuery(result,filename);
  
  console.log("serializing result for query " + this.sql);
  

}


async function queryDatabase(queryString)
{
  /* 
  var con =  mysql.createConnection({
    host: "localhost",
    user: username,
    password: password,
    database: "games"
  }); */
  let con = openConnection();

  await sleep(1000);
  //console.log("executing query: " + queryString.slice(0,100) + " ...");
  con.query(queryString, handleResultset);
}

export async function queryDatabaseAndSerializeResult(queryString)
{
  /* 
  var con =  mysql.createConnection({
    host: "localhost",
    user: username,
    password: password,
    database: "games"
  }); */
  let con = openConnection();

  await sleep(1000);
  //console.log("executing query: " + queryString.slice(0,100) + " ...");
  con.query(queryString, handleResultsetAndSerialize);
 

}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function createRowFromJSON(obj)
{
  //console.log(obj);

  
  var hero = undefined;
  var playerInfo = [];  

  const replay = {
    game_id : obj.RandomValue,
    game_timestamp : obj.Timestamp,
    game_winner : "N/A",
    game_mode : obj.GameMode,
    game_hero : hero,
    game_map : obj.MapInfo.MapName,
    game_players : playerInfo
  }

  //DEBUG
  if(replay.game_map.includes("'"))
  {
    replay.game_map = obj.MapInfo.MapId;
  }

  // loop over all players
  Array.from(obj.Players).forEach(player => 
  {
      var sanitizedHeroName = undefined;

      // determine if the replay owner was the winner of this match and store their hero name as well
      if(obj.ReplayOwner == player.PlayerToonId)
      {
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
          
          replay.game_winner = player.IsWinner.toString();
          replay.game_hero = sanitizedHeroName;
          
      }

      playerInfo.push({
        name : player.Name,
        battleTag : player.BattleTagName,
        toonId : player.PlayerToonId,
        heroPlayed : sanitizedHeroName,
        team : player.Team,
        isWinner : player.IsWinner.toString(),
        isReplayOwner : (player.PlayerToonId == obj.ReplayOwner),
        accountLevel : player.AccountLevel,
        party : player.PartyValue,
        talents : player.HeroTalents,
        scoreEvents : undefined // if desired in the future, add properties contained in "player.ScoreResult" here
      });

  });

    
  

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
      const fullPath = path.join(filePath, file);
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

// read config file to find the location of the replay json files
var filePath = fs.readFileSync("./data/data_path.cfg", "utf-8");
// read all files in the folder and build a collection
const replays = fs.readdirSync(filePath);

// use this to purge all records from said table to start over
queryDatabase("DELETE FROM uniqueGames");

// use this to fill the uniqueGames table in the games database on localhost with
// replay data stored as JSON files found in the folder specified in data_path.cfg
populateDatabase(replays);


// rebuild gameData.json based on the blob of all joined unique games as json - not needed if we're building data based on the SQL database
//fs.writeFileSync('./data/gameData.json', JSON.stringify(uniqueGamesJSON));



// load them in the visualization module
function queryHeroWinrate()
{
    //this is for the bar chart

    // this query should return a result that contains a table with game_hero, total_games, total_wins, win_rate stats
    

    queryDatabaseAndSerializeResult(queryForHeroStats);
    // result should be an array ordered by the highest number of total wins per unique hero
}

function queryMapWinrate()
{
    // this is for another bar chart, data should look like this:
    queryDatabaseAndSerializeResult(queryForMapStats);
}

function queryWinrateOverTime()
{
    // this is for the line chart, data should look like this:
    // data: [0.54,0.60,0.51,0.42],
    // labels : [day1, ...]
    queryDatabaseAndSerializeResult(queryForLineChart);
}

function queryHeroPerformancePerMap()
{
    // this is for the heatmap, data should look like this:
  let pool = openConnection();
    //queryDatabaseAndSerializeResult(queryForHeatmap);
// Assuming you have a MySQL connection pool named `pool`

// Step 1: Set session variable for group_concat_max_len
const statement1 = "SET SESSION group_concat_max_len = 1000000";
pool.query(statement1, (error, results) => {
    if (error) throw error;
    console.log("Statement 1 OK"); // Log successful execution of statement 1

    // Step 2: Fetch distinct maps
    const statement2 = `
        SET @maps = (
            SELECT GROUP_CONCAT(DISTINCT CONCAT('''', game_map, ''''))
            FROM uniqueGames
            WHERE game_mode = 'stormLeague'
        )`;



    pool.query(statement2, (error, results) => {
        if (error) throw error;
        console.log("Statement 2 OK"); // Log successful execution of statement 2

        // Step 3: Fetch distinct heroes and construct dynamic SELECT clause
        const statement3 = `
            SET @heroes = (
                SELECT GROUP_CONCAT(
                    DISTINCT 
                    CONCAT(
                        'IFNULL(SUM(CASE WHEN game_hero = ''', REPLACE(game_hero, '''', ''''''), ''' THEN game_winner ELSE 0 END) / SUM(CASE WHEN game_hero = ''', REPLACE(game_hero, '''', ''''''), ''' THEN 1 ELSE 0 END), "N/A") AS \'', 
                        game_hero, '\''
                    )
                ) 
                FROM uniqueGames
                WHERE game_mode = 'stormLeague'
            )`;
        pool.query(statement3, (error, results) => {
            if (error) throw error;
            console.log("Statement 3 OK"); // Log successful execution of statement 3

            // Step 4: Construct the full query
            const statement4 = `
                SET @sql = CONCAT(
                    'SELECT game_map, ', @heroes, 
                    ' FROM uniqueGames WHERE game_mode = ''stormLeague'' AND game_map IN (', @maps, ') GROUP BY game_map'
                )`;
            pool.query(statement4, (error, results) => {
                if (error) throw error;
                console.log("Statement 4 OK"); // Log successful execution of statement 4
                console.log("Constructed query:", results); // Debug: Print the constructed query

                // Check if @sql is not NULL or empty
                if (!results) {
                    throw new Error("Failed to construct SQL statement.");
                }

                
                
                // Step 5: Prepare the dynamic statement
              const statement5 = "PREPARE stmt FROM @sql";
              pool.query(statement5, (error, results) => {
                  if (error) throw error;
                  console.log("Statement 5 OK"); // Log successful execution of statement 5

                  // Step 6: Execute the prepared statement
                  const executeStatement = "EXECUTE stmt";
                  pool.query(executeStatement, (error, results) => {
                      if (error) throw error;
                      console.log("Statement 6 OK"); // Log successful execution of statement 6
                      console.log(results); // Assuming you want to log the result

                      // Step 7: Deallocate the prepared statement
                      const deallocateStatement = "DEALLOCATE PREPARE stmt";
                      pool.query(deallocateStatement, (error, results) => {
                          if (error) throw error;
                          console.log("Statement 7 OK"); // Log successful execution of statement 7
                          console.log(results); // Assuming you want to log the result
                      });
                  });
              });
            });
        });
    });
});




}


queryHeroWinrate(); // this should generate a queryForHeroStatsResponse.json that holds all heroes, their total wins, games and winrate using the queryForHeroStats query.
queryMapWinrate(); // this should generate a queryForMapStatsResponse.json that holds all maps, their total wins, games and winrate using the queryForMapStats query.
queryWinrateOverTime();
//queryHeroPerformancePerMap();