var express = require('express');
var router = express.Router();

/* Making a page for mydata */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Kaden Smith' });
});

module.exports = router;
