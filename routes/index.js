var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/logout', function(req, res, next) {
  res.clearCookie('session');
  res.redirect('/');
});

module.exports = router;
