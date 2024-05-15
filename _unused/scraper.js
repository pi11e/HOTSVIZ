/*

This file processes an HTML data blob, looking for table rows describing a match, and parses them into JSON.
It is no longer needed really as we're instead now doing this with our own real replay data taken from the game client.

*/


//const parser = require('node-html-parser');
//const fs = require('fs');

import * as parser from 'node-html-parser'
import * as fs from'fs'

const html = fs.readFileSync('./data/table.html', {encoding: 'utf8'});
const data = parser.parse(html);


const gameData = []; // array of games
// testing data structures
// const uniqueGame = {id:123, date:"test"}; // an object describing statistics of a game
// gameData.push(uniqueGame);
// gameData.push(uniqueGame);

var tableRows = data.getElementsByTagName('tr');
// skip first row as it contains the table headers
for(var tableIt = 1; tableIt < tableRows.length; tableIt++) {
    var row = tableRows[tableIt];
    
    //tableRows.length is the number of games minus one, each increase of tableIt will add one game.
    // iterating through the rows, we're scraping for the actual game stat as shown below.

    // ROWS are structured as:
    // Game ID : HTMLElement
    // Game Date : TextNode
    // Game Type : TextNode
    // Game Map : TextNode
    // Hero : HTMLElement
    // Winner : TextNode
    // Talents : HTMLElement

    /*
    //code mockup

    var model = 
    for each game in games
    {
        model.push(game.id, game.date, game.type, game.hero, game.winner, game.talents)
    }


    */

    const uniqueGame = {gameId:undefined, gameDate:undefined, gameType:undefined, gameMap:undefined, hero:undefined, winner:undefined, talents:undefined};

    /* v1
    uniqueGame.gameId = row.childNodes[0].firstChild.text;
    uniqueGame.gameDate = row.childNodes[1].text;
    uniqueGame.gameType = row.childNodes[2].text;
    uniqueGame.gameMap = row.childNodes[3].text;
    uniqueGame.hero = row.childNodes[4].firstChild.firstChild.childNodes[2].firstChild.firstChild.firstChild.text;
    uniqueGame.winner = row.childNodes[5].text;
    */

    //v2
    uniqueGame.gameId = row.childNodes[1].firstChild.text;
    uniqueGame.gameDate = row.childNodes[3].text;
    uniqueGame.gameType = row.childNodes[5].text;
    uniqueGame.gameMap = row.childNodes[7].text; 
    uniqueGame.hero = row.childNodes[9].childNodes[2].firstChild.text;
    uniqueGame.winner = row.childNodes[11].text;
    
    // lets build the talents real quick
    var talents = row.childNodes[13].childNodes[1].childNodes;
    // talents will be in this where X is 1-3-5-7-11-13
    // row.childNodes[13].childNodes[1].childNodes[X].childNodes[3].childNodes[1].childNodes[2].firstChild.firstChild.text
    const listTalents = [];
    for(var talentIt = 0; talentIt < talents.length; talentIt++)
    {
        if(talentIt % 2 !== 0)
        {
            var talentNode = talents[talentIt];
            var t = row.childNodes[13].childNodes[1].childNodes[talentIt].childNodes[3].childNodes[1].childNodes[2].firstChild.firstChild.text;
            listTalents.push(t);    
        }
        
        // console.log(t)    
    } 
    
    uniqueGame.talents = listTalents;

    gameData.push(uniqueGame);
 
    // all this was debug research to understand the DOM Tree
    // for(var childIt = 0; childIt < row.childNodes.length; childIt++)
    // {   
    //     var child = row.childNodes[childIt];

    //     var gameStat = child.firstChild;

    //     if(gameStat.nodeType == 3)
    //     {
    //         //TextNode - we are logging the Game Data, Type, and Map
    //         var output = gameStat.text;
    //         console.log("row[" +tableIt+"] child["+childIt +"] "+ output);
    //     }
    //     else
    //     {
    //         //HTMLElement - in this case, it will be one of three HTMLElements that occur on this level. 
    //         // It will contain either the Game ID, the Hero or Talents picket.
    //         //console.log(gameStat);

    //         if(gameStat.firstChild.nodeType == 3)
    //         {

    //             // in the first case (Game ID), it will be contained in the first and only childNode which will be a text node containing the game ID as raw text
    //             var output = gameStat.firstChild.text;
    //             console.log("row[" +tableIt+"] child["+childIt +"] "+ output);

                
    //         }
    //         else
    //         {

    //             // in the second case (Hero), we find a heavily nested div. the hero name will be contained in X
    //             // firstChild is an HTMLElement; we want its third child 
    //             if(gameStat.firstChild.childNodes.length == 3)
    //             {
    //                 var output = gameStat.firstChild.childNodes[2].firstChild.firstChild.firstChild._rawText; 
    //                 console.log("row[" +tableIt+"] child["+childIt +"] "+ output);
    //             }
    //             else
    //             {
    //                 // in the third case (Talents), we don't care for now; size of firstChild.childNodes should more than 3 in this case

    //                 var talents = gameStat.childNodes;
    //                 const listTalents = [];
    //                 for(var talentIt = 0; talentIt < talents.length; talentIt++)
    //                 {
    //                     var talentNode = talents[talentIt];
    //                     var t = talentNode.childNodes[1].firstChild.firstChild.firstChild.text;
    //                     listTalents.push(t);
    //                     // console.log(t)    
    //                 } 
    //                 var output = listTalents;
    //                 console.log("row[" +tableIt+"] child["+childIt +"] "+ output);
                    
    //             }

                

                
    //         }
            
    //     }

        
    // }

}



// console.log('👉', data);

// function stringify(obj) {
//     let cache = [];
//     let str = JSON.stringify(obj, function(key, value) {
//       if (typeof value === "object" && value !== null) {
//         if (cache.indexOf(value) !== -1) {
//           // Circular reference found, discard key
//           return;
//         }
//         // Store value in our collection
//         cache.push(value);
//       }
//       return value;
//     });
//     cache = null; // reset the cache
//     return str;
//   }

  


fs.writeFile ("./data/gameData.json", JSON.stringify(gameData), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
