//https://www.w3schools.com/nodejs/nodejs_mysql.asp
//import * as mysql from 'mysql';
import * as fs from 'fs';
import * as path from 'path';

//var username = "root";
//var password = "123456789";

var uniqueGamesJSON = [];

/*
function createConnection(){
    var con = mysql.createConnection({
        host: "localhost",
        user: username,
        password: password,
        database: "games"
      });

    return con;
}

function queryDatabase(query)
{
    let con = createConnection();

    con.connect(function(err) {
        if (err) throw err;
        //console.log("Connected!");
        con.query(query, function (err, result) 
        {
            console.log("executing on 'games' database: " + query);
          if (err) throw err;
          
          console.log("result:");
          console.log(result);
        });
      });
}
*/

function createRowFromJSON(obj)
{
  //console.log(obj);
  
  var winner = undefined;
  var hero = undefined;
  

  // loop over all players
  Array.from(obj.Players).forEach(player => 
    {
      // determine if the replay owner was the winner of this match and store their hero name as well
      if(obj.ReplayOwner == player.PlayerToonId)
      {
        console.log("Replay owner is " + player.PlayerToonId);
          winner = player.IsWinner;
          hero = player.PlayerHero.HeroName;
      }
    });

  const replay = {
    game_id : obj.RandomValue,
    game_timestamp : obj.Timestamp,
    game_winner : winner,
    game_mode : obj.GameMode,
    game_hero : hero,
    game_map : obj.MapInfo.MapName,
    game_players : obj.Players
  }

  // use mysql model:
  //var insertThis = "INSERT INTO uniqueGames VALUES ("+replay.game_id+", '" + replay.game_timestamp + "', " + replay.game_winner +", '"+replay.game_mode+"', '"+replay.game_hero+"', '"+replay.game_map+"');";
  //queryDatabase(insertThis);

  // use runtime JSON model:
  uniqueGamesJSON.push(replay);
}


// example usage
//var insertThis = "INSERT INTO uniqueGames VALUES ("+replay.game_id+", '" + replay.game_timestamp + "', " + replay.game_winner +", '"+replay.game_mode+"', '"+replay.game_hero+"');";
//queryDatabase(insertThis);
//queryDatabase(queryThis);
//query used to create a new table called "uniqueGames" in our DB
//CREATE TABLE uniqueGames (game_id int, game_timestamp varchar(255), game_winner bool, game_mode varchar(255), game_hero varchar(255))

//this resets the database, dropping all records from the uniqueGames table
//queryDatabase("DELETE FROM uniqueGames");

//now let's get this same data from a bunch of JSON files instead
//var jsonData = JSON.parse(fs.readFileSync("C:/Users/darth/Documents/Heroes of the Storm/Accounts/75534426/2-Hero-1-1919475/Replays/tmp/2024-05-13 01.02.19 Infernal Shrines.StormReplay.json", 'utf-8'));
//createRowFromJSON(jsonData);

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




// now lets do the same for all JSON files on record
var filePath = fs.readFileSync("./data/data_path.cfg", "utf-8");
//const replays = await fs.promises.readdir(filePath);
const replays = fs.readdirSync(filePath);

// use this to purge all records from said table to start over
//queryDatabase("DELETE FROM uniqueGames");

// use this to fill the uniqueGames table in the games database on localhost with
// replay data stored as JSON files found in the folder specified in data_path.cfg
populateDatabase(replays);
console.log(uniqueGamesJSON);

fs.writeFileSync('./data/gameData.json', JSON.stringify(uniqueGamesJSON));
