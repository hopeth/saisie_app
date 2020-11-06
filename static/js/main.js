; (function () {

	'use strict';



	// iPad and iPod detection	
	var isiPad = function () {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function () {
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};

	// Main Menu Superfish
	var mainMenu = function () {

		$('#primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	//Date Picker

	$('#date-start, #date-end').datepicker();

	[].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
		new SelectFx(el);
	});

	// Parallax
	var parallax = function () {
		if (!isiPad() || !isiPhone()) {
			$(window).stellar();
		}
	};


	// Offcanvas and cloning of the main menu
	var offcanvas = function () {

		var $clone = $('#menu-wrap').clone();
		$clone.attr({
			'id': 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class': '',
			'id': ''
		});

		$('#app-body').prepend($clone);

		// click the burger
		$('.js-nav-toggle').on('click', function () {

			if ($('body').hasClass('offcanvas')) {
				$('body').removeClass('offcanvas');
			} else {
				$('body').addClass('offcanvas');
			}
			// event.preventDefault();

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function () {
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if (w.width() > 769) {
				if ($('body').hasClass('offcanvas')) {
					$('body').removeClass('offcanvas');
				}
			}

		});

	}



	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function () {
		$(document).click(function (e) {
			var container = $("#offcanvas-menu, .js-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas')) {
					$('body').removeClass('offcanvas');
				}
			}
		});
	};


	// Animations

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				//$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};

	var stickyBanner = function () {
		var $stickyElement = $('.app-header-c');
		var sticky;
		if ($stickyElement.length) {
			sticky = new Waypoint.Sticky({
				element: $stickyElement[0],
				offset: 0
			})
		}
	};

	// Document on load.
	$(function () {
		mainMenu();
		parallax();
		offcanvas();
		mobileMenuOutsideClick();
		contentWayPoint();
		stickyBanner();
	});


}());





function flashy(message, tags) {
	var data = '<div class="alert alert-' + tags + '" role="alert">' + message + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>'

	if (tags == 'success') {
		$("#flash-template").html(data).appendTo("body").hide().fadeIn(800)
			.animate({ marginRight: "75%" }, 1000, "swing")
			.animate({ marginRight: "50%" }, 200, "swing")
			.animate({ marginRight: "53%" }, 100, "swing")
			.animate({ marginRight: "51%" }, 100, "swing")
			.animate({ marginRight: "52%" }, 100, "swing")
			.animate({ marginRight: "50%" }, 100, "swing")
			.animate({ marginRight: "51%" }, 100, "swing")
			.animate({ marginRight: "50%" }, 100, "swing")
			.delay(2800).animate({ marginRight: "-100%" }, 3000, "swing", function () { $(this).remove(); });
	}

	else if (tags == 'warning') {
		$("#flash-template").html(data).appendTo("body").hide().fadeIn(800)
			.animate({ marginRight: "75%" }, 1100, "swing")
			.animate({ marginRight: "70%" }, 400, "swing")
			.animate({ marginRight: "50%" }, 400, "swing")
			.animate({ marginRight: "55%" }, 200, "swing")
			.animate({ marginRight: "50%" }, 200, "swing")
			.animate({ marginRight: "52%" }, 200, "swing")
			.animate({ marginRight: "50%" }, 200, "swing")
			.animate({ marginRight: "51%" }, 200, "swing")
			.animate({ marginRight: "50%" }, 100, "swing")
			.delay(3500).animate({ marginRight: "-100%" }, 3000, "swing", function () { $(this).remove(); });
	}

	else if (tags == 'info') {
		$("#flash-template").html(data).appendTo("body").hide().fadeIn(800)
			.animate({ marginRight: "75%" }, 1000, "swing")
			.animate({ marginRight: "50%" }, 200, "swing")
			.animate({ marginRight: "53%" }, 100, "swing")
			.animate({ marginRight: "51%" }, 100, "swing")
			.animate({ marginRight: "52%" }, 100, "swing")
			.animate({ marginRight: "50%" }, 100, "swing")
			.animate({ marginRight: "51%" }, 100, "swing")
			.animate({ marginRight: "50%" }, 100, "swing")
			.delay(3100).animate({ marginRight: "-100%" }, 3000, "swing", function () { $(this).remove(); });
	}

	else if (tags == 'danger') {
		$("#flash-template").html(data).appendTo("body").hide().fadeIn(800)
			.animate({ marginRight: "75%" }, 1000, "swing")
			.animate({ marginRight: "50%" }, 800, "swing")
			.animate({ marginRight: "54%" }, 100, "swing")
			.animate({ marginRight: "52%" }, 100, "swing")
			.animate({ marginRight: "53%" }, 100, "swing")
			.animate({ marginRight: "51%" }, 100, "swing")
			.animate({ marginRight: "52%" }, 100, "swing")
			.animate({ marginRight: "50%" }, 100, "swing")
			.animate({ marginRight: "51%" }, 100, "swing")
			.animate({ marginRight: "50%" }, 100, "swing")
			.delay(3000).animate({ marginRight: "-100%" }, 3000, "swing", function () { $(this).remove(); });
	}

	else {
		$("#flash-template").html(data).appendTo("body").hide().fadeIn(800)
			.animate({ marginRight: "75%" }, 1000, "swing")
			.animate({ marginRight: "73%" }, 1000, "swing")
			.animate({ marginRight: "71%" }, 1000, "swing")
			.animate({ marginRight: "69%" }, 1000, "swing")
			.animate({ marginRight: "67%" }, 1000, "swing")
			.animate({ marginRight: "65%" }, 1000, "swing")
			.animate({ marginRight: "63%" }, 1000, "swing")
			.animate({ marginRight: "61%" }, 1000, "swing")
			.animate({ marginRight: "59%" }, 1000, "swing")
			.animate({ marginRight: "57%" }, 1000, "swing")
			.animate({ marginRight: "55%" }, 1000, "swing")
			.animate({ marginRight: "50%" }, 1000, "swing")
			.delay(3500).animate({ marginRight: "-100%" }, 3000, "swing", function () { $(this).remove(); });
	}

}






$(document).ready(function () {
	let del = $('a.delete');

	$(del).each(function () {
		$(this).on('click', function (e) {
			e.preventDefault();

			let link = $(this);
			let target = $(this).attr('href');

			Swal.fire({
				title: 'Confirmez vous la suppression?',
				text: 'Cette action est irréversible',
				type: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Oui. Supprimer!',
				cancelButtonText: 'Non!',
			}).then((result) => {
				if (result.value) {

					fetch(target, { method: 'get' }).then(response => response.json()).then(message => {
						console.log(message);
						Swal.fire({
							title: 'Yeah !',
							html: '<p>' + message.success + '</p>',
							type: 'success',
						});

					});
					$(link).closest('article').fadeOut();
					document.getElementById('data_count').style.display = 'none';
				}
			}).catch(err => {
				console.log(err);
				Swal.fire({
					title: 'Oups!',
					text: 'Un erreur est survenue.',
					type: 'error',
				});
			});
		});
	});

});

$(document).ready(function () {
	let upd = $('a.update');
	$(upd).each(function () {
		$(this).on('click', function (e) {
			let link = $(this);
			let target = $(this).attr('href');
			Swal.fire({
				text: 'Vous vous appretez à Modifier une entrée',
				showCancelButton: false,
				showConfirmButton: false,
			});
		});
	});
});
