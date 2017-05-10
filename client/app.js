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

    $urlRouterProvider.otherwise('/home');
  });
