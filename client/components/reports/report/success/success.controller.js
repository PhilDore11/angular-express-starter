'use strict';

angular.module('app.reports.report.success', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.report.success', {
      url: '/success',
      templateUrl: 'components/reports/report/success/success.tpl.html',
      controller: 'ReportEditSuccessController',
      resolve: {
        report: function($stateParams, ReportsService) {
          return ReportsService.getReport($stateParams.reportId);
        }
      }
    });
  })

  .controller('ReportEditSuccessController', function($scope, $filter, report) {
    $scope.report = report;
  });
