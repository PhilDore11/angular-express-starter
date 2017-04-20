'use strict';

angular.module('app.home', [])

  .config( function( $stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html'
    });
  });
