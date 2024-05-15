import { json2csv } from 'json-2-csv';
import * as fs from'fs'

var jsonData = JSON.parse(fs.readFileSync('./data/gameData.json', 'utf-8'));


const csv = await json2csv(jsonData);
console.log(csv);

fs.writeFileSync("./data/gameData.csv", csv);