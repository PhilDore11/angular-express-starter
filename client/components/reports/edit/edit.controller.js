'use strict';

angular.module('app.reports.edit', [
  'app.reports.edit.outbreakInfo',
  'app.reports.edit.dataEntry',
  'app.reports.edit.epiCurve',
  'app.reports.edit.complete',
  'app.reports.edit.success',
  'app.reports.edit.print',
])

  .config(function($stateProvider) {
    $stateProvider.state('reports.edit', {
      abstract: true,
      url: '/{reportId}',
      template: '<div ui-view></div>'
    });
  });
