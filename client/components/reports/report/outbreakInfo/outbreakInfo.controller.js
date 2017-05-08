'use strict';

angular.module('app.reports.report.outbreakInfo', [])

  .controller('ReportEditOutbreakInfoController', function($scope, ReportsService) {

    $scope.onSave = function() {
      return ReportsService.saveReport($scope.report, 'Outbreak Information Saved.');
    };
  });
