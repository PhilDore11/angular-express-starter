'use strict';

angular.module('app.reports.report.dataEntry', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.report.dataEntry', {
      url: '/dataEntry',
      templateUrl: 'components/reports/report/dataEntry/dataEntry.tpl.html',
      controller: 'ReportEditDataEntryController',
      resolve: {
        report: function($stateParams, ReportsService) {
          return ReportsService.getReport($stateParams.reportId);
        }
      }
    });
  })

  .controller('ReportEditDataEntryController', function($scope, $mdEditDialog, report, ReportsService) {
    $scope.report = report;

    // Data
    $scope.addDataRow = function() {
      if (_.isEmpty($scope.report.data)) {
        $scope.report.data = [];
      }
      $scope.report.data.push({});
    };
    $scope.removeDataRow = function(index) {
      $scope.report.data.splice(index, 1);
    };

    // Edit Dialogs
    function editDialog(event, model, param, title, type) {
      $mdEditDialog.large({
        targetEvent: event,
        type: type || 'text',
        title: title,
        modelValue: model[param],
        save: function(input) {
          model[param] = input.$modelValue;
        }
      });
    }

    $scope.editDate = function(event, model) {
      editDialog(event, model, 'date', 'Date', 'date');
    };
    $scope.editResidentCases = function(event, model) {
      editDialog(event, model, 'residentCases', 'Resident Cases', 'number');
    };
    $scope.editStaffCases = function(event, model) {
      editDialog(event, model, 'staffCases', 'Staff Cases', 'number');
    };

    // Save
    $scope.onSave = function() {
      ReportsService.saveReport($scope.report, 'Report Data Saved');
    };
  });
