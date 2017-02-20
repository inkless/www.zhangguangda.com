const express = require('express');
const router = express.Router();
const homeIp = require('../model/home_ip');

/* GET homeip. */
router.get('/', (req, res, next) => {
  res.send('Please specify name to get the ip');
});

router.get('/:name', (req, res, next) => {
  homeIp.get(req.params.name)
    .then(data => {
      if (data) {
        res.send(data.ip);
      } else {
        res.send('Not found');
      }
    })
    .catch(err => {
      console.log(err);
      res.send('Error');
    });
});

router.post('/:name', (req, res, next) => {
  homeIp.save(req.params.name, req.body.ip)
    .then(data => {
      if (data) {
        res.send('Okay');
      } else {
        res.send('Not okay');
      }
    })
    .catch(err => {
      console.log(err);
      res.send('Error');
    });
});

module.exports = router;
