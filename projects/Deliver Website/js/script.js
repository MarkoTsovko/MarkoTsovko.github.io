$(".lazy").slick({
        autoplay: true,
      autoplaySpeed: 3000,
        dots: false,
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true 
      });
       $(".regular").slick({

        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
       (function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.express-logistics__tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);
$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
    } else {
      $(".set > a i")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down");
      $(this)
        .find("i")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").addClass("active");
    
  });
$(".menu-toggle-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").removeClass("active");
  });
});

$(document).mouseup(function(e) {
        if ( $(e.target).closest("#sidebar-wrapper")) {
            $("#sidebar-wrapper").removeClass("active");
        }
    });