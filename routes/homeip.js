var express = require('express');
var router = express.Router();

/* GET homeip. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log(req);
  res.send('okay');
});

module.exports = router;
