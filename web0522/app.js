var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//------------------------------------------------------------
// 增加引用模組
//------------------------------------------------------------
var product_update_no = require('./routes/product_update_no');
var product_update_form = require('./routes/product_update_form');
var product_update = require('./routes/product_update');
var customer_update_no = require('./routes/customer_update_no');
var customer_update_form = require('./routes/customer_update_form');
var customer_update = require('./routes/customer_update');
//------------------------------------------------------------
// 增加引用模組
//------------------------------------------------------------
var product_list = require('./routes/product_list');
//------------------------------------------------------------
var user_login_form = require('./routes/user_login_form');
var user_login = require('./routes/user_login');
var user_logout = require('./routes/user_logout');
var user_show = require('./routes/user_show');

var checkAuth = require('./routes/checkAuth');
//------------------------------------------------------------
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//--------------------------------------------------------------------
// 增加引用express-session
//--------------------------------------------------------------------
var session = require('express-session');
app.use(session({secret: '請更改成一個隨機字串用來加密產生的signedCookie', cookie: { maxAge: 60000 }}));
//--------------------------------------------------------------------
//-----------------------------------------
// 設定模組使用方式
//-----------------------------------------
app.use('/product/update/no', product_update_no);
app.use('/product/update/form', product_update_form);
app.use('/product/update', product_update);
app.use('/customer/update/no', customer_update_no);
app.use('/customer/update/form', customer_update_form);
app.use('/customer/update', customer_update);
//-----------------------------------------
// 設定模組使用方式
//-----------------------------------------
app.use('/product/list', checkAuth, product_list);
//-----------------------------------------
app.use('/user/login/form', user_login_form);
app.use('/user/login', user_login);
app.use('/user/logout', user_logout);
app.use('/user/show', user_show);
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
