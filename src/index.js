const express = require('express');

const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
  res.send('hello chenna');
});


app.listen(PORT, () => console.log('server started ... at port 3000'));
