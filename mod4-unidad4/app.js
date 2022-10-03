var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'m4g4l1n0d3',
  resave:false,
  saveUninitialized:true
}))

//app.use('/', indexRouter);

app.get('/', function(req,res){
  var conocido= Boolean(req.session.nombre);
  var fecha = new Date(req.session.fechaNac);
  var edad = getEdad(fecha);

  res.render('index', {
    title:'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre,
    edad:edad
  })
});

function getEdad(fechaNac) {
  let hoy = new Date()
  let edad = hoy.getFullYear() - fechaNac.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNac.getMonth()
  if (diferenciaMeses < 0 
    || (diferenciaMeses === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--;
  }
  return edad;
}

app.post('/ingresar', function(req,res){
  if(req.body.nombre && req.body.fechaNac){
    req.session.nombre= req.body.nombre;
    req.session.fechaNac= req.body.fechaNac;
  }
  res.redirect('/');
});

app.get('/salir', function(req,res){
  req.session.destroy();
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
