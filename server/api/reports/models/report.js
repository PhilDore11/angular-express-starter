var _ = require('lodash');

var mongoose = require('mongoose');

// create a schema
var reportSchema = new mongoose.Schema({
  modifiedDate: Date,
  createdDate: Date,

  status: {
    type: String,
    enum: _.values(global.REPORT_STATUSES)
  },

  // COMPLETE
  primaryInvestigator: String,
  completedDate: Date,

  name: String,
  outbreakNumber: String,
  reportedDate: Date,
  facilityName: String,
  facilityType: {
    key: String,
    name: String
  },
  outbreakType: {
    key: String,
    name: String
  },
  primaryAgent: {
    key: String,
    name: String
  },
  secondaryAgent: {
    key: String,
    name: String
  },
  data: Array,

  successes: String,
  improvements: String
});

// the schema is useless so far
// we need to create a model using it
var Report = mongoose.model('Report', reportSchema);

// make this available to our users in our Node applications
module.exports = Report;
