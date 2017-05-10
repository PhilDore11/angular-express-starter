'use strict';

angular.module('app')

  .directive('osrStatusIcon', function() {
    return {
      replace: true,
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
        case 'DRAFT':
          return 'grey';
        case 'COMPLETE':
          return 'green';
        case 'APPROVED':
          return 'indigo';
        default:
          return 'grey';
      }
    };

    $scope.getStatusColor = function() {
      switch ($scope.status) {
        case 'DRAFT':
          return 'white';
        case 'COMPLETE':
          return 'white';
        case 'APPROVED':
          return 'white';
        default:
          return 'black';
      }
    };

    $scope.getStatusIcon = function() {
      switch ($scope.status) {
        case 'DRAFT':
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
