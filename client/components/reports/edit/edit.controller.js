'use strict';

angular.module('app.reports.edit', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.edit', {
      url: '/edit/{reportId}',
      templateUrl: 'components/reports/form/form.tpl.html',
      controller: 'ReportEditController',
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
      },
      data: {
        icon: 'edit',
        label: 'Edit Report'
      }
    });
  })

  .controller('ReportEditController', function($scope, report, facilityTypes, outbreakTypes, outbreakAgents, ReportsService) {
    $scope.report = report;

    $scope.facilityTypes = facilityTypes;
    $scope.outbreakTypes = outbreakTypes;
    $scope.outbreakAgents = outbreakAgents;

    $scope.saveButtonLabel = 'Save Report';
    $scope.reportSuccessLabel = 'Report has been updated';

    $scope.onSave = function() {
      ReportsService.saveReport($scope.report, $scope.reportSuccessLabel);
    };
  });
