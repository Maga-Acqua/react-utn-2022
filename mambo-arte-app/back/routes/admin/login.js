var express = require('express');
var router = express.Router();
var usersModel = require('./../../models/usersModel');

router.post('/', async(req, res, next) =>{
  try{
    var user = req.body.user;
    var password = req.body.password;
    var data = await usersModel.getUserByUserNameAndPassword(user, password);
    if(data != undefined){
      req.session.id = data.id;
      req.session.user = data.user;
      res.redirect('admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error){
    console.log(error);
  }
})

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.render('admin/login', { 
    layout: 'admin/layout' });
});

module.exports = router;
