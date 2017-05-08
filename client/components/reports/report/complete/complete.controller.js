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

    $stateProvider.state('reports.report.complete.edit', {
      url: '/report',
      views: {
        comments: {
          templateUrl: 'components/reports/report/comments/comments.tpl.html',
          controller: 'ReportEditCommentsController'
        }
      }
    });
  })

  .controller('ReportCompleteController', function($scope, $state, report, ReportsService) {
    $scope.report = angular.copy(report);

    $scope.onSave = function() {
      return ReportsService.completeReport($scope.report).then(function() {
        $state.go('reports.report.view', {reportId: report._id});
      });
    };
  });
