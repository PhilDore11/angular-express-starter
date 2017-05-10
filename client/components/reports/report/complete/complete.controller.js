'use strict';

angular.module('app.reports.report.complete', [])

  .controller('ReportEditCompleteController', function($scope, $state, ReportsService) {
    $scope.onSave = function() {
      return ReportsService.completeReport($scope.report).then(function() {
        $state.go('reports.report.view', {reportId: $scope.report._id});
      });
    };
  });
