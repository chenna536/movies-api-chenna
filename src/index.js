const express = require('express');

const cors = require('cors');

const app = express();

const PORT = 5070;

const { directorRouter } = require('./routes/directors');
const { movieRouter } = require('./routes/movies');

app.use(cors());
app.use('/api/directors/', directorRouter);
app.use('/api/movies/', movieRouter);

app.get('/products/', (req, res, next) => {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.listen(PORT, () => {
  console.log('server started...');
});
