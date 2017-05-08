'use strict';

angular.module('app.reports.report.dataEntry', [])

  .controller('ReportEditDataEntryController', function($scope, $mdEditDialog, ReportsService) {
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
      return ReportsService.saveReport($scope.report, 'Report Data Saved');
    };
  });
