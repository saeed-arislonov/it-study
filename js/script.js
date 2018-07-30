$(document).ready(function () {
	

	setInterval(function(){
		var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
	
		$("#current-date").html(currentDate);
		
		var until = moment("20180802", "YYYYMMDD").fromNow();
		$("#current-date-1").html(until);
	}, 1000)
	
	
	
	
	
	
	$('.single-item-1').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '80px',
					slidesToShow: 3
				}
    },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});

})