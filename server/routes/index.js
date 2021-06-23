const express = require('express');
const router = express.Router();
// const mysql = require('mysql');

// const db = mysql.createPool({
//   host: 'localhost',
//   port: 3307,
//   user: 'root',
//   password: 'cometrue',
//   database: 'habit',
// });

// router.get('/', (req, res) => {
//   // console.log('http://localhost:3001/api/');
//   // res.send({
//   //   habits: [
//   //     { id: 1, name: 'study node', count: 0 },
//   //     { id: 2, name: 'working', count: 0 },
//   //     { id: 3, name: 'sleeping', count: 0 },
//   //   ],
//   // });
//   const sqlQuery = "INSERT INTO habit (name, count) VALUES ('노드 공부', 1)";
//   db.query(sqlQuery, (err, result) => {
//     res.send('success!');
//   });
// });

module.exports = router;
