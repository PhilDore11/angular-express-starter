'use strict';

angular.module('app')

  .directive('osrInputContainer', function() {
    return {
      replace: true,
      scope: {
        readonly: '=',
        type: '@',
        label: '@',
        form: '=',
        prop: '@'
      },
      templateUrl: 'directives/form/input.tpl.html'
    };
  });
