'use strict';

angular.module('app')

  .directive('osrFormSection', function() {
    return {
      transclude: true,
      scope: {
        icon: '@',
        title: '@'
      },
      templateUrl: 'directives/form/formSection.tpl.html'
    };
  });
