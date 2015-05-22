var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client')));

require('./routes')(app);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
