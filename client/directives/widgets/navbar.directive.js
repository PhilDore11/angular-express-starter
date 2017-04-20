'use strict';

angular.module('app')

  .directive('osrNavbar', function() {
    return {
      scope: {},
      templateUrl: 'directives/widgets/navbar.tpl.html',
      controller: 'NavbarController'
    };
  })

  .controller('NavbarController', function($rootScope, $scope) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $scope.stateData = (toState) ? toState.data : {};
    });
  });
