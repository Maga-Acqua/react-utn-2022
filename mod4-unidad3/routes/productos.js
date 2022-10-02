var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("Aqui se encuentran los productos disponibles");
  res.render('productos', { title: 'PRODUCTOS' });
});

module.exports = router;