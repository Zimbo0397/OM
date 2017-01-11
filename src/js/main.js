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
		$('.content-nav li a').removeClass('active');
		$(this).addClass('active');

		$('#main-tabs li').removeClass('active');
		$('#main-tabs li').eq(atrrNum).addClass('active');
	});
});

$(window).on('load', function() {

	$('#bxslider').bxSlider({
	  auto: true
	});

	var timeSlider = $('#bxslider2').bxSlider({
			infiniteLoop: false,
			hideControlOnEnd: true,
			onSlidePrev: function() {
				var currentSlide = timeSlider.getCurrentSlide();

				$('#slider-indicator li').removeClass('active');
				$('#slider-indicator li').each(function(index) {
					if (currentSlide > index - 1) {
						$(this).addClass('active');
					}
				});

			},
			onSlideNext: function() {
				var currentSlide = timeSlider.getCurrentSlide();

				$('#slider-indicator li').removeClass('active');
				$('#slider-indicator li').each(function(index) {
					if (currentSlide > index - 1) {
						$(this).addClass('active');
					}
				});

			}

		});


	$('#mobile-nav-btn').on('click', function() {
		$('#nav').toggleClass('open')
	});

	
});

