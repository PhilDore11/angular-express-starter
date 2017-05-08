'use strict';

angular.module('app')

  .directive('osrFormDialog', function() {
    return {
      replace: true,
      transclude: true,
      scope: {
        title: '@',
        onSaveFunc: '&onSave'
      },
      templateUrl: 'directives/form/formDialog.tpl.html',
      controller: function($scope, $mdDialog) {

        $scope.cancel = function() {
          $mdDialog.hide();
        };

        $scope.onSave = function() {
          $scope.onSaveFunc()().finally(function() {
            $mdDialog.cancel();
          });
        };
      }
     };
  });
