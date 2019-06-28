/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-consol */

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

connection.connect((err) => {
  if (err) {
    console.log(`error connecting ${err.stack}`);
  }
  console.log(`connected as Id ${connection.threadId}`);
});

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

// selectIDFromDirector(moviesData[0])
// .then((val) => {
//     console.log(val);
// });

function abc(data) {
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
            // resolve(results);
          }
        });
        resolve(newObj);
      });
    });
  });
}

abc(moviesData)
.then((out) => {
    console.log(out);
});
