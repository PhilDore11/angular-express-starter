'use strict';

angular.module('app.reports.edit', [
  'app.reports.edit.outbreakInfo',
  'app.reports.edit.dataEntry',
  'app.reports.edit.epiCurve',
  'app.reports.edit.success'
])

  .config(function($stateProvider) {
    $stateProvider.state('reports.edit', {
      abstract: true,
      url: '/{reportId}',
      template: '<div ui-view></div>'
    });
  });
