// header
(function () {
  const header = $(".js-header"),
    items = header.find(".js-header-item"),
    burger = header.find(".js-header-burger"),
    mobile = header.find(".js-header-mobile");

  items.each(function () {
    const item = $(this),
      head = item.find(".js-header-head"),
      body = item.find(".js-header-body");

    head.on("click", function (e) {
      e.stopPropagation();

      if (!item.hasClass("active")) {
        items.removeClass("active");
        item.addClass("active");
      } else {
        items.removeClass("active");
      }
    });

    body.on("click", function (e) {
      e.stopPropagation();
    });

    $("html, body").on("click", function () {
      items.removeClass("active");
    });
  });

  burger.on("click", function (e) {
    e.stopPropagation();

    burger.toggleClass("active");
    mobile.toggleClass("visible");
  });
})();

// notifications popup
(function () {
  const header = $(".js-header"),
    popup = header.find(".notifications_popup"),
    icon = header.find(".js-notifications-icon");

  icon.on("click", function (e) {
    e.stopPropagation();
    popup.toggleClass("visible");
  });
  $(document).on("click", "body", function (e) {
    if (!$(e.target).is(".visible")) popup.removeClass("visible");
  });
})();
//  change log
(function () {
  const changelog = $(".changelog"),
    log = changelog.find(".overflow_log"),
    more = changelog.find(".more_log"),
    text = changelog.find(".change_text");
  text.innerHTML = "New Heading";
  more.on("click", function (e) {
    e.stopPropagation();
    log.toggleClass("visible");
    text.innerHTML = "New Heading";
  });
})();
// avatar popup
(function () {
  const header = $(".js-header"),
    popup = header.find(".avatar_popup"),
    icon = header.find(".header__avatar");

  icon.on("click", function (e) {
    e.stopPropagation();
    popup.toggleClass("visible");
  });
  $(document).on("click", "body", function (e) {
    if (!$(e.target).is(".visible")) popup.removeClass("visible");
  });
})();

// menu popup
(function () {
  const header = $(".js-header"),
    popup = header.find(".menu__popup"),
    icon = header.find(".has_popup");

  icon.on("click", function (e) {
    e.stopPropagation();
    popup.toggleClass("visible");
  });
  $(document).on("click", "body", function (e) {
    if (!$(e.target).is(".visible")) popup.removeClass("visible");
  });
})();
(function () {
  const header = $(".js-header"),
    popup = header.find(".menu__popup2"),
    icon = header.find(".has_popup2");
  icon.on("click", function (e) {
    e.stopPropagation();
    popup.toggleClass("visible");
  });
  $(document).on("click", "body", function (e) {
    if (!$(e.target).is(".visible")) popup.removeClass("visible");
  });
})();

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

// sparkline
$(".line-green").sparkline([800, 1000, 800, 1000, 900, 1000], {
  type: "line",
  width: "100%",
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  lineWidth: 1.5,
  height: "50",
  lineColor: "#3DCA78",
  fillColor: "#1E4A50",
});
$(".line-red").sparkline([8, 10, 8, 10, 9, 10], {
  type: "line",
  width: "100%",
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  lineWidth: 1.5,
  height: "50",
  lineColor: "#FD6E93",
  fillColor: "#442D52",
});
$(".line-blue").sparkline([80, 100, 80, 100, 90, 100], {
  type: "line",
  width: "100%",
  spotColor: false,
  minSpotColor: false,
  maxSpotColor: false,
  lineWidth: 1.5,
  height: "50",
  lineColor: "#72e6ff",
  fillColor: "#15355A",
});

//Line Chart
var transactionsChart = document.getElementById("line-chart");
var lineCtx = transactionsChart.getContext("2d");
var lineConfig = new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
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
var StatisticChart = document.getElementById("Statistic-chart");
var StatisticCtx = StatisticChart.getContext("2d");
var StatisticConfig = new Chart(StatisticCtx, {
  type: "doughnut",
  data: {
    labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai"],
    datasets: [
      {
        data: [500, 50, 2424, 14040], // Specify the data values array

        borderColor: ["#2196f38c", "#f443368c", "#3f51b570", "#00968896"], // Add custom color border
        backgroundColor: ["#2196f38c", "#f443368c", "#3f51b570", "#00968896"], // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
      },
    ],
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
  },
});

//Gradient Chart
var gradientCtx = document.getElementById("gradient-chart").getContext("2d");
gradientCtx.height = 150;

var bar_chart = new Chart(gradientCtx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
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

// countdown

function makeTimer() {
  //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
  var endTime = new Date("29 April 2023 9:56:00 GMT+01:00");
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $(".days").html(days + "<span></span>");
  $(".hours").html(hours + "<span></span>");
  $(".minutes").html(minutes + "<span></span>");
  $(".seconds").html(seconds + "<span></span>");
}

setInterval(function () {
  makeTimer();
}, 1000);
