/* eslint-disable no-console */
// Get all Movies
const functions = require('./connection.js');

const { connection } = functions.connection;

function getAllMovies() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Movies', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// getAllMovies().then(data => console.log(data));

// Get the Movie with given ID
// function getMovieWithID(id) {
//   return new Promise((resolve, reject) => {
//     connection.query(`SELECT * FROM Movies WHERE Id = ${id}`, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// }

// getMovieWithID(51);

// Add a new Movie

function addNewMovie() {
  connection.query('INSERT INTO Movies (Movie_name) Values (\'Rajamouli\')', (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
// addNewMovie();

// Update the Movie with given ID
function updateMovieWithID(id, title) {
  connection.query(`UPDATE Movies SET Title = ${title} WHERE Id = ${id}`, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
// updateMovieWithID(51,'Krish');

// Delete the Movie with given ID
function deleteMovieWithID(id) {
  connection.query(`DELETE FROM Movies WHERE Id = ${id}`, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
// deleteMovieWithID(51);

module.exports.getAllMovies = getAllMovies;
// module.exports.getMovieWithID = getMovieWithID;
module.exports.addNewMovie = addNewMovie;
module.exports.updateMovieWithID = updateMovieWithID;
module.exports.deleteMovieWithID = deleteMovieWithID;
