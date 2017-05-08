'use strict';

angular.module('app')

  .directive('osrFooter', function() {
    return {
      scope: {},
      templateUrl: 'directives/widgets/footer.tpl.html'
    };
  });
