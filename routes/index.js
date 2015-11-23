var express = require('express');
var router = express.Router();

/* GET and POST Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Amateur Geologist Federation' });
});

router.post('/', function(req, res, next) {
  res.render('index', {title: 'The Amateur Geologist Federation' });
});

/* GET and POST About page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

router.post('/about', function(req, res, next) {
  res.render('about');
});

/* GET and POST Map page. */
router.get('/map', function(req, res, next) {
  res.render('map');
});

router.post('/map', function(req, res, next) {
  res.render('map');
});

module.exports = router;
