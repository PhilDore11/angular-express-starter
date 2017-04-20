'use strict';

angular.module('app')

  .directive('osrFormActions', function() {
    return {
      scope: {
        stepperId: '@',
        saveFunc: '&',
        saveLabel: '='
      },
      templateUrl: 'directives/form/formActions.tpl.html',
      controller: 'OSRFormActions'
    };
  })

  .controller('OSRFormActions', function($scope, $mdStepper) {
    $scope.stepper = $mdStepper($scope.stepperId);

    $scope.onSave = function() {
      $scope.stepper.next();
      $scope.saveFunc()();
    };
  });
