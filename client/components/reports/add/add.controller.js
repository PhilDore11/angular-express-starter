'use strict';

angular.module('app.reports.add', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.add', {
      url: '/add',
      templateUrl: 'components/reports/form/form.tpl.html',
      controller: 'ReportAddController',
      resolve: {
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
        title: {
          label: 'Add Report'
        },
        actions: [{
          icon: 'list',
          state: 'reports.list',
          label: 'Back to List'
        }]
      }
    });
  })

  .controller('ReportAddController', function($scope, facilityTypes, outbreakTypes, outbreakAgents, ReportsService) {
    $scope.report = {};

    $scope.facilityTypes = facilityTypes;
    $scope.outbreakTypes = outbreakTypes;
    $scope.outbreakAgents = outbreakAgents;

    $scope.saveButtonLabel = 'Create new Report';
    $scope.reportSuccessLabel = 'Report has been created';

    $scope.onSave = function() {
      ReportsService.addReport($scope.report, $scope.reportSuccessLabel);
    };
  });
