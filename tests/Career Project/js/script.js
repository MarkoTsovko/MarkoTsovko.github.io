$(document).ready(function(){
	$('.partners__slider').slick({
		arrows: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
/*      	prevArrow: $('.next'),
      	nextArrow: $('.prev'),*/
      	  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
});

 $( ".burger" ).click(function check() {
  $( this ).toggleClass( "burgeractive"),
  $("body").toggleClass("off"),
  $(".responsive__menu").toggleClass("display-visiable");
});
