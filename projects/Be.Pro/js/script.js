 function myFunction() {
  var x =  document.getElementById("categories");
  if (x.style.display === "block") {
    x.style.display = "none";
} else {
    x.style.display = "block";
  }
}  

/*$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );*/


$(document).ready(function(){
  $('.sl').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  dots:false,
  responsive: [
  {
    breakpoint: 961,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 721,
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
]
  });
});
  

