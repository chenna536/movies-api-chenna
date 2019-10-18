/* eslint-disable no-console */
// Get all directors
const functions = require('../utils/connection.js');

const { connection } = functions;

function getAllDirectors() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Movies LEFT JOIN Directors ON Movies.Director = Directors.Id;', (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// getAllDirectors().then(data => console.log(data));
// Get the director with given ID

function getDirectorWithID(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Directors WHERE Id = (?)', id, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
        console.log(`Director with given Id ${id}`);
      }
    });
  });
}

// console.log(getDirectorWithID(5));

// Add a new director

function addNewDirector(data) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO Directors set ?', data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// addNewDirector('Rajamouli');

// Update the director with given ID
function updateDirectorWithID(id, data) {
  const query = `UPDATE Directors SET ? WHERE Id = ${id}`;
  return new Promise((resolve, reject) => {
    connection.query(query, data, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Delete the director with given ID
function deleteDirectorWithID(id) {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM Directors WHERE Id = (?)', id, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// addNewDirector('vivek')
//   .then(() => updateDirectorWithID(36, 'krish'))
//   .then(() => getDirectorWithID(36))
//   .then(data => console.log(data))
//   .then(() => deleteDirectorWithID(36))
//   .then(() => getAllDirectors())
//   .then(data => console.log(data))
//   .then(() => connection.end())
//   .catch(error => console.log(error));

module.exports = {
  getAllDirectors,
  getDirectorWithID,
  addNewDirector,
  updateDirectorWithID,
  deleteDirectorWithID,
};
