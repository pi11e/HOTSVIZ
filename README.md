# HOTSVIZ
A project made to process Heroes of the Storm replays and visualize player statistics contained therein.

Preparations:
1. Install node.js including npm from here: https://nodejs.org/en/download/package-manager 
2. Verify by running 'npm -v' in a command line of your choice - it should print the version string of npm.
3. Clone or download this repository, then run 'npm install' via commandline in the root directory of this repository. This should evaluate the package.json file and install all listed dependencies.
4. Verify by running 'npm run dev'. This should at least indicate a webserver has started successfully, even if some files required for stats visualization may be incorrect or missing.

Instructions:
1. In your replay folder, run the included convertToJSON.bat file (copy it there first). It will call heroes-decode (from https://github.com/HeroesToolChest) to convert replay files into JSON.
2. Next, point the data_path.cfg to the folder that contains your json replays (better not to do this directly in your live replay folder - perhaps copy them to a temp folder first, then point at that). 
3. Run the hotsdb.js script to populate a local sqlite database with the replay data and generate a number of json files used to visualize this data. 
4. Type npm run dev in the root directory of this repository again to launch a local webserver hosting index.html on localhost:1234 to bootstrap the visualization client (hosted on a simple HTML5 canvas via Chart.js).

In short:
To populate your own database, convert your .stormReplay files to JSON, then execute hotsdb.js twice - once in initialize mode, once in preload mode (see bottom of file).

To build, make sure you have node.js and npm installed.

To resolve dependencies, execute
.\HOTSVIZ>npm install 

To run, execute
.\HOTSVIZ>npm run dev
then navigate to localhost:1234

# DIRECTORIES

- data: used to contain relevant configuration and visualization data. Configuration files are indicated as .cfg and will not change. json files will be regenerated by executing hotsdb.js. This is also where convertToJSON.bat lives, the commandline tool to convert .stormreplay to .json files.

- src: this is where relevant source files are stored, documented in more detail below. 

# FILES

- hotsdb.js // reads a directory of json files and stores each in a local mysql database (see reset / populatedatabase). alternatively, assumes an existing database and generates json datasets stored as local files
- hotsdata.js // parses local json files and turns them into datasets for consumption by Chart.js
- hotsviz.js // renders Chart.js charts on an HTML5 canvas, handling all of the configuration and visualization of data it pulls from hotsdata.js which acts as an interface.
- index.html // includes relevant scripts and defines the position of the HTML elements used for chart rendering 

# HACKS

- game hero / the hero taken for each replay to consider winrate is based on the hero played by the replay owner

# TO DO'S


- Build a better "out of the box" experience:
-- further streamline the database population and .stormreplay file processing steps needed at the start (ideally, users only have to point to their replay folder and hit go)
--- trigger database initialization and preload either automatically or via user interaction on the website if possible
-- integrate HeroesDecoder natively (C# / .NET app) so it doesn't have to be installed and executed separately?
    -> find more info on dependencies and tools here
        - https://sqlitebrowser.org/dl/
        - https://www.npmjs.com/package/sqlite#installation

- add dropdowns etc. to limit or switch visualization to specific heroes, players or other properties such as # of games played (only include stats for heroes that have x amount of games played)
- find a way to scan for and add to database only the NEW replays (ie check replay folder, convert previously unknown replays to json, then populate DB and delete JSON?)
- clean up hotsvis.js by providing convenience getters in hotsdata (model layer) to get Hero and Map winrates (as well as the combined WR of a hero on a map)
