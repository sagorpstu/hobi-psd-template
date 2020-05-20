$(document).ready(function () {

    // Preloader

    // function loader() {
    //     $(window).on('load', function () {
    //         $('#ctn-preloader').addClass('loaded');
    //         $("#loading").fadeOut(500);
    //         // once the preloader has finished, the scroll appears

    //         if ($('#ctn-preloader').hasClass('loaded')) {
    //             // once the preloader is gone, the entire preloader section is removed
    //             $('#preloader').delay(900).queue(function () {
    //                 $(this).remove();
    //             });
    //         }
    //     });
    // }
    // loader();

// Preloader

$(".test-active").owlCarousel({
  loop: true,
  margin: 10,
  smartSpeed: 1000,
  autoplay: false,
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


    // ?Wow Animation

    // new WOW().init();
    
    // ?Wow Animation


});