var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose    = require('mongoose');
var logger = require('morgan');
var apis = require('./routes/apis');
// var indexRoute = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/apis', apis);
// app.use('/', indexRoute);

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

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
// mongoose.connect('mongodb://blogadmin:0512!@blog@localhost:27017/blogDB');
mongoose.connect('mongodb://localhost/blogDB');

// mongoose.Promise = global.Promise;
// const mongodbConfig = config.database.mongo.master;
// const mongodbUri = `mongodb://${encodeURIComponent(mongodbConfig.user)}:${encodeURIComponent(mongodbConfig.password)}@${mongodbConfig.host}/${mongodbConfig.database}`;
// mongoose.connect(mongodbUri);
// const db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', ()=>{
//     console.log('connected to mongodb server');
// });

module.exports = app;
