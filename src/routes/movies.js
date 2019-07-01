const express = require('express');
const bodyParser = require('body-parser');
const functionsOfMovies = require('../models/movie.js');

const movieRouter = express.Router();

movieRouter.use(bodyParser.json());

movieRouter.get('/', (req, res) => {
  functionsOfMovies.getAllMovies().then((data) => {
    res.status(200).send(data);
  });
});

movieRouter.get('/:Id', (request, response) => {
  functionsOfMovies.getMovieWithID(request.params.Id).then((data) => {
    response.status(200).send(data);
  });
});

movieRouter.delete('/:Id', (req, res) => {
  functionsOfMovies.deleteMovieWithID(req.params.Id).then((data) => {
    res.status(200).send(data);
  });
});

movieRouter.put('/:Id', (req, res) => {
  functionsOfMovies.updateMovieWithID(req.params.Id, req.body).then((data) => {
    res.status(200).send(data);
  });
});

movieRouter.post('/', (req, res) => {
  functionsOfMovies.addNewMovie(req.body).then((data) => {
    res.status(200).send(data);
  });
});

module.exports = { movieRouter };
