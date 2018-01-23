$(document).ready(function() {
	$( '#nav li:has(ul)' ).doubleTapToGo();

	$('.slider').each( function() {
		$('.detail-slideshow', this).bxSlider({
			pagerCustom: $('.detail-thumbs', this)
		});
	});

	$('.slider-box').bxSlider({
		pagerCustom: $('.pager'),
		auto: true,
		pause: 6000,
		autoHover: false
	});
	$('.button-accordeon').click(function() {
		var accordeon = $(this).parents('.accordeon');
		if (accordeon.hasClass('closed')) {
			accordeon.removeClass('closed');
		} else {
			accordeon.addClass('closed');
		}
		return false;
	});

	$('.technologies').each( function() {
		var carousel = $('.carousel', this).owlCarousel({
		    //Basic Speeds
		    slideSpeed : 200,
		    paginationSpeed : 800,
		 
		    //Autoplay
		    autoPlay : false,
		    goToFirst : true,
		    goToFirstSpeed : 1000,
		 
		    // Navigation
		    navigation : false,
		    navigationText : false,
		    pagination : true,
		    paginationNumbers: false,
		 
		    // Responsive 
		    responsive: true,
		    items : $('.carousel', this).attr('data-items'),
		    itemsDesktop : [1199,4],
		    itemsDesktopSmall : [1180,3],
		    itemsTablet: [860,2],
		    itemsMobile : [639,1],
		    
		    // CSS Styles
		    baseClass : "owl-carousel",
		    theme : "owl-theme" 
		}).data('owlCarousel');
		$('.next', this).click(function() {
			carousel.goTo((Math.floor(carousel.currentSlide/carousel.options.items) + 1) * carousel.options.items)
		});
		$('.prev', this).click(function() {
			carousel.goTo((Math.floor(carousel.currentSlide/carousel.options.items) - 1) * carousel.options.items)
		});
	});

	$('.production').each( function() {
		var carousel = $('.carousel', this).owlCarousel({
		    //Basic Speeds
		    slideSpeed : 200,
		    paginationSpeed : 800,
		 
		    //Autoplay
		    autoPlay : false,
		    goToFirst : true,
		    goToFirstSpeed : 1000,
		 
		    // Navigation
		    navigation : false,
		    navigationText : false,
		    pagination : true,
		    paginationNumbers: false,
		 
		    // Responsive 
		    responsive: true,
		    items : $('.carousel', this).attr('data-items'),
		    itemsDesktop : [1199,5],
		    itemsDesktopSmall : [1180,4],
		    itemsTablet: [860,3],
		    itemsMobile : [639,2],
		    // CSS Styles
		    baseClass : "owl-carousel",
		    theme : "owl-theme" 
		}).data('owlCarousel');
		$('.next', this).click(function() {
			carousel.goTo((Math.floor(carousel.currentSlide/carousel.options.items) + 1) * carousel.options.items)
		});
		$('.prev', this).click(function() {
			carousel.goTo((Math.floor(carousel.currentSlide/carousel.options.items) - 1) * carousel.options.items)
		});
	});

	$(".player").click(function(e) {
     	e.preventDefault();
     	$(".player").html('<iframe width="'+ $(this).find('img').width() + 'px' +
	    	'" height="'+ $(this).find('img').height() + 'px' +
	    	'" src="' + $(this).data('src') + '?&rel=0&wmode=transparent&autoplay=1' +
	    	'" allowfullscreen></iframe>');

      	ga('send', 'pageview', {
			'page': $(this).data('page'),
			'title': $(this).attr('title')
	  	});
    });
    $(".player").click(function(){
     	$(this).unbind("click");
    });

    window.onmessage = function (message) {
    	$('iframe#external').height(message.data.height)
    }

});

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};