var mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: '3307',
  password: 'cometrue',
  database: 'habit',
});

module.exports = db;
