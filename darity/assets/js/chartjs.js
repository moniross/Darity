"use strict";
+(function ($, window) {
  var chartistJs = {};
  //line Chart
  chartistJs.init = function () {
    const ctx = document.getElementById("line-chart").getContext("2d");
    const lineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Purchase",

            borderColor: "#FF72D2",

            borderWidth: 2,
            data: [0.65, 0.59, 0.8, 0.81, 0.56, 0.55, 0.4],
          },
          {
            label: "Offer",
            borderColor: "#FFD166",
            borderWidth: 2,
            data: [0.28, 0.48, 0.4, 0.19, 0.86, 0.27, 0.9],
          },
          {
            label: "Auction",
            borderColor: "#01C5BA",
            borderWidth: 2,
            data: [0.38, 0.55, 0.6, 0.4, 0.76, 0.37, 0.7],
          },
        ],
      },

      options: {
        legend: {
          display: false,
        },
      },
    });

    //Goal Chart
    const ctx2 = document.getElementById("Statistic-chart").getContext("2d");
    const doughnut = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai"],
        datasets: [
          {
            data: [500, 50, 2424, 14040], // Specify the data values array

            borderColor: ["#2196f38c", "#f443368c", "#3f51b570", "#00968896"], // Add custom color border
            backgroundColor: [
              "#2196f38c",
              "#f443368c",
              "#3f51b570",
              "#00968896",
            ], // Add custom color background (Points and Fill)
            borderWidth: 1, // Specify bar border width
          },
        ],
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      },
    });

    // //Gradient Chart
    var gradientCtx = document
      .getElementById("gradient-chart")
      .getContext("2d");
    gradientCtx.height = 150;

    var bar_chart = new Chart(gradientCtx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "#163E61",
            borderColor: "#2DCEE3",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
      },
      scales: {
        yAxes: [
          {
            stacked: true,
            ticks: {
              min: 0,
              stepSize: 40,
            },
          },
        ],
      },
    });
  };

  window.chartistJs = chartistJs;
})(jQuery, window);

// initialize app
+(function ($) {
  chartistJs.init();
})(jQuery);
