//https://www.w3schools.com/nodejs/nodejs_mysql.asp
//import mysql from 'mysql2/promise';
import mysql from 'mysql';
import * as fs from 'fs';
import * as path from 'path';

var username = "root";
var password = "123456789";

var uniqueGamesJSON = [];

var globalPool = undefined;

//TODO - use connection pool when running out of connections which happens as soon as you compile due to 500 connections being opened
//var persistentConnection = undefined;


function createConnection(){
    var con =  mysql.createConnection({
        host: "localhost",
        user: username,
        password: password,
        database: "games"
      });
    
    
    return con;
}

function handleResultset (err, result) {
  var i, len;
  if (err) {
      throw err;
  }
  len = result.length;
  for (i = 0; i < len; i += 1) {
      console.log(result[i]);
  }
}

async function queryDatabase(queryString)
{
  var con =  mysql.createConnection({
    host: "localhost",
    user: username,
    password: password,
    database: "games"
  });

  console.log("executing query: " + queryString);
  con.query(queryString, handleResultset);
  con.end();

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
  var simplifiedPlayers = [];  

  const replay = {
    game_id : obj.RandomValue,
    game_timestamp : obj.Timestamp,
    game_winner : "N/A",
    game_mode : obj.GameMode,
    game_hero : hero,
    game_map : obj.MapInfo.MapName,
    game_players : simplifiedPlayers
  }

  // loop over all players
  Array.from(obj.Players).forEach(player => 
  {
      // determine if the replay owner was the winner of this match and store their hero name as well
      if(obj.ReplayOwner == player.PlayerToonId)
      {
        //console.log("Replay owner is " + player.PlayerToonId);
          hero = player.PlayerHero.HeroName;
          replay.game_winner = player.IsWinner.toString();
      }
      simplifiedPlayers.push({
        name : player.Name,
        battleTag : player.BattleTagName,
        toonId : player.PlayerToonId,
        heroPlayed : player.PlayerHero.HeroName,
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
  var insertThis = "INSERT INTO uniqueGames VALUES ("+replay.game_id+", '" + replay.game_timestamp + "', " + replay.game_winner +", '"+replay.game_mode+"', '"+replay.game_hero+"', '"+replay.game_map+"', '"+replay.simplifiedPlayers+"');";
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


//PROGRAM EXECUTION BELOW


// read config file to find the location of the replay json files
var filePath = fs.readFileSync("./data/data_path.cfg", "utf-8");
// read all files in the folder and build a collection
const replays = fs.readdirSync(filePath);

// use this to purge all records from said table to start over
//queryDatabase("DELETE FROM uniqueGames");

// use this to fill the uniqueGames table in the games database on localhost with
// replay data stored as JSON files found in the folder specified in data_path.cfg
populateDatabase(replays);


// rebuild gameData.json based on the blob of all joined unique games as json
//fs.writeFileSync('./data/gameData.json', JSON.stringify(uniqueGamesJSON));
