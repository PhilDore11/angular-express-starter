'use strict';

angular.module('app.reports.edit.success', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.edit.success', {
      url: '/success',
      templateUrl: 'components/reports/edit/success/success.tpl.html',
      controller: 'ReportEditEpiCurveController',
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

  .controller('ReportEditEpiCurveController', function($scope, $filter, report) {
    $scope.report = report;
  });
