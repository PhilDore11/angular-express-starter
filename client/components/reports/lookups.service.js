'use strict';

angular.module('app.reports')

.factory('LookupsService', function($q, $http) {

  function promise(http) {
    var deferred = $q.defer();
    http.then(function(res) {
      deferred.resolve(res.data);
    }, function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  }

  return {
    getFacilityTypes: function() {
      return promise($http.get('/api/lookups/facility-types'));
    },

    getOutbreakTypes: function() {
      return promise($http.get('/api/lookups/outbreak-types'));
    },

    getOutbreakAgents: function() {
      return promise($http.get('/api/lookups/outbreak-agents'));
    }
  };
});
