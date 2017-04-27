'use strict';

angular.module('app')

  .directive('osrNavbar', function() {
    return {
      scope: {},
      templateUrl: 'directives/widgets/navbar.tpl.html',
      controller: 'NavbarController'
    };
  })

  .controller('NavbarController', function($rootScope, $scope, $state, ReportsService) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $scope.stateData = (toState) ? toState.data : {};
      $scope.stateParams = toParams;

      if (toParams.reportId) {
        ReportsService.getReport(toParams.reportId).then(function(report) {
          $scope.report = report;
        });
      }
    });

    $scope.goToState = function(state, stateParams) {
      $state.go(state, stateParams);
    };
  });
