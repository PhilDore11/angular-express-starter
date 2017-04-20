'use strict';

module.exports = function(app) {
  app.use('/api/reports', require('./api/reports'));
  app.use('/api/lookups', require('./api/lookups'));
};
