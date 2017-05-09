'use strict';

angular.module('app')

  .directive('osrNavbar', function() {
    return {
      scope: {},
      templateUrl: 'directives/widgets/navbar.tpl.html',
      controller: 'NavbarController'
    };
  })

  .controller('NavbarController', function($rootScope, $scope, $state, $window, ReportsService) {

    function isReportComplete(report) {
      return _.isEqual(report.status, 'COMPLETE');
    }

    function getNavbarActions(report) {

      var completionActions = [{
          divider: true
        }, {
          icon: 'done',
          state: 'reports.report.complete.edit',
          label: 'Complete Report'
      }];

      var actions = [{
        icon: 'home',
        state: 'home',
        label: 'Back to Home'
      }];

      if ($state.includes('reports')) {
        actions.push({
          icon: 'list',
          state: 'reports.list',
          label: 'Back to List'
        });
      }

      if (_.isObject(report)) {
        actions = actions.concat({
          divider: true
        }, {
          icon: 'visibility',
          state: 'reports.report.view',
          label: 'View Report'
        });
      }

      if (_.isObject(report)) {
        if (!isReportComplete(report)) {
          actions = actions.concat(completionActions);
        }
      }

      if (_.isObject(report)) {
        actions = actions.concat({
          divider: true
        }, {
          icon: 'print',
          click: function() {
            $window.print();
          },
          label: 'Print Report'
        });
      }

      return actions;
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $scope.stateParams = toParams;

      if (toParams.reportId) {
        ReportsService.getReport(toParams.reportId).then(function(report) {
          $scope.report = report;
          $scope.actions = getNavbarActions(report);
        });
      } else {
        delete $scope.report;
        $scope.actions = getNavbarActions();
      }
    });
  });
