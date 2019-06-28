/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */

// Creating connection between mysql and localhost
const mysql = require('mysql');

const fs = require('fs');

const moviesData = JSON.parse(fs.readFileSync('./movies.json'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'keshav',
  password: 'keshav@123',
  database: 'keshav',
});

// Create connection!!

// connection.connect((err) => {
//   if (err) {
//     console.error(`error connecting ${err.stack}`);
//   }
//   console.log(`connected as Id ${connection.threadId}`);
// });

// Create Movies Table!!


// Create table!!
function createTable(queryForTable) {
  connection.query(queryForTable, (err) => {
    if (err) throw err;
    console.log('Created Table successfully');
  });
}


const createMoviesTable = 'create table Movies ( Rank int auto_increment unique, Title varchar(100), Description varchar(1000), Runtime int, Genre varchar(15), Rating float, Metascore int, Votes int, Gross_Earning_in_Mil float, Director INT, Actor varchar(200), Year int(4) );';
// createTable(createMoviesTable);

// Create Directors Table!!
const createDirectorsTable = 'create table Directors ( Id INT AUTO_INCREMENT PRIMARY KEY, Director_name VARCHAR(30))';

// createTable(createDirectorsTable);

// connection.query('SHOW Tables', (err, results) => {
//   if (err) throw err;
//   else console.log(results);
// });

// Delete table

function dropTable(tableName) {
  connection.query(`DROP TABLE ${tableName}`, (err) => {
    if (err) throw err;
    console.log('Dropped Table successfully');
  });
}

// dropTable('Directors');
// dropTable('Movies');

// connection.query('SELECT * FROM Directors', (err, results) => {
//   if (err) throw err;
//   console.log(results);
// });

// Insert data into Movies tables!!

function selectIDFromDirector(obj) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT Id FROM Directors WHERE Director_name = (?)', obj.Director, (err, result) => {
      if (err) {
        reject(err);
      } else {
        obj.Director = result[0].Id;
      }
      resolve(obj);
    });
  });
}

function insertIntoMovies(data) {
  return new Promise((resolve, reject) => {
    data.forEach((obj) => {
      for (const prop in obj) {
        if (obj[prop] === 'NA') {
          obj[prop] = null;
        }
      }
      selectIDFromDirector(obj).then((newObj) => {
        connection.query('INSERT INTO Movies set ?', newObj, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      }).catch(error => console.log(error));
    });
    // resolve(data);
  });
}

// insertIntoMovies(moviesData).then((out) => {
//   console.log(out);
// });

// console.log(insertIntoMovies(moviesData));

// Insert data into Directors tables!!

function insertIntoDirectors() {
  const director = new Set();
  moviesData.forEach((obj) => {
    director.add(obj.Director);
  });
  const directors = [];
  director.forEach(item => directors.push([item]));
  connection.query('insert into Directors(Director_name) values ?', [directors], (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}

// insertIntoDirectors();

// connection.end();

module.exports.connection = connection;
