'use strict';

angular.module('app.reports')

.factory('ReportsService', function($q, $http, $mdToast) {

  function showSuccess(successText) {
    $mdToast.show(
      $mdToast.simple()
        .theme('success-toast')
        .textContent(successText)
        .position('bottom right')
        .hideDelay(3000)
      );
  }

  function showError(successText) {
    $mdToast.show(
      $mdToast.simple()
        .theme('success-error')
        .textContent(successText)
        .position('bottom right')
        .hideDelay(3000)
      );
  }

  function promise(http, showToasts, successText, errorText) {
    if (showToasts) {
      showSuccess(successText);
    }

    var deferred = $q.defer();
    http.then(function(res) {
      deferred.resolve(res.data);
    }, function(err) {
      if (showToasts) {
        showError(errorText);
      }

      deferred.reject(err);
    });

    return deferred.promise;
  }

  return {
    getReports: function() {
      return promise($http.get('/api/reports'));
    },

    getReport: function(reportId) {
      return promise($http.get('/api/reports/' + reportId));
    },

    addReport: function(report, successLabel) {
      return promise($http.post('/api/reports/', report), true, successLabel, 'Error Creating Report');
    },

    saveReport: function(report, successLabel) {
      return promise($http.put('/api/reports/' + report._id, report), true, successLabel, 'Error Saving Report');
    },

    completeReport: function(report) {
      return promise($http.put('/api/reports/' + report._id + '/complete', report), true, 'Report Completed', 'Error Saving Report');
    },

    deleteReport: function(reportId) {
      return promise($http.delete('/api/reports/' + reportId), true, 'Report Deleted', 'Error Deleting Report');
    },
    createPdf: function(reportId) {
      return promise($http.get('/api/reports/' + reportId + '/pdf'));
    }
  };
});
