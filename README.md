# HOTSVIZ
A project made to process Heroes of the Storm replays and visualize player statistics contained therein.

Instructions:
1. In your replay folder, run the included convertToJSON.bat file. It will call heroes-decode (from https://github.com/HeroesToolChest) to convert replay files into JSON.
2. Next, point the data_path.cfg to the folder that contains your json replays (better not to do this directly in your live replay folder). 
3. Run the hotsdb.js script to populate a local mysql database with the replay data and generate a number of json files used to visualize this data. 
4. Type npm run dev to launch a local webserver hosting index.html on localhost:1234 to launch the visualization client.


To build, make sure you have node.js and npm installed.

To resolve dependencies, execute
.\HOTSVIZ>npm install 

To run, execute
.\HOTSVIZ>npm run dev
then navigate to localhost:1234

