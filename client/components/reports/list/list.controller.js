'use strict';

angular.module('app.reports.list', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.list', {
      url: '/',
      templateUrl: 'components/reports/list/list.tpl.html',
      controller: 'ReportListController',
      resolve: {
        reports: function(ReportsService) {
          return ReportsService.getReports();
        }
      }
    });
  })

  .controller('ReportListController', function($scope, $state, reports, ReportsService) {
    $scope.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    $scope.reports = reports;


    $scope.deleteReport = function(reportId) {
      ReportsService.deleteReport(reportId).then(function() {
        $state.go('reports.list', {}, {reload: true});
      });
    };
  });
