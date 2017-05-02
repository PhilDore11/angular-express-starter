'use strict';

var _ = require('lodash');

var express = require('express');
var router = express.Router();

var Report = require('./models/report.js');

function validationError(res, err) {
  res.status(422).json(err);
}

/*
* Return a list of reports
*/
router.get('/', function(req, res) {
  Report.find({}, function(err, reports) {
    if (err) {
      validationError(res, err);
    } else {
      res.json(reports);
    }
  });
});

/*
* Return a report
*/
router.get('/:id', function(req, res) {
  Report.findById(req.params.id, function(err, report) {
    if (err) {
      validationError(res, err);
    } else {
      res.json(report);
    }
  });
});


/*
* Create a report
*/
router.post('/', function(req, res) {
  var reportData = req.body;
  reportData.createdDate = new Date();
  reportData.modifiedDate = new Date();

  var newReport = new Report(reportData);

  newReport.save(function(err, report) {
    if (err) {
      validationError(res, err);
    } else {
      res.json(report);
    }
  });
});

/*
* Update a report
*/
router.put('/:id', function(req, res) {
  Report.findById(req.params.id, function(err, report) {
    if (err) {
      validationError(res, err);
    } else {
      report = _.assign(report, req.body);

      report.modifiedDate = new Date();

      report.save(function(err, report) {
        if (err) {
          validationError(res, err);
        } else {
          res.json(report);
        }
      });
    }
  });
});


/*
* Delete a report
*/
router.delete('/:id', function(req, res) {
  Report.findByIdAndRemove(req.params.id, function(err, report) {
    if (err) {
      validationError(res, err);
    } else {
      res.json(report);
    }
  });
});

module.exports = router;
