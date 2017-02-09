function initMap() {
	var myLatLng = {lat: 40.6743890, lng: -73.9455};

	var styleArray = [
		{
			featureType: 'all',
			stylers: [
			{ saturation: -80 }
			]
		},
		{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [
				{ hue: '#00ffee' },
				{ saturation: 50 }
			]
		},
		{
			featureType: 'poi.business',
			elementType: 'labels',
			stylers: [
				{ visibility: 'off' }
			]
		}
	];

	var mapOptions = {
		zoom: 12,
		center: new google.maps.LatLng(40.6743890, -73.9455),
		styles: styleArray,
		disableDefaultUI: true,
		scrollwheel: false
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!'
	});
}


$('.content-nav li a').each(function() {
	var atrrNum = $(this).attr('data-tab');
	$(this).on('click', function(e) {
		e.preventDefault();

		$('.main-modal').addClass('open');
		// $('.content-nav li a').removeClass('active');

		// $(this).addClass('active');

		if($(this).hasClass('active')) {
			$('.content-nav li a').removeClass('active');
			// $(this).removeClass('active');
		} else {
			$('.content-nav li a').removeClass('active');
			$(this).addClass('active');
		}

		// $('#main-tabs li').removeClass('active');
		// $('#main-tabs li').eq(atrrNum).addClass('active');

		if($('#main-tabs li').eq(atrrNum).hasClass('active')) {
			$('#main-tabs li').removeClass('active');
			// $('#main-tabs li').eq(atrrNum).removeClass('active');
		} else {
			$('#main-tabs li').removeClass('active');
			$('#main-tabs li').eq(atrrNum).addClass('active');
		}
	});
});

$(window).on('load', function() {

	$('.tab-close').each(function() {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.main-modal').removeClass('open');
			$('#main-tabs li').removeClass('active');
			$('.content-nav li a').removeClass('active');
		});
	});

	$('#bxslider').bxSlider({
	  auto: true
	});

	var timeSlider = $('#bxslider2').bxSlider({
			infiniteLoop: false,
			hideControlOnEnd: true
		});


	$('#mobile-nav-btn').on('click', function() {
		$('#nav').toggleClass('open')
	});

	
});


// $(document).ready(function(){
//     $("#main-nav").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });


$(document).ready(function() {
    $('#fullpage').fullpage({
    	anchors: ['main', 'portfolio', 'progress', 'maps', 'contacts']
    });
});

