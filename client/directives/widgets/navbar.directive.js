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
    function isReportComplete() {
      return _.isEqual(_.get($scope, 'report.status'), 'COMPLETE');
    }

    function getNavbarActions(report) {
      var editActions = [{
          divider: true
        }, {
          icon: 'edit',
          state: 'reports.report.outbreakInfo',
          label: 'Report Information'
        }, {
          icon: 'border_all',
          state: 'reports.report.dataEntry',
          label: 'Data Entry'
        }, {
          icon: 'show_chart',
          state: 'reports.report.epiCurve',
          label: 'Epi Curve'
        }];

      var completionActions = [{
          divider: true
        }, {
          icon: 'done',
          state: 'reports.report.complete',
          label: 'Complete Report'
      }];

      var approvalActions = [{
          divider: true
        }, {
          icon: 'comment',
          state: 'reports.report.complete',
          label: 'Add Comments'
        }, {
          icon: 'done_all',
          state: 'reports.report.approve',
          label: 'Approve Report'
        }, {
          divider: true
        }, {
          icon: 'print',
          state: 'reports.report.print.preview',
          label: 'Print Report'
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

      if (_.isObject(report) && !isReportComplete()) {
        actions = actions.concat(editActions);
        actions = actions.concat(completionActions);
      }
      if (isReportComplete()) {
        actions = actions.concat(approvalActions);
      }

      return actions;
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $scope.stateData = (toState) ? toState.data : {};
      $scope.stateParams = toParams;

      if (toParams.reportId) {
        ReportsService.getReport(toParams.reportId).then(function(report) {
          $scope.report = report;
          $scope.actions = getNavbarActions(report);
        });
      }
    });

    $scope.goToState = function(state, stateParams) {
      $state.go(state, stateParams);
    };
  });
