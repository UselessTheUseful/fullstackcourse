const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Services Page');
});

module.exports = router;