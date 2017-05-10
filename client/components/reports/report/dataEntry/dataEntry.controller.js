'use strict';

angular.module('app.reports.report.dataEntry', [])

  .controller('ReportEditDataEntryController', function($scope, ReportsService) {
    // Data
    $scope.addDataRow = function() {
      if (_.isEmpty($scope.report.data)) {
        $scope.report.data = [];
      }
      $scope.report.data.push({});
    };
    $scope.removeDataRow = function(index) {
      $scope.report.data.splice(index, 1);
    };

    // Save
    $scope.onSave = function() {
      return ReportsService.saveReport($scope.report, 'Report Data Saved');
    };
  });
