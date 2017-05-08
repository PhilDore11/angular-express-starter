'use strict';

angular.module('app.reports.report.comments', [])

  .controller('ReportEditCommentsController', function($scope, ReportsService) {

    $scope.onSave = function() {
      return ReportsService.saveReport($scope.report, 'Report Comments Saved.');
    };
  });
