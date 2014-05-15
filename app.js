/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var bodyParser = require('body-parser');

var app = express();
// Configuration
mongoose.connect('mongodb://localhost:27017/myLaptops');
require('./models/laptop');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

var laptop = require('./routes/laptops.js');
// Routes

app.get('/', routes.index);
app.get('/home', routes.home);
app.post('/home', routes.home);
app.get('/about', routes.about);
app.post('/laptops', laptop.formSend);
app.get('/savedLaptops', laptop.saved);
app.get('/saved', routes.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

