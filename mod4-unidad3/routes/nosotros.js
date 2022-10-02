var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("Esta es la pagina de nosotros");
  res.render('nosotros', { title: 'NOSOTROS' });
});

module.exports = router;