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
      .accentPalette('grey')
      .warnPalette('red');

    // White
    var whiteMap = $mdThemingProvider.extendPalette('grey', {
      '500': '#ffffff',
      'contrastDefaultColor': 'dark'
    });
    $mdThemingProvider.definePalette('white', whiteMap);

    // Black
    var blackMap = $mdThemingProvider.extendPalette('grey', {
      '500': '#666666',
      'contrastDefaultColor': 'light'
    });
    $mdThemingProvider.definePalette('black', blackMap);


    $urlRouterProvider.otherwise('/home');
  });
