'use strict';

angular.module('app')

  .directive('osrFormDialog', function() {
    return {
      transclude: true,
      scope: false,
      templateUrl: 'directives/form/formDialog.tpl.html',
      link: function(scope, element, attrs) {
        scope.title = attrs.title;
      }
     };
  });
