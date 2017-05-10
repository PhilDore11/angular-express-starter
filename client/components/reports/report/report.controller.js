'use strict';

angular.module('app.reports.report', [
  'app.reports.report.outbreakInfo',
  'app.reports.report.facilityInfo',
  'app.reports.report.infectionInfo',
  'app.reports.report.dataEntry',
  'app.reports.report.epiCurve',
  'app.reports.report.comments',
  'app.reports.report.complete'
])

  .config(function($stateProvider) {
    $stateProvider.state('reports.report', {
      url: '/{reportId}',
      templateUrl: 'components/reports/report/report.tpl.html',
      controller: 'ReportViewController',
      resolve: {
        report: function($stateParams, ReportsService) {
          return ReportsService.getReport($stateParams.reportId);
        }
      }
    });

    $stateProvider.state('reports.report.view', {
      url: '/view',
      views: {
        outbreakInfo: {
          templateUrl: 'components/reports/report/outbreakInfo/outbreakInfo.tpl.html',
          controller: 'ReportViewInfoController'
        },
        facilityInfo: {
          templateUrl: 'components/reports/report/facilityInfo/facilityInfo.tpl.html',
          controller: 'ReportViewInfoController'
        },
        infectionInfo: {
          templateUrl: 'components/reports/report/infectionInfo/infectionInfo.tpl.html',
          controller: 'ReportViewInfoController'
        },
        epiCurve: {
          templateUrl: 'components/reports/report/epiCurve/epiCurve.tpl.html',
          controller: 'ReportEditEpiCurveController',
        },
        comments: {
          templateUrl: 'components/reports/report/comments/comments.tpl.html',
          controller: 'ReportViewInfoController'
        },
        complete: {
          templateUrl: 'components/reports/report/complete/complete.tpl.html',
          controller: 'ReportViewInfoController'
        },
      }
    });
  })

  .controller('ReportViewController', function($scope, $state, $mdDialog, report) {
    $scope.report = angular.copy(report);

    function showEditDialog(ev, templateUrl, controller) {
      $mdDialog.show({
        controller: controller,
        templateUrl: templateUrl,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true,
        scope: $scope,
        preserveScope: true,
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
      }).then(function() {
        $scope.report = report; // Reset Report
      });
    }

    $scope.editOutbreakInfo = function(ev) {
      showEditDialog(
        ev,
        'components/reports/report/outbreakInfo/outbreakInfoModal.tpl.html',
        'ReportEditOutbreakInfoController'
      );
    };
    $scope.editFacilityInfo = function(ev) {
      showEditDialog(
        ev,
        'components/reports/report/facilityInfo/facilityInfoModal.tpl.html',
        'ReportEditFacilityInfoController'
      );
    };
    $scope.editInfectionInfo = function(ev) {
      showEditDialog(
        ev,
        'components/reports/report/infectionInfo/infectionInfoModal.tpl.html',
        'ReportEditInfectionInfoController'
      );
    };
    $scope.editEpiCurve = function(ev) {
      showEditDialog(
        ev,
        'components/reports/report/dataEntry/dataEntryModal.tpl.html',
        'ReportEditDataEntryController'
      );
    };
    $scope.editComments = function(ev) {
      showEditDialog(
        ev,
        'components/reports/report/comments/commentsModal.tpl.html',
        'ReportEditCommentsController'
      );
    };
    $scope.editCompletionInfo = function(ev) {
      showEditDialog(
        ev,
        'components/reports/report/complete/completeModal.tpl.html',
        'ReportEditCompleteController'
      );
    };
  })

  .controller('ReportViewInfoController', function($scope) {
    $scope.readonly = true;
  });
