var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); //index.js
var nosotrosRouter = require('./routes/nosotros'); //nosotros.js
var productosRouter = require('./routes/productos'); //productos.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/productos', productosRouter);

//Links de prueba!
app.get('/biografia', function(req,res){
  res.send("Soy la pagina Acerca de mi");
});

app.get('/disenios', function(req,res){
  res.send("Estos son los diseños disponibles");
});

app.get('/contacto', function(req,res){
  res.send("Esta es la pagina de contacto");
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
