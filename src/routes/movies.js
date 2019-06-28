const express = require('express');

const app = express();

const functionsOfMovies = require('../models/movie');

const { getAllMovies } = functionsOfMovies;
const { getMovieWithID } = functionsOfMovies;

app.get('/movies', (req, res) => {
  getAllMovies().then((data) => {
    res.status(200).send(data);
  });
});

app.get('/movies/:Id', (request, response) => {
  getMovieWithID(request.params.Id).then((data) => {
    response.status(200).send(data);
  });
});
