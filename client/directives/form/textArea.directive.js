'use strict';

angular.module('app')

  .directive('osrTextareaContainer', function() {
    return {
      replace: true,
      scope: {
        readonly: '=',
        label: '@',
        form: '=',
        prop: '@'
      },
      templateUrl: 'directives/form/textArea.tpl.html'
    };
  });
