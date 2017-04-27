'use strict';

angular.module('app.reports.add.success', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.add.success', {
      url: '/success',
      templateUrl: 'components/reports/add/success/success.tpl.html',
      controller: 'ReportAddSuccessController',
      resolve: {
        report: function($stateParams, ReportsService) {
          return ReportsService.getReport($stateParams.reportId);
        }
      },
      data: {
        title: {
          label: 'Report Saved',
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

  .controller('ReportAddSuccessController', function($scope, $filter, report) {
    $scope.report = report;
  });
