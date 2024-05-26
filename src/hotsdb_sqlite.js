import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// this is a top-level await 
(async () => {
    // open the database
    const db = await open({
      filename: './data/gameData_sqlite.db',
      driver: sqlite3.Database
    })
})()

// create the DB handle
// db is an instance of `sqlite#Database`
// which is a wrapper around `sqlite3#Database`
// async open:
const async_db_connection = await open({
  /**
   * Valid values are filenames, ":memory:" for an anonymous in-memory
   * database and an empty string for an anonymous disk-based database.
   * Anonymous databases are not persisted and when closing the database
   * handle, their contents are lost.
   */
  filename: './data/gameData_sqlite.db',

  /**
   * One or more of sqlite3.OPEN_READONLY, sqlite3.OPEN_READWRITE and
   * sqlite3.OPEN_CREATE. The default value is OPEN_READWRITE | OPEN_CREATE.
   */
  //mode?: number

  /**
   * The database driver. Most will install `sqlite3` and use the `Database` class from it.
   * As long as the library you are using conforms to the `sqlite3` API, you can use it as
   * the driver.
   *
   * @example
   *
   * ```
   * import sqlite from 'sqlite3'
   *
   * const driver = sqlite.Database
   * ```
   */
  driver: sqlite3.Database
})

async function queryDatabase(queryString)
{
  const fileDB = new sqlite3.Database(./data/)

  const parameters = [];
  
   // using db.each 
  const resultSet = await async_db_connection.each(queryString, parameters, (err, result) => {
    // each row processed here
    console.log(result);
  });
  
 console.log(fileDB);
 
  const result = await fileDB.each(queryString, parameters, (err, result) => {
    // each row processed here
    console.log(result);
  });
  // alternatively, use db.all:
  
  fileDB.all(queryString, [], (err, rows) => 
  {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
  });

  // none of this seems to do anything?
}

// fill with sample data
//await db.exec('CREATE TABLE tbl (col TEXT)')
//await db.exec('INSERT INTO tbl VALUES ("test")')

const populateDatabaseQuery = `CREATE TABLE uniqueGames (
  game_id varchar(255),
  game_timestamp varchar(255),
  game_winner varchar(255),
game_mode varchar(255),
  game_hero varchar(255),
  game_map varchar(255),
  game_players varchar(255)
);`

//queryDatabase(populateDatabaseQuery);
queryDatabase("SELECT * from uniqueGames");

// getting a single row
//const result = await db.get('SELECT col FROM tbl WHERE col = ?', 'test');
//console.log(result);

// db.each(sql,params, (err, result) => {
   // process each row here
//});
