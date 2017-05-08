'use strict';

angular.module('app.reports.report.facilityInfo', [])

  .controller('ReportEditFacilityInfoController', function($scope, facilityTypes, ReportsService) {
    $scope.facilityTypes = facilityTypes;

    $scope.onSave = function() {
      return ReportsService.saveReport($scope.report, 'Facility Information Saved.');
    };
  });
