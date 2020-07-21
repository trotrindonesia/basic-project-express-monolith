const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const data = {
    message: 'Coming Soon!'
  };
  res.send(data);
});

module.exports = router;
