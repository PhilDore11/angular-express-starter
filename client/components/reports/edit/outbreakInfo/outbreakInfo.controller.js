'use strict';

angular.module('app.reports.edit.outbreakInfo', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.edit.outbreakInfo', {
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
      },
      data: {
        title: {
          label: 'Report Information',
          showReportName: true
        },
        actions: [{
          icon: 'list',
          state: 'reports.list',
          label: 'Back to List'
        }, {
          icon: 'border_all',
          state: 'reports.edit.dataEntry',
          label: 'Data Entry'
        }, {
          icon: 'show_chart',
          state: 'reports.edit.epiCurve',
          label: 'Epi Curve'
        }]
      }
    });
  })

  .controller('ReportEditOutbreakInfoController', function($scope, report, facilityTypes, outbreakTypes, outbreakAgents, ReportsService) {
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
