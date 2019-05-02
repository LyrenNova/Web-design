var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//------------------------------------------------------------
// 增加引用模組
//------------------------------------------------------------
var product_add_form = require('./routes/product_add_form');
var product_add = require('./routes/product_add');
var customer_add_form = require('./routes/customer_add_form');
var customer_add = require('./routes/employee_add');
var employee_add_form = require('./routes/employee_add_form');
var employee_add = require('./routes/employee_add');
var supplier_add_form = require('./routes/supplier_add_form');
var supplier_add = require('./routes/supplier_add');
var protype_add_form = require('./routes/protype_add_form');
var protype_add = require('./routes/protype_add');
//------------------------------------------------------------
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//-----------------------------------------
// 設定模組使用方式
//-----------------------------------------
app.use('/product/add/form', product_add_form);
app.use('/product/add', product_add);
app.use('/customer/add/form', customer_add_form);
app.use('/customer/add', customer_add);
app.use('/employee/add/form', employee_add_form);
app.use('/employee/add', employee_add);
app.use('/supplier/add/form', supplier_add_form);
app.use('/supplier/add', supplier_add);
app.use('/protype/add/form', protype_add_form);
app.use('/protype/add', protype_add);
//-----------------------------------------
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