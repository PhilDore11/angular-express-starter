'use strict';

angular.module('app.reports.report.dataEntry', [])

  .controller('ReportEditDataEntryController', function($scope, $filter, ReportsService) {
    // Unit
    $scope.newUnit = {};
    $scope.addDataUnit = function() {
      if (_.isEmpty($scope.report.epiData)) {
        $scope.report.epiData = [];
      }

      var newUnitData = angular.copy($scope.report.epiData[0]);
      newUnitData.name = $scope.newUnit.name;
      _.each(newUnitData.data, function(data) {
        data.residentCases = null;
        data.staffCases = null;
      });
      $scope.report.epiData.push(newUnitData);
      $scope.newUnit = {};
    };
    $scope.removeDataUnit = function(index) {
      $scope.report.epiData.splice(index, 1);
    };

    // Data
    $scope.addDataRow = function(unitData) {
      var lastUnitData = unitData.data.slice(-1)[0];
      unitData.data.push({
        date: lastUnitData.date.addDays(1)
      });
    };
    $scope.removeDataRow = function(unitData, index) {
      unitData.data.splice(index, 1);
    };

    // Save
    $scope.onSave = function() {
      return ReportsService.saveReport($scope.report, 'Report Data Saved');
    };
  });
