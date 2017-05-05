'use strict';

angular.module('app.reports.report.outbreakInfo', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.report.outbreakInfo', {
      url: '/outbreakInfo',
      templateUrl: 'components/reports/form/form.tpl.html',
      controller: 'ReportEditOutbreakInfoController',
      resolve: {
        report: function($stateParams, ReportsService) {
          return ReportsService.getReport($stateParams.reportId);
        },
        facilityTypes: function(LookupsService) {
          return LookupsService.getFacilityTypes();
        },
        outbreakTypes: function(LookupsService) {
          return LookupsService.getOutbreakTypes();
        },
        outbreakAgents: function(LookupsService) {
          return LookupsService.getOutbreakAgents();
        }
      }
    });
  })

  .controller('ReportEditOutbreakInfoController', function($scope, $state, report, facilityTypes, outbreakTypes, outbreakAgents, ReportsService) {
    $scope.report = report;

    $scope.facilityTypes = facilityTypes;
    $scope.outbreakTypes = outbreakTypes;
    $scope.outbreakAgents = outbreakAgents;

    $scope.saveButtonLabel = 'Save Report';

    $scope.onSave = function() {
      ReportsService.saveReport($scope.report, 'Report has been updated').then(function() {
        $state.go('^.success');
      });
    };
  });
