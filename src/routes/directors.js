const express = require('express');
const bodyParser = require('body-parser');
// const Joi = require('@hapi/joi');
const functionsOfDirectors = require('../models/director');
// require the validate
const schemas = require('../models/validation.js');

const directorRouter = express.Router();

directorRouter.use(bodyParser.json());

directorRouter.get('/', (req, res) => {
  functionsOfDirectors.getAllDirectors().then((data) => {
    res.status(200).send(data);
  });
});

// console.log(schema.validate(schema.directorSchema, request.params.Id).error);

directorRouter.get('/:id', (request, response) => {
  // call the validate function
  // const validate = Joi.validate({ Id: request.params.id }, directorSchema);
  if (schemas.validateDirectorId(schemas.directorSchema, request.params.id).error === null) {
    functionsOfDirectors.getDirectorWithID(request.params.id).then((data) => {
      response.status(200).send(data);
    });
  } else {
    response.status(404).send('validate.error');
  }
});

directorRouter.delete('/:id', (req, res) => {
  if (schemas.validateDirectorId(schemas.directorSchema, req.params.id).error === null) {
    functionsOfDirectors.deleteDirectorWithID(req.params.id).then((data) => {
      res.status(200).send(data);
    });
  } else {
    res.status(404).send('validate.error');
  }
});

directorRouter.put('/:id', (req, res) => {
  if (schemas.validateDirectorIdName(schemas.directorSchema, req.params.id).error === null) {
    functionsOfDirectors.updateDirectorWithID(req.params.id, req.body).then((data) => {
      res.status(200).send(data);
    });
  } else {
    res.status(404).send('validate.error');
  }
});

directorRouter.post('/', (req, res) => {
  if (schemas.validateDirectorName(schemas.directorSchema, req.params.id).error === null) {
    functionsOfDirectors.addNewDirector(req.body).then((data) => {
      res.status(200).send(data);
    });
  } else {
    res.status(404).send('validate.error');
  }
});

module.exports = { directorRouter };
