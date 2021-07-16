// magnific popup start

$(document).ready(function(){
	$('.containerr').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery:{
			enabled:true
		}
	});
});

// magnific popup end



// Slider of home page start

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items:1,
		loop:true,
		center:true,
		autoplay:false,
		autoplayHoverPause:true,
		nav:true,
		dots:true,
		responsive:{
			767:{
				items:1
			},
			550:{
				items:1
			},
			220:{
				items:1
			},
		}
	});

});

// slider og home page end









// nav bar area start

$(document).ready(function(){
	$('.nav').click(function(){
		$('.naV').toggleClass('on');
	});
});

// nav bar area end










// slider of service page start 

$(document).ready(function(){
	$('.hi-slide').hiSlide();


// $('#mySlide').hiSlide({
// 	interval: 3000;
// 	speed: 500;
// });
})

// slider of service page end





// animation plugin start

AOS.init();

// animation plugin end




