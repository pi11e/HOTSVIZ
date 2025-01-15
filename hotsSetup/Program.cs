// See https://aka.ms/new-console-template for more information
using System.Diagnostics;

// replay file path for testing:
// C:\Users\darth\Documents\Heroes of the Storm\Accounts\75534426\2-Hero-1-1919475\Replays\Multiplayer\2024-06-16 12.28.34 Sky Temple.StormReplay

// full command to execute: dotnet heroes-decode -get-json --replay-path "C:\Users\darth\Documents\Heroes of the Storm\Accounts\75534426\2-Hero-1-1919475\Replays\Multiplayer\2024-06-16 12.28.34 Sky Temple.StormReplay"

// pseudocode:
// string fileDirectory = ...
// for each fileName in fileDirectory
//      if(replay already in DB or file extension is json)
//          skip
//      else
//          processReplay
//
// processReplay = dotnet heroes-decode -get-json --replay-path "..." > "...".json
Process.Start("cmd", "dotnet tool install --global HeroesDecode");

string folderPath = "C:\\Users\\darth\\Documents\\Heroes of the Storm\\Accounts\\75534426\\2-Hero-1-1919475\\Replays\\Multiplayer";

string[] fileNames = Directory.GetFiles(folderPath);
foreach (var replayFile in fileNames)
{
    bool isStormReplay = replayFile.EndsWith(".StormReplay");
    bool jsonExistAlready = fileNames.Contains(replayFile + ".json");
    if(isStormReplay && !jsonExistAlready) // only process the file if it is a .StormReplay and a .json of the same name doesn't already exist
    {
        string replayPath = "\"" + replayFile + "\"";
        string command = "/C dotnet heroes-decode get-json --replay-path " + replayPath + " > " + replayPath + ".json";
        Process.Start("cmd", command);

        Console.WriteLine("processing replay file " + replayFile);
    }
    
}

//string filePath = "2024-06-16 12.28.34 Sky Temple.StormReplay\"";
//string replayPath = folderPath + filePath;
//string command = "/C dotnet heroes-decode get-json --replay-path " + replayPath + " > " + replayPath + ".json";
//Console.WriteLine(command);
//Process.Start("cmd", command); // this works!