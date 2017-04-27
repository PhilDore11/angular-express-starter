'use strict';

angular.module('app.reports.edit.epiCurve', [])

  .config(function($stateProvider) {
    $stateProvider.state('reports.edit.epiCurve', {
      url: '/epiCurve',
      templateUrl: 'components/reports/edit/epiCurve/epiCurve.tpl.html',
      controller: 'ReportEditEpiCurveController',
      resolve: {
        report: function($stateParams, ReportsService) {
          return ReportsService.getReport($stateParams.reportId);
        }
      },
      data: {
        title: {
          label: 'Epi Curve',
          showReportName: true
        },
        actions: [{
          icon: 'list',
          state: 'reports.list',
          label: 'Back to List'
        }, {
          icon: 'edit',
          state: 'reports.edit.outbreakInfo',
          label: 'Report Information'
        }, {
          icon: 'border_all',
          state: 'reports.edit.dataEntry',
          label: 'Data Entry'
        }]
      }
    });
  })

  .controller('ReportEditEpiCurveController', function($scope, $filter, report) {
    $scope.report = report;

    var epiCurveData = {
      labels: [],
      datasets: [{
        label: 'Resident Cases',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: []
      }, {
        label: 'Staff Cases',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: []
      }]
    };

    var reportData = [];
    _.each($scope.report.data, function(dataEntry) {
      epiCurveData.labels.push($filter('date')(dataEntry.date));
      epiCurveData.datasets[0].data.push(dataEntry.residentCases);
      epiCurveData.datasets[1].data.push(dataEntry.staffCases);
    });

    var ctx = document.getElementById('epiCurve');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: epiCurveData,
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            stacked: true,
            display: true,
            ticks: {
              beginAtZero: true,
              fixedStepSize: 1
            }
          }]
        },
      }
    });
  });
