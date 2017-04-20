'use strict';

angular.module('app')

  .directive('osrLargeButton', function() {
    return {
      scope: {
        link: '@',
        icon: '@',
        text: '@'
      },
      templateUrl: 'directives/widgets/largeButton.tpl.html'
    };
  });
