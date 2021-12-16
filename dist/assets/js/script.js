
// header
(function () {
	const header = $('.js-header'),
		items = header.find('.js-header-item'),
		burger = header.find('.js-header-burger'),
		mobile = header.find('.js-header-mobile');

	items.each(function () {
		const item = $(this),
			head = item.find('.js-header-head'),
			body = item.find('.js-header-body');

		head.on('click', function (e) {
			e.stopPropagation();

			if (!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active');
			} else {
				items.removeClass('active');
			}
		});

		body.on('click', function (e) {
			e.stopPropagation();
		});

		$('html, body').on('click', function () {
			items.removeClass('active');
		});

	});

	burger.on('click', function (e) {
		e.stopPropagation();

		burger.toggleClass('active');
		mobile.toggleClass('visible');
	});

}());

// notifications popup
(function () {
	const header = $('.js-header'),
		popup = header.find('.notifications_popup'),
		icon = header.find('.js-notifications-icon');

	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	});

}());
//  change log
(function () {
	const changelog = $('.changelog'),
		log = changelog.find('.overflow_log'),
		more = changelog.find('.more_log'),
		text = changelog.find('.change_text');
	text.innerHTML = "New Heading";
	more.on('click', function (e) {
		e.stopPropagation();
		log.toggleClass('visible');
		text.innerHTML = "New Heading";
	});
}());
// avatar popup
(function () {
	const header = $('.js-header'),
		popup = header.find('.avatar_popup'),
		icon = header.find('.header__avatar');

	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	})

}());




// menu popup
(function () {

	const header = $('.js-header'),
		popup = header.find('.menu__popup'),
		icon = header.find('.has_popup');

	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	})

}());
(function () {
	const header = $('.js-header'),
		popup = header.find('.menu__popup2'),
		icon = header.find('.has_popup2');
	icon.on('click', function (e) {
		e.stopPropagation();
		popup.toggleClass('visible');
	});
	$(document).on('click', 'body', function (e) {
		if (!$(e.target).is('.visible'))
			popup.removeClass('visible');
	})

}());

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

// chart

var ctx = document.getElementById('myChart').getContext('2d');
var data = {
"labels": [
"1 Aug",
"2 Aug",
"3 Aug",
"4 Aug",
"5 Aug",
"6 Aug",
"7 Aug",
"8 Aug",
"9 Aug",
"10 Aug"
],
"datasets": [
{
  "label": "Category1",
  "backgroundColor": "#000000",
  "fill": false,
  "data": [
	"20",
	"30",
	"80",
	"20",
	"40",
	"10",
	"60"
  ],
  "borderColor": "#ff9300",
  "pointRadius": "10",
  "pointBackgroundColor": "#945200",
  "pointBorderColor": "#ff9300",
  "lineTension": 0.9,
  "pointBorderWidth": 5,
  "pointHoverBackgroundColor": "#ff9300",
  "pointHoverBorderColor": "#945200"
},
{
  "label": "Category2",
  "backgroundColor": "",
  "fill": false,
  "data": [
	"60",
	"10",
	"40",
	"30",
	"80",
	"30",
	"40"
  ],
  "borderColor": "#73fa79",
  "pointRadius": "10",
  "lineTension": 0,
  "pointBackgroundColor": "#008f00",
  "pointBorderColor": "#73fa79",
  "pointBorderWidth": 5
}
]
};
var options = {
"title": {
"display": false
},
"legend": {
"display": true
},
"scales": {
"yAxes": [
  {
	"ticks": {
	  "beginAtZero": true
	},
	"gridLines": {
	  "display": true,
	  "lineWidth": 1,
	  "drawOnChartArea": true,
	  "color": "#000000",
	  "zeroLineColor": "#000000",
	  "zeroLineWidth": 1,
	  "drawTicks": true
	}
  }
],
"xAxes": {
  "0": {
	"gridLines": {
	  "drawOnChartArea": false,
	  "offsetGridLines": false,
	  "zeroLineColor": "#000000",
	  "display": true,
	  "lineWidth": 2,
	  "drawTicks": true,
	  "zeroLineWidth": 2,
	  "color": "#000000"
	},
	"ticks": {
	  "display": true,
	  "beginAtZero": true
	}
  }
}
},
"elements": {
"line": {
  "borderColor": "#000000",
  "lineTension": 0
}
}
};

var myChart = new Chart(ctx, {
	type: 'line',
	data: data,
	options: options
});

//  chart
