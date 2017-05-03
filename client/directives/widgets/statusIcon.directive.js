'use strict';

angular.module('app')

  .directive('osrStatusIcon', function() {
    return {
      scope: {
        status: '='
      },
      templateUrl: 'directives/widgets/statusIcon.tpl.html',
      controller: 'StatusIconController'
    };
  })
  .controller('StatusIconController', function($scope) {
    $scope.getStatusTheme = function() {
      switch ($scope.status) {
        case 'IN_PROGRESS':
          return 'grey';
        case 'COMPLETE':
          return 'green';
        case 'APPROVED':
          return 'indigo';
        default:
          return 'grey';
      }
    };

    $scope.getStatusIcon = function() {
      switch ($scope.status) {
        case 'IN_PROGRESS':
          return 'more_horiz';
        case 'COMPLETE':
          return 'done';
        case 'APPROVED':
          return 'done_all';
        default:
          return 'more_horiz';
      }
    };
  });
