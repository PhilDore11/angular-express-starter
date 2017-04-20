'use strict';

var express = require('express');
var router = express.Router();

/*
* Return a list of facility types
*/
var facilityTypes = require('./facilityTypes.js');
router.get('/facility-types', function(req, res) {
  res.json(facilityTypes);
});

/*
* Return a list of outbreak types
*/
var outbreakTypes = require('./outbreakTypes.js');
router.get('/outbreak-types', function(req, res) {
  res.json(outbreakTypes);
});

/*
* Return a list of outbreak agents
*/
var outbreakAgents = require('./outbreakAgents.js');
router.get('/outbreak-agents', function(req, res) {
  res.json(outbreakAgents);
});

module.exports = router;
