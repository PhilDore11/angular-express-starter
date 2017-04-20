'use strict';

var express = require('express');
var router = express.Router();

var stubReports = require('./reports.stub.js');

/*
* Return a list of reports
*/
router.get('/', function(req, res) {
  res.json(stubReports);
});

/*
* Return a report
*/
router.get('/:id', function(req, res) {
  var report = stubReports.find(function(item) {
    return item.id === parseInt(req.params.id);
  });
  res.json(report);
});


/*
* Create a report
*/
router.post('/:id', function(req, res) {
  res.send('Report Created!');
});

/*
* Update a report
*/
router.post('/:id', function(req, res) {
  res.send('Report Updated!');
});


/*
* Delete a report
*/
router.delete('/:id', function(req, res) {
  res.send('Report Deleted!');
});

module.exports = router;
