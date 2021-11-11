(function($) {

  "use strict";

  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();


  /*
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

  /*
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /*
   One Page Navigation
   ========================================================================== */


    $(window).on('load', function() {

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $('#contactForm').submit(function(event) {
          event.preventDefault();
          var email = $('#email').val();
          var url = "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdj2RFgaFt4iNCCY6WZonKxa_g6TXllTnw0wavGypyCsn7orA/formResponse?&entry.1440052187=" + email + "&submit=SUBMIT"

          var opts = {
            method: "POST",
            mode: "no-cors", // apparently Google will only submit a form if "mode" is "no-cors"
            redirect: "follow",
            referrer: "no-referrer"
          }

          fetch(url, opts).then(() => {
            window.location.href = "";
          });
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

}(jQuery));

