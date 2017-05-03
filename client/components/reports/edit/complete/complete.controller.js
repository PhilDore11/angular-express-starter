'use strict';

angular.module('app.reports.edit.complete', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.edit.complete', {
      url: '/complete',
      templateUrl: 'components/reports/edit/complete/complete.tpl.html',
      controller: 'ReportCompleteController',
      resolve: {
        report: function($stateParams, ReportsService) {
          return ReportsService.getReport($stateParams.reportId);
        }
      },
      data: {
        title: {
          label: 'Complete Report',
          showReportName: true
        },
        actions: [{
          icon: 'list',
          state: 'reports.list',
          label: 'Back to List'
        }]
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
