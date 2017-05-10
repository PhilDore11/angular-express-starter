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
    $scope.getStatusClass = function() {
      switch ($scope.status) {
        case 'DRAFT':
          return 'status-draft';
        case 'COMPLETE':
          return 'status-complete';
        default:
          return 'status-draft';
      }
    };
  });
