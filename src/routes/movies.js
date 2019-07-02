const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('@hapi/joi');
const functionsOfMovies = require('../models/movie.js');

const movieRouter = express.Router();

const schemas = require('../models/validation.js');


movieRouter.use(bodyParser.json());

movieRouter.get('/', (req, res) => {
  functionsOfMovies.getAllMovies().then((data) => {
    res.status(200).send(data);
  });
});

movieRouter.get('/:id', (request, response) => {
  const validate = Joi.validate({ Id: request.params.id }, schemas.movieSchema);
  if (validate.error === null) {
    functionsOfMovies.getMovieWithID(request.params.id).then((data) => {
      response.status(200).send(data);
    });
  } else {
    response.status(400).send(validate.error.details[0].message);
  }
});

movieRouter.delete('/:id', (req, res) => {
  const validate = Joi.validate({ Id: req.params.id }, schemas.movieSchema);
  if (validate.error === null) {
    functionsOfMovies.deleteMovieWithID(req.params.id).then((data) => {
      res.status(200).send(data);
    });
  } else {
    res.status(400).send(validate.error.details[0].message);
  }
});

movieRouter.put('/:id', (req, res) => {
  const validate = Joi.validate({ Id: req.params.id }, schemas.movieSchema);
  if (validate.error === null) {
    functionsOfMovies.updateMovieWithID(req.params.id, req.body).then((data) => {
      res.status(200).send(data);
    });
  } else {
    res.status(400).send(validate.error.details[0].message);
  }
});

movieRouter.post('/', (req, res) => {
  const validate = Joi.validate(req.body, schemas.movieSchema);
  if (validate.error === null) {
    functionsOfMovies.addNewMovie(req.body).then((data) => {
      res.status(200).send(data);
    });
  } else {
    res.status(400).send(validate.error.details[0].message);
  }
});

module.exports = { movieRouter };
