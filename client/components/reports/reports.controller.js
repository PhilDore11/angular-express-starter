'use strict';

angular.module('app.reports', [
  'app.reports.list',
  'app.reports.add',
  'app.reports.report'
])

  .config(function($stateProvider) {
    $stateProvider.state('reports', {
      abstract: true,
      url: '/reports',
      template: '<div ui-view layout-margin></div>'
    });
  });
