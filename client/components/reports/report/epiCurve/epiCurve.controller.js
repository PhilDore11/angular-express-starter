'use strict';

angular.module('app.reports.report.epiCurve', [])

  .controller('ReportEditEpiCurveController', function($scope, $filter, report) {

    var epiCurveData = {
      labels: [],
      datasets: []
    };

    var reportData = [];
    var colors = [{
      resident: 'rgba(255, 99, 132, 0.2)',
      staff: 'rgba(255, 99, 132, 0.4)',
      border: 'rgba(255, 99, 132, 1)'
    }, {
      resident: 'rgba(54, 162, 235, 0.2)',
      staff: 'rgba(54, 162, 235, 0.4)',
      border: 'rgba(54, 162, 235, 1)'
    }, {
      resident: 'rgba(255, 206, 86, 0.2)',
      staff: 'rgba(255, 206, 86, 0.4)',
      border: 'rgba(255, 206, 86, 1)'
    }, {
      resident: 'rgba(75, 192, 192, 0.2)',
      staff: 'rgba(75, 192, 192, 0.4)',
      border: 'rgba(75, 192, 192, 1)'
    }, {
      resident: 'rgba(153, 102, 255, 0.2)',
      staff: 'rgba(153, 102, 255, 0.4)',
      border: 'rgba(153, 102, 255, 1)'
    }, {
      resident: 'rgba(255, 159, 64, 0.2)',
      staff: 'rgba(255, 159, 64, 0.4)',
      border: 'rgba(255, 159, 64, 1)'
    }];
    _.each($scope.report.epiData, function(unitData, index) {
      epiCurveData.datasets.push({
        type: 'bar',
        label: [unitData.name, 'Resident Cases'].join(' '),
        backgroundColor: colors[index].resident,
        borderColor: colors[index].border,
        data: []
      });
      epiCurveData.datasets.push({
        type: 'bar',
        label: [unitData.name, 'Staff Cases'].join(' '),
        backgroundColor: colors[index].staff,
        borderColor: colors[index].border,
        data: []
      });

      var numDatasets = epiCurveData.datasets.length;
      _.each(unitData.data, function(dataEntry, index) {
        epiCurveData.labels.push($filter('date')(dataEntry.date));

        epiCurveData.datasets[numDatasets-2].data.push(dataEntry.residentCases);
        epiCurveData.datasets[numDatasets-1].data.push(dataEntry.staffCases);
      });
    });

    epiCurveData.labels = _.uniq(epiCurveData.labels);

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
