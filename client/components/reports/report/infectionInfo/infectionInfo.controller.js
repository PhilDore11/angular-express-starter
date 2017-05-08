'use strict';

angular.module('app.reports.report.infectionInfo', [])

  .controller('ReportEditInfectionInfoController', function($scope, outbreakTypes, outbreakAgents, ReportsService) {
    $scope.outbreakTypes = outbreakTypes;
    $scope.outbreakAgents = outbreakAgents;

    $scope.onSave = function() {
      return ReportsService.saveReport($scope.report, 'Infection Information Saved.');
    };
  });
