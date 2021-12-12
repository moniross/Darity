
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
