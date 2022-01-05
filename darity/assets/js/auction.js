"use strict";
+(function ($, window) {
  var auctionDashboard = {};

  auctionDashboard.init = function () {
    // //Gradient Chart
    var gradientCtx = document
      .getElementById("gradient-chart")
      .getContext("2d");
    gradientCtx.height = 150;
    var gradientChartGradient = gradientCtx.createLinearGradient(0, 0, 0, 200);
    gradientChartGradient.addColorStop(0, "rgba(45, 203, 224, 1)");
    gradientChartGradient.addColorStop(1, "rgba(45, 203, 224, 0.2)");
    var bar_chart = new Chart(gradientCtx, {
      type: "line",
      backgroundColor: "#000000",
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
            label: "eth",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: gradientChartGradient,
            fill: true,
            borderColor: "#2DCEE3",
            borderWidth: "0",
            pointRadius: 0,
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

  window.auctionDashboard = auctionDashboard;
})(jQuery, window);

// initialize app
+(function ($) {
  auctionDashboard.init();
})(jQuery);
