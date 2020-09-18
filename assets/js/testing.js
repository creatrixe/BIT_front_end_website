$(document).ready(function () {
    window.addEventListener("scroll", function() {
        $target = $("#swipes");
        if (window.scrollY > $target[0].offsetTop && window.scrollY < $target[0].offsetTop + 150) {
           $('html').addClass('no-scroll');
        }
        else {
          $('html').removeClass('no-scroll');
        }
      });
      var leftSwiper = new Swiper(".swiper-container-left", {
        direction: "vertical",
       /** mousewheel: {
          invert: true,
          mousewheelReleaseOnEdges: true
        },
      **/
        allowTouchMove: false,
        initialSlide: 3
      });
      var rightSwiper = new Swiper(".swiper-container-right", {
        direction: "vertical",
       /**   mousewheel: true,
        mousewheelReleaseOnEdges: true, */
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
      leftSwiper.on("slideNextTransitionStart", function() {
        rightSwiper.slidePrev(500, false);
      });
      leftSwiper.on("slidePrevTransitionStart", function() {
        rightSwiper.slideNext(500, false);
      });
      rightSwiper.on("slideNextTransitionStart", function() {
        leftSwiper.slidePrev(500, false);
      });
      rightSwiper.on("slidePrevTransitionStart", function() {
        leftSwiper.slideNext(500, false);
      });
      rightSwiper.on("reachEnd", function() {
      
      });
      rightSwiper.on("reachBeginning", function() {
      });
      var waiting = false;
      
      $(window).bind('mousewheel', function(event) {
            if ($('html').hasClass('no-scroll')) {
            if (event.originalEvent.wheelDelta >= 0) {
                if (waiting == false) {
                 l = leftSwiper.slideNext();
                  if (l == false) {
                     $('html').removeClass('no-scroll');
                  } else {
                    waiting = true;
                    setTimeout(function () {
                      waiting = false;
                    },500);
                  }
                }
            }
            else {
              if (waiting == false) {
                var r = rightSwiper.slideNext();
                if (r == false) {
                  $('html').removeClass('no-scroll');
                } else {
                  waiting = true;
                  setTimeout(function () {
                    waiting = false;
                  }, 500);     
                }          
               }
            }
          }
        });
    //   $(document).on('mousewheel', function() {
    //     $(document).trigger('mousewheel');
    var e = jQuery.Event("DOMMouseScroll", {
        delta: -650
    });

    // trigger an artificial DOMMouseScroll event with delta -650
    jQuery(document).trigger(e);
});