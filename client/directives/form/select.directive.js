'use strict';

angular.module('app')

  .directive('osrSelectContainer', function() {
    return {
      replace: true,
      scope: {
        readonly: '=',
        label: '@',
        form: '=',
        prop: '@',
        options: '=',
        filter: '=optionFilter',
        key: '@optionKey',
        value: '@optionValue'
      },
      templateUrl: 'directives/form/select.tpl.html'
    };
  });
