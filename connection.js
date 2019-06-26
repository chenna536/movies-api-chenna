/* eslint-disable no-console */

// Creating connection between mysql and localhost
const mysql = require('mysql');

const fs = require('fs');

const moviesData = JSON.parse(fs.readFileSync('./movies.json'));
// console.log(moviesData);

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

// const createMoviesTable = 'CREATE TABLE Movies ( Rank INT,Title TEXT,Description TEXT,
// Runtime INT,Genre TEXT,Rating FLOAT,Metascore INT,Votes INT,Gross_Earning_in_Mil FLOAT,
// Director TEXT,Actor TEXT,Year INT)';
// connection.query(createMoviesTable, (err, results, fields) => {
//   if (err) throw err;
// //   console.log(results);
// });

// Create Directors Table!!

// const createDirectorsTable = 'CREATE TABLE Directors ( Id INT AUTO_INCREMENT PRIMARY KEY,
// Director_name TEXT)';
// connection.query(createDirectorsTable, (err, results, fields) => {
//   if (err) throw err;
//   console.log(results);
// });
// connection.query('SHOW Tables', (err, results, fields) => {
//   if (err) throw err;
//   console.log(results);
// });
// connection.query('DROP TABLE Directors', (err, results, fields) => {
//   if (err) throw err;
//   console.log(results);
// });
// connection.query('SELECT * FROM Directors', (err, results, fields) => {
//   if (err) throw err;
//   console.log(results);
// });

// Insert data into Movies tables!!

// function insertIntoMovies(data) {
//   data.forEach((obj) => {
//     if (Object.values(obj).includes('NA')) {
//       for (const prop in obj) {
//         if (obj[prop] === 'NA') {
//           obj[prop] = 0.0;
//         }
//       }
//     }
// connection.query('INSERT INTO Movies set ?', obj, (err, results, fields) => {
//   if (err) throw err;
//   console.log(results);
// });
// });
// }
// insertIntoMovies(moviesData);

// // if (Object.values(obj).indexOf('NA') !== -1) {
// //   console.log(Object.keys(obj));
// //   console.log(Object.values(obj)[Object.values(obj).indexOf('NA')]);
// // }

// Insert data into Directors tables!!

// function insertIntoDirectors(data) {
//   data.forEach((obj) => {
//     connection.query('INSERT INTO Directors (Director_name) Values (?)', obj.Director,
//       (err, results) => {
//       if (err) throw err;
//       console.log(results);
//     });
//   });
// }

// insertIntoDirectors(moviesData);
// connection.end();
