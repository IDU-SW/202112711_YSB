const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./config/db.js');
const bodyParser = require('body-parser');

const { urlencoded } = require('body-parser');

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/habit', (req, res) => {
  db.query('SELECT * FROM habit', (err, data) => {
    if (!err) res.send({ habits: data });
    else res.send(err);
  });
});

app.post('/habit/insert', (req, res) => {
  const name = req.body.name;
  const count = req.body.count;
  const sqlQuery = 'INSERT INTO habit ( name, count) VALUES (?,?,?)';
  db.query(sqlQuery, [name, count], (err, result) => {
    res.send('success!');
    console.log(name, count);
  });
});

app.delete('/habit/:id', (req, res) => {
  const selectedId = req.params.id;
  const sqlQuery = 'DELETE FROM habit WHERE id=?';
  db.query(sqlQuery, [selectedId], (err, result) => {
    res.send('delete!');
    console.log(selectedId);
  });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
