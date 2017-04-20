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

  .config(function($stateProvider, $mdThemingProvider, $urlRouterProvider, $authProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('teal')
      .warnPalette('red');

    var whiteMap = $mdThemingProvider.extendPalette('grey', {
      '500': '#ffffff',
      'contrastDefaultColor': 'dark'
    });
    $mdThemingProvider.definePalette('white', whiteMap);


    $urlRouterProvider.otherwise('/home');
  });
