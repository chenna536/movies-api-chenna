const express = require('express');

const app = express();

const PORT = 3000;

const functionsOfMovies = require('./movies');

const { getAllMovies } = functionsOfMovies;
// const { getMovieWithID} = functionsOfMovies.getMovieWithID;

const functionsOfDirectors = require('./directors');

const { getAllDirectors } = functionsOfDirectors;
const { getDirectorWithID } = functionsOfDirectors.getDirectorWithID;
const { updateDirectorWithID } = functionsOfDirectors.updateDirectorWithID;


app.get('/', (req, res) => {
  res.send('hello chenna');
});

// app.get('/movies', (req, res) => {
//   getAllMovies().then((data) => {
//     res.status(200).send(data);
//   });
// });

app.get('/directors', (req, res) => {
  getAllDirectors().then((data) => {
    res.status(200).send(data);
  });
});

// app.get('/directors:id', (req, res) => {
//   getDirectorWithID(req.params.id).then((data) => {
//     res.status(200).send(data);
//   });
// });

app.listen(PORT, () => console.log('server started ... at port 3000'));
