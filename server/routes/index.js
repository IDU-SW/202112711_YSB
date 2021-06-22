const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('http://localhost:3001/api/');
  res.send({
    habits: [
      { id: 1, name: 'study node', count: 0 },
      { id: 2, name: 'working', count: 0 },
      { id: 3, name: 'sleeping', count: 0 },
    ],
  });
});

module.exports = router;
