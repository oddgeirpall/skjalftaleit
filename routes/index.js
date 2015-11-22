var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Amateur Geologist Federation' });
});

/* GET About page */
router.get('/', function(req, res, next) {
  res.render('about')
})

module.exports = router;
