'use strict';

angular.module('app')

  .directive('osrFormSection', function() {
    return {
      replace: true,
      transclude: true,
      scope: {
        icon: '@',
        title: '@',
        hideEdit: '=',
        onEditFunc: '&onEdit'
      },
      templateUrl: 'directives/form/formSection.tpl.html',
      controller: function($scope) {
        $scope.onEdit = function(event) {
          return $scope.onEditFunc()(event);
        };
      }
    };
  });
