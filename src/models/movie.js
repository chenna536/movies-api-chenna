/* eslint-disable no-console */
// Get all Movies
const functions = require('../utils/connection.js');

const { connection } = functions;

function getAllMovies() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT Rank, Title, Director_name FROM Movies LEFT JOIN Directors ON Movies.Director = Directors.Id', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
        console.log('All Movies');
      }
    });
  });
}

// getAllMovies().then(data => console.log(data));

// const newObject = {
//   Rank: 51,
//   Title: 'The Shanmukh Redemption',
//   Description: 'Two imprisoned men bond over a number of years, finding solace and eventual',
//   Runtime: 142,
//   Genre: 'Comedy',
//   Rating: 9.3,
//   Metascore: 80,
//   Votes: 1934970,
//   Gross_Earning_in_Mil: 28.34,
//   Director: 35,
//   Actor: 'Shanmukh',
//   Year: 2019,
// };

// Add a new Movie
function addNewMovie(data) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO Movies SET ?', data, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
        // console.log('Added a New Movie');
      }
    });
  });
}

// Get the Movie with given ID
function getMovieWithID(id) {
  return new Promise((resolve, reject) => {
    connection.query('select Rank, Title, Director_name as Director from Movies m join Directors d on (m.Director = d.Id) where m.Id = ?;', id, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
        // console.log(`Movie With ID ${id}`);
      }
    });
  });
}

// getMovieWithID(51).then(data => console.log(data));
// const newData = { Description: 'dink chuk bhum chuk' };

// Update the Movie with given ID
function updateMovieWithID(id, data) {
  const query = `update Movies set ? where Id = ${id};`;
  return new Promise((resolve, reject) => {
    connection.query(query, data, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
        // console.log(`Updated Movie With ID ${id}`);
      }
    });
  });
}

// updateMovieWithID(51, newData).catch((error) => {
//   console.log(error);
// });

// Delete the Movie with given ID
function deleteMovieWithID(id) {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM Movies WHERE Id = ${id}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
        // console.log(`Deleted Movie With ID ${id}`);
      }
    });
  });
}

// deleteMovieWithID(51);
// connection.end();

// addNewMovie(newObject)
//   .then(() => updateMovieWithID(51, newData))
//   .then(() => getMovieWithID(51))
//   .then(data => console.log(data))
//   .then(() => deleteMovieWithID(51))
//   .then(() => getAllMovies())
//   .then(data => console.log(data))
//   .then(() => connection.end())
//   .catch(error => console.log(error));

module.exports = {
  getAllMovies,
  getMovieWithID,
  addNewMovie,
  updateMovieWithID,
  deleteMovieWithID,
};
