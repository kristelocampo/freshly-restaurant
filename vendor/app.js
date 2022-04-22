// ================================================
// tester si jQuery est bien installé
// ================================================

// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Youpiiii !!!!");
//     } else {
//         // jQuery is not loaded
//         alert("Marche poaah");
//     }
// };


$(document).ready(function() {
	
	
    $(".button-toggle").click(function(){
      $("body").toggleClass("dark");
    });
    
    
    
    $(".button-dark").click(function(){
      $("body").addClass("dark");
    });
    
    
    $(".button-light").click(function(){
      $("body").removeClass("dark");
    });
    
    
    
// ================================================
// owl carousel
// ================================================

	// if ($(".home-carousel__inner").length > 0) {
	// 	var $homeCarousel = $(".home-carousel__inner");
	// 	$homeCarousel.owlCarousel({
	// 	items: 1,
	// 	dots: true,
	// 	nav: true,
	// 	loop: true,
	// 	// animateOut: 'fadeOut',
 // //  	// animateIn: 'flipInX',
	// 	// autoplayTimeout: 8500,
	// 	// smartSpeed: 450,
	// 	// smartSpeed: 700,
	// 	// slideSpeed: 2000,
	// 	// paginationSpeed: 5000,
	// 	autoplay: true,
	// 	// autoplayTimeout: 4000,
	// 	responsive:{
	// 		0:{
	// 			items:1
	// 		},
	// 		600:{
	// 			items:1
	// 		},
	// 		1000:{
	// 			items:1
	// 		}
	// 	}
	// 	// "autoplayHoverPause": true
	// 	});
	// }
	
	
	
// ================================================
// slick slider
// ================================================
	

	if ($(".slider").length > 0) {
		
		$('.slider').slick({
		  infinite: true,
		  dots: true,
		  arrows: true
		});
	}	


// ================================================
// mixitup
// ================================================
    
	if ($(".mix-container").length > 0) {    
	   var mixer = mixitup('.mix-container');
	}  
   
   
// ================================================
// fancybox
// ================================================
   
   
	$('[data-fancybox="my-gallery"]').fancybox({
		loop: true,
		buttons: [
			"zoom",
			//"share",
			"slideShow",
			//"fullScreen",
			//"download",
			"thumbs",
			"close",
		],
		// Transition effect between slides
		//
		// Possible values:
		//   false            - disable
		//   "fade'
		//   "slide'
		//   "circular'
		//   "tube'
		//   "zoom-in-out'
		//   "rotate'
		//
		transitionEffect: "tube",
	});
    
    
});