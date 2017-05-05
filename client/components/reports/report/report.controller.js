'use strict';

angular.module('app.reports.report', [
  'app.reports.report.outbreakInfo',
  'app.reports.report.dataEntry',
  'app.reports.report.epiCurve',
  'app.reports.report.complete',
  'app.reports.report.success'
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
          templateUrl: 'components/reports/form/outbreakInfo.tpl.html',
          controller: 'ReportViewInfoController'
        },
        facilityInfo: {
          templateUrl: 'components/reports/form/facilityInfo.tpl.html',
          controller: 'ReportViewInfoController'
        },
        infectionInfo: {
          templateUrl: 'components/reports/form/infectionInfo.tpl.html',
          controller: 'ReportViewInfoController'
        },
        epiCurve: {
          templateUrl: 'components/reports/report/epiCurve/epiCurve.tpl.html',
          controller: 'ReportEditEpiCurveController',
        },
        comments: {
          templateUrl: 'components/reports/form/comments.tpl.html',
          controller: 'ReportViewInfoController'
        },
      }
    });
  })

  .controller('ReportViewController', function($scope, $state, $mdDialog, report) {
    $scope.report = report;

    function showEditDialog(ev, templateUrl) {
      $mdDialog.show({
        controller: 'ReportModalController',
        templateUrl: templateUrl,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true,
        resolve: {
          report: function($stateParams, ReportsService) {
            return ReportsService.getReport($stateParams.reportId);
          }
        }
      });
    }

    $scope.editOutbreakInfo = function(ev) {
      showEditDialog(ev, 'components/reports/form/outbreakInfoModal.tpl.html');
    };
    $scope.editFacilityInfo = function(ev) {
      showEditDialog(ev, 'components/reports/form/facilityInfoModal.tpl.html');
    };
    $scope.editInfectionInfo = function(ev) {
      showEditDialog(ev, 'components/reports/form/infectionInfoModal.tpl.html');
    };
    $scope.editComments = function(ev) {
      showEditDialog(ev, 'components/reports/form/commentsModal.tpl.html');
    };
  })

  .controller('ReportViewInfoController', function($scope) {
    $scope.readonly = true;
  })

  .controller('ReportModalController', function($scope, $mdDialog, report) {
    $scope.report = report;

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.onSave = function() {
      console.log('Saving...');
    };
  });
