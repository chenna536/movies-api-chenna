// Creating connection between mysql and localhost
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'keshav',
  password: 'keshav@123',
  database: 'keshav',
});

// export required data
module.exports.connection = connection;
