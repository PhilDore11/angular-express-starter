'use strict';

angular.module('app.reports.add', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.add', {
      url: '/add',
      templateUrl: 'components/reports/add/add.tpl.html',
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
      }
    });

    $stateProvider.state('reports.add.report', {
      url: '/report',
      views: {
        outbreakInfo: {
          templateUrl: 'components/reports/report/outbreakInfo/outbreakInfo.tpl.html',
          controller: 'ReportEditOutbreakInfoController'
        },
        facilityInfo: {
          templateUrl: 'components/reports/report/facilityInfo/facilityInfo.tpl.html',
          controller: 'ReportEditFacilityInfoController'
        },
        infectionInfo: {
          templateUrl: 'components/reports/report/infectionInfo/infectionInfo.tpl.html',
          controller: 'ReportEditInfectionInfoController'
        }
      }
    });
  })

  .controller('ReportAddController', function($scope, $state, facilityTypes, outbreakTypes, outbreakAgents, ReportsService) {
    $scope.report = {};

    $scope.facilityTypes = facilityTypes;
    $scope.outbreakTypes = outbreakTypes;
    $scope.outbreakAgents = outbreakAgents;

    $scope.saveButtonLabel = 'Create new Report';
    $scope.reportSuccessLabel = 'Report has been created';

    $scope.onSave = function() {
      ReportsService.addReport($scope.report, $scope.reportSuccessLabel).then(function(report) {
        $state.go('reports.report.view', {reportId: report._id});
      });
    };
  });
