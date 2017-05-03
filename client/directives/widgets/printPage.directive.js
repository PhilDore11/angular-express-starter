'use strict';

angular.module('app')

  .directive('osrPrintPage', function() {
    return {
      transclude: true,
      scope: {},
      templateUrl: 'directives/widgets/printPage.tpl.html'
    };
  });
