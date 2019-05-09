var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//------------------------------------------------------------
// 增加引用模組
//------------------------------------------------------------
var product_query_form = require('./routes/product_query_form');
var product_query = require('./routes/product_query');
var customer_query_form = require('./routes/customer_query_form');
var customer_query = require('./routes/customer_query');
var product_remove_form = require('./routes/product_remove_form');
var product_remove = require('./routes/product_remove');
var customer_remove_form = require('./routes/customer_remove_form');
var customer_remove = require('./routes/customer_remove');
var employee_remove_form = require('./routes/employee_remove_form');
var employee_remove = require('./routes/employee_remove');
var supplier_remove_form = require('./routes/supplier_remove_form');
var supplier_remove = require('./routes/supplier_remove');
//------------------------------------------------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//-----------------------------------------
// 設定模組使用方式
//-----------------------------------------
app.use('/product/query/form', product_query_form);
app.use('/product/query', product_query);
app.use('/customer/query/form', customer_query_form);
app.use('/customer/query', customer_query);
app.use('/product/remove/form', product_remove_form);
app.use('/product/remove', product_remove);
app.use('/customer/remove/form', customer_remove_form);
app.use('/customer/remove', customer_remove);
app.use('/employee/remove/form', employee_remove_form);
app.use('/employee/remove', employee_remove);
app.use('/supplier/remove/form', supplier_remove_form);
app.use('/supplier/remove', supplier_remove);
//-----------------------------------------
app.use('/', indexRouter);
app.use('/users', usersRouter);


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
