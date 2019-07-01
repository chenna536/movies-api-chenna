const express = require('express');

const app = express();

const PORT = 3000;

const { directorRouter } = require('./routes/directors');
const { movieRouter } = require('./routes/movies');

app.use('/api/directors/', directorRouter);
app.use('/api/movies/', movieRouter);

app.listen(PORT, () => {
  console.log('server started.');
});
