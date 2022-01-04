"use strict";
+(function ($, window) {
  var activityDashboard = {};

  activityDashboard.init = function () {
    // //Goal Chart
    var StatisticChart = document.getElementById("Statistic-chart");
    var StatisticCtx = StatisticChart.getContext("2d");
    var StatisticConfig = new Chart(StatisticCtx, {
      type: "doughnut",
      data: {
        labels: ["Listings", "Bid", "Purchase", "Offers"],
        datasets: [
          {
            data: [10, 20, 30, 40], // Specify the data values array

            borderColor: ["#10173E", "#10173E", "#10173E", "#10173E"], // Add custom color border
            backgroundColor: ["#2D9CDB", "#27D1AA", "#C379F6", "#FFD166"], // Add custom color background (Points and Fill)
            borderWidth: 1, // Specify bar border width
          },
        ],
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
        plugins: {
          title: {
            display: true,
            position: "left",
            color: "#ffffff",
            text: "Event Statistic",
            padding: { top: 0, left: 0, right: 0, bottom: 0 },
            font: {
              family:
                '"circular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              size: 16,
              weight: "bold",
              lineHeight: 1.2,
            },
          },
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              color: "#ffffff",
              font: {
                family:
                  '"circular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              },
            },
          },
        },
      },
    });
  };

  window.activityDashboard = activityDashboard;
})(jQuery, window);

// initialize app
+(function ($) {
  activityDashboard.init();
})(jQuery);
