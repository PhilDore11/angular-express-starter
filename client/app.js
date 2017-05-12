'use strict';

angular.module('app', [
  'ngResource',
  'ngMessages',
  'ngMaterial',
  'md.data.table',
  'ui.router',
  'satellizer',
  'mdSteppers',

  'app.home',
  'app.reports'
])

  .config(function($mdThemingProvider, $urlRouterProvider, $httpProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('grey')
      .warnPalette('red');

    $urlRouterProvider.otherwise('/home');


    // http://aboutcode.net/2013/07/27/json-date-parsing-angularjs.html
    var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

    function convertDateStringsToDates(input) {
      // Ignore things that aren't objects.
      if (typeof input !== 'object') {
        return input;
      }

      for (var key in input) {
        if (!input.hasOwnProperty(key)) {
          continue;
        }

        var value = input[key];
        var match;
        // Check for string properties which look like dates.
        if (typeof value === 'string' && (match = value.match(regexIso8601))) {
          var milliseconds = Date.parse(match[0]);
          if (!isNaN(milliseconds)) {
            input[key] = new Date(milliseconds);
          }
        } else if (typeof value === 'object') {
          // Recurse into object
          convertDateStringsToDates(value);
        }
      }
    }

    $httpProvider.defaults.transformResponse.push(function(responseData) {
      convertDateStringsToDates(responseData);
      return responseData;
    });

    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
    };
  });
