const express = require('express');
const bodyParser = require('body-parser');
const functionsOfDirectors = require('../models/director');

const directorRouter = express.Router();

directorRouter.use(bodyParser.json());

directorRouter.get('/', (req, res) => {
  functionsOfDirectors.getAllDirectors().then((data) => {
    res.status(200).send(data);
  });
});

directorRouter.get('/:Id', (request, response) => {
  functionsOfDirectors.getDirectorWithID(request.params.Id).then((data) => {
    response.status(200).send(data);
  });
});

directorRouter.delete('/:Id', (req, res) => {
  functionsOfDirectors.deleteDirectorWithID(req.params.Id).then((data) => {
    res.status(200).send(data);
  });
});

directorRouter.put('/:Id', (req, res) => {
  functionsOfDirectors.updateDirectorWithID(req.params.Id, req.body).then((data) => {
    res.status(200).send(data);
  });
});

directorRouter.post('/', (req, res) => {
  functionsOfDirectors.addNewDirector(req.body).then((data) => {
    res.status(200).send(data);
  });
});

module.exports = { directorRouter };
