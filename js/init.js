/*
	Spatial by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: {
			    href: 'css/style.css',
				containers: 1400,
				grid: { gutters: ['2em', 0] }
			},
			medium: {
				media: '(max-width: 980px)',
				href: 'css/style-medium.css',
				containers: '90%!'
			}
		},
		plugins: {
			layers: {
				navPanel: {
					animation: 'pushX',
					breakpoints: 'medium',
					clickToHide: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="moveElement" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-left',
					side: 'left',
					width: 250
				},
				navButton: {
					breakpoints: 'medium',
					height: '4em',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
					position: 'top-left',
					side: 'top',
					width: '6em'
				}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch mode.
			if (skel.vars.isMobile)
				$body.addClass('is-touch');

	});

})(jQuery);