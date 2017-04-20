'use strict';

angular.module('app.reports', [
  'app.reports.list',
  'app.reports.add',
  'app.reports.edit'
])

  .config(function($stateProvider) {
    $stateProvider.state('reports', {
      abstract: true,
      url: '/reports',
      template: '<div ui-view></div>'
    });
  });
