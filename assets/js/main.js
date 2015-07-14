/*
	Alpha by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

    var sizes = [
[940, 750, 1440],
[633, 550, 1250],
[515, 430, 1600],
[0, 250, 2050]
],
        url = 'http://tools.bongacams.com/promo.php?c=291639&type=dynamic_banner&db%5Bwidth%5D={width}&db%5Bheight%5D={height}&db%5Btype%5D=live&db%5Bmodel_zone%5D=free&db%5Bheader%5D=0&db%5Bfooter%5D=none&db%5Bmlang%5D=0&db%5Bfullscreen%5D=&db%5Bmname%5D=1&db%5Bmlink%5D=1&db%5Bmstatus%5D=1&db%5Bmsize%5D=auto&db%5Bmpad%5D=0&db%5Bmwidth%5D=374&db%5Bcolor_scheme%5D=custom&db%5Bmborder%5D=solid&db%5Bmborder_color%5D=%23ffffff&db%5Bmborder_over_color%5D=%23a02239&db%5Bmshadow%5D=0&db%5Bmodels_by_geo%5D=0&db%5Bautoupdate%5D=1&db%5Blanding%5D=chat&db%5Blogo_color%5D=default&db%5Bbg_color%5D=%23E9E9E9&db%5Bfont_family%5D=Arial&db%5Btext_align%5D=center&db%5Btext_color%5D=%23525252&db%5Blink_color%5D=%232094fa&db%5Beffect%5D=auto&db%5Beffect_speed%5D=optimal&db%5Bmode%5D=mode1&db%5Bcategories%5D%5B%5D=babes&db%5Bcategories%5D%5B%5D=big-butt&db%5Bcategories%5D%5B%5D=big-tits&db%5Bcategories%5D%5B%5D=blonde&db%5Bcategories%5D%5B%5D=brunette&db%5Bcategories%5D%5B%5D=college-girls&db%5Bcategories%5D%5B%5D=couples&db%5Bcategories%5D%5B%5D=mature&db%5Bcategories%5D%5B%5D=medium-tits&db%5Bcategories%5D%5B%5D=redhead&db%5Bcategories%5D%5B%5D=shaved-pussy&db%5Bcategories%5D%5B%5D=small-tits&db%5Bcategories%5D%5B%5D=squirt&db%5Bcategories%5D%5B%5D=teens-18&db%5Bcategories%5D%5B%5D=toys';

    
    $( window ).resize(adjust_iframe);
    
    function adjust_iframe() {
        var w = $(window).width();
        sizes.some(function (s){
            if (w > s[0]) {
    var src = url.replace("{width}", s[1])
            .replace("{height}", s[2]);
if (src != $("#adv").attr("src")) {
    $("#adv").width(s[1]);
    $("#adv").height(s[2]);
    $("#adv").attr("src", src);                
}
    return true;
            }
        });

}
    
	$(function() {

        adjust_iframe();
        
		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});


			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.mobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		0.5,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

				});

			}

	});

})(jQuery);