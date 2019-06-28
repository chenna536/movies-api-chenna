/* eslint-disable no-console */
// Get all Movies
const functions = require('../utils/connection.js');

const { connection } = functions;

function getAllMovies() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT Rank, Title, Director_name FROM Movies LEFT JOIN Directors ON Movies.Rank = Directors.Id', (err, results) => {
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
function getMovieWithID(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT Rank, Title, Director_name FROM Movies INNER JOIN Directors ON Movies.Rank = Directors.Id WHERE Rank = (?)', id, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// getMovieWithID(51);

// Add a new Movie

function addNewMovie(name) {
  connection.query(`INSERT INTO Movies (Movie_name) Values ${name}`, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
// addNewMovie();

// Update the Movie with given ID
function updateMovieWithID(rank, title) {
  connection.query(`UPDATE Movies SET Title = ${title} WHERE Rank = ${rank}`, (err, results) => {
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
module.exports.getMovieWithID = getMovieWithID;
module.exports.addNewMovie = addNewMovie;
module.exports.updateMovieWithID = updateMovieWithID;
module.exports.deleteMovieWithID = deleteMovieWithID;
