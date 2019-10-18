/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
const mysql = require('mysql');

const inputData = require('../models/movies.json');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'keshav',
  password: 'keshav@123',
  database: 'keshav',
});

// const connection = require('../utils/connection');

connection.connect((err) => {
  if (err) {
    console.error(`error connecting ${err.stack}`);
  }
  console.log(`connected as Id ${connection.threadId}`);
});

// Create table!!
function createTable(queryForTable, name) {
  return new Promise((resolve, reject) => {
    connection.query(queryForTable, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
      console.log(`Created ${name} Table successfully`);
    });
  });
}

// Create Movies Table!!
const createMoviesTable = 'create table Movies (Id int auto_increment PRIMARY KEY, Rank int, Title varchar(100), Description varchar(1000), Runtime int, Genre varchar(15), Rating float, Metascore int, Votes int, Gross_Earning_in_Mil float, Director INT, Actor varchar(200), Year int(4), FOREIGN KEY (Director) REFERENCES Directors(Id) ON DELETE set null on update CASCADE);';

// Create Directors Table!!
const createDirectorsTable = 'create table Directors ( Id INT AUTO_INCREMENT PRIMARY KEY, Director_name VARCHAR(30))';

// Delete table!!
function dropTable(tableName) {
  return new Promise((resolve, reject) => {
    connection.query(`DROP TABLE IF EXISTS ${tableName}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
      console.log(`Dropped ${tableName} Table successfully`);
    });
  });
}

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
      if (Object.values(obj).includes('NA')) {
        for (const prop in obj) {
          if (obj[prop] === 'NA') {
            obj[prop] = null;
          }
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
    console.log('inserted into movies Successfully');
  });
}

// Insert data into Directors tables!!

function insertIntoDirectors(data) {
  const director = new Set();
  data.forEach((obj) => {
    director.add(obj.Director);
  });
  const directors = [];
  director.forEach(item => directors.push([item]));
  return new Promise((resolve, reject) => {
    connection.query('insert into Directors(Director_name) values ?', [directors], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    console.log('inserted into Directors Successfully');
  });
}

dropTable('Movies')
  .then(() => dropTable('Directors')
    .then(() => createTable(createDirectorsTable, 'Directors')
      .then(() => createTable(createMoviesTable, 'Movies')
        .then(() => insertIntoDirectors(inputData)
          .then(() => insertIntoMovies(inputData)
            .catch(error => console.log(error)))))));
