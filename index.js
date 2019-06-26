const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('hello chenna');
});

app.get('/movies', (req, res) => {
  res.send('getting movies...');
});

app.listen(port, () => console.log('server started ... at port 3000'));
