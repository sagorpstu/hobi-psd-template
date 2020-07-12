$(document).ready(function () {

    

$(".test-active").owlCarousel({
  loop: true,
  margin: 10,
  smartSpeed: 1000,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});


    // ?Fixed Navbar
  $(window).scroll(function () {
    var ourwindow = $(this).scrollTop();

    if (ourwindow > 52) {
      $("body").addClass("fixed_nav");
    } else {
      $("body").removeClass("fixed_nav");
    }
  });


});
