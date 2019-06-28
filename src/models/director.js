/* eslint-disable no-console */
// Get all directors
const functions = require('../utils/connection.js');

const { connection } = functions;

function getAllDirectors() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Directors;', (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// getAllDirectors().then((data) => {
//   console.log(data);
// });

// Get the director with given ID

function getDirectorWithID(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Directors WHERE Id = (?)', id, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// console.log(getDirectorWithID(5));

// Add a new director

function addNewDirector() {
  connection.query('INSERT INTO Directors (Director_name) Values (\'Rajamouli\')', (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
// addNewDirector();

// Update the director with given ID
function updateDirectorWithID(id, name) {
  connection.query(`UPDATE Directors SET Director_name = ${name} WHERE Id = ${id}`, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
// updateDirectorWithID(51,'Krish');

// Delete the director with given ID
function deleteDirectorWithID(id) {
  connection.query('DELETE FROM Directors WHERE Id = (?)', id, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
// deleteDirectorWithID(51);

module.exports.getAllDirectors = getAllDirectors;
module.exports.getDirectorWithID = getDirectorWithID;
module.exports.addNewDirector = addNewDirector;
module.exports.updateDirectorWithID = updateDirectorWithID;
module.exports.deleteDirectorWithID = deleteDirectorWithID;
