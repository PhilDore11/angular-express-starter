'use strict';

angular.module('app.reports.report.complete', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.report.complete', {
      url: '/complete',
      templateUrl: 'components/reports/report/complete/complete.tpl.html',
      controller: 'ReportCompleteController',
      resolve: {
        report: function($stateParams, ReportsService) {
          return ReportsService.getReport($stateParams.reportId);
        }
      }
    });
  })

  .controller('ReportCompleteController', function($scope, $state, ReportsService, report) {
    $scope.report = report;

    $scope.onComplete = function() {
      ReportsService.completeReport($scope.report).then(function() {
        $state.go('^.success');
      });
    };
  });
