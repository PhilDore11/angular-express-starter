'use strict';

angular.module('app.reports.report.epiCurve', [])

  .controller('ReportEditEpiCurveController', function($scope, $filter, report) {

    var epiCurveData = {
      labels: [],
      datasets: [{
        type: 'bar',
        label: 'Resident Cases',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: []
      }, {
        type: 'bar',
        label: 'Staff Cases',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: []
      }, {
        type: 'line',
        label: 'Total Cases',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(100, 100, 100, 1)',
        data: []
      }]
    };

    var reportData = [];
    _.each($scope.report.data, function(dataEntry) {
      epiCurveData.labels.push($filter('date')(dataEntry.date));
      epiCurveData.datasets[0].data.push(dataEntry.residentCases);
      epiCurveData.datasets[1].data.push(dataEntry.staffCases);
      epiCurveData.datasets[2].data.push(dataEntry.residentCases + dataEntry.staffCases);
    });

    var ctx = document.getElementById('epiCurve');
    var myChart = new Chart(ctx, {
      type: 'bar',
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
