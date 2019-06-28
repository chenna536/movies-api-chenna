const express = require('express');

const app = express();

const functionsOfDirectors = require('../models/director');

const { getAllDirectors } = functionsOfDirectors;
const { getDirectorWithID } = functionsOfDirectors;
const { updateDirectorWithID } = functionsOfDirectors;
const deleteDirectorWithID = functionsOfDirectors;

app.get('/directors', (req, res) => {
  getAllDirectors().then((data) => {
    res.status(200).send(data);
  });
});

app.get('/directors/:Id', (request, response) => {
  getDirectorWithID(request.params.Id).then((data) => {
    response.status(200).send(data);
  });
});

app.delete('/directors/:Id', (req, res) => {
  deleteDirectorWithID(req.params.Id).then((data) => {
    res.status(200).send(`${data}+deleted`);
  });
});
