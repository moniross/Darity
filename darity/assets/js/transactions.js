"use strict";
+(function ($, window) {
  var transactionsDashboard = {};

  transactionsDashboard.init = function () {
    // //Line Chart
    var transactionsChart = document.getElementById("line-chart");
    var lineCtx = transactionsChart.getContext("2d");
    var lineConfig = new Chart(lineCtx, {
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
        ],
      },

      options: {
        legend: {
          display: false,
        },
      },
    });
  };

  window.transactionsDashboard = transactionsDashboard;
})(jQuery, window);

// initialize app
+(function ($) {
  transactionsDashboard.init();
})(jQuery);
