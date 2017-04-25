'use strict';

var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var config = require('./config');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://osrAdmin:osrAdminPwd@cluster0-shard-00-00-wcgvv.mongodb.net:27017,cluster0-shard-00-01-wcgvv.mongodb.net:27017,cluster0-shard-00-02-wcgvv.mongodb.net:27017/osr?authSource=admin&readPreference=primary&ssl=true');
mongoose.connection.on('error', function(err) {
  console.error(err, 'MongoDB Connection Error. Please make sure that MongoDB is running.');
});

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve the static client files
app.use(express.static(path.join(__dirname, '../client')));

// set up the routes
require('./routes')(app);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err);
});

// start the server
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
