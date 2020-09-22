// $(document).ready(function () {
//     var item_length = $('.horizontal-slider > div').length - 1;
//     $('.horizontal-slider').slick({
//         arrows: true,
//         dots: false,
//         infinite: false,
//         vertical: true,
//         verticalSwiping: true,
//         waitForAnimate: false,
//         fade: true,
//     });

//     $('.vertical-slider').slick({
//         arrows: false,
//         dots: true,
//         infinite: false,
//         vertical: true,
//         verticalSwiping: true,
//     });

//     $('.horizontal-slider').on("afterChange", function (slides, index) {
//         $('.slick-slide').removeClass('animate__animated animate__fadeIn')
//         console.log(index.currentSlide);
//         if($('.slick-slide').hasClass('slick-active')) {
//             $('.slick-active').addClass('animate__animated animate__fadeIn')
//         }
//         else {
//             $('.slick-slide').removeClass('animate__animated animate__fadeIn')
//         }
//         if (index.slideCount - 2 >= index.currentSlide) {
//         }
//     });

//     $('.vertical-slider').bind('mousewheel', function (e) {
//         if (e.deltaY < 0) {
//             if ($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
//                 return
//             }

//             e.preventDefault()
//             $(this).slick('slickNext')
//         } else {
//             if ($(this).slick('slickCurrentSlide') == 0) {
//                 return
//             }

//             e.preventDefault()
//             $(this).slick('slickPrev')
//         }
//     });
// })

$(document).ready(function () {
    window.addEventListener("scroll", function () {
        $target = $(".vertical-slider");
        // if (window.scrollY > $target[0].offsetTop - 60 && window.scrollY < $target[0].offsetTop) {
        //     $('html').addClass('no-scroll');
        // } else {
        //     $('html').removeClass('no-scroll');
        // }

        //   var leftSwiper = new Swiper(".swiper-container-left", {
        //       direction: "vertical",
        //       invert: false,
        //       allowTouchMove: false,
        //       effect: 'fade',
        //       fadeEffect: {
        //           crossFade: true
        //       },
        //       // pagination: {
        //       //     el: ".swiper-pagination"
        //       //   },
        //       //   navigation: {
        //       //     nextEl: ".swiper-button-next",
        //       //     prevEl: ".swiper-button-prev"
        //       //   },
        //   });
        //   leftSwiper.on('slideChange', function () {
        //     console.log(this.activeIndex);
        //     if(this.activeIndex <=2) {

        //     }
        //      else if(this.activeIndex > 2) {

        //         }
        //     });

        // $(".owl_carousel_new").not('.slick-initialized').slick()
        // $('.owl_carousel_new').slick({
        //     dots: true,
        //     vertical: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     verticalSwiping: true,
        //     infinite: false,
        //   });
        var waiting = false;
        // $(window).bind('mousewheel', function (event) {
        //     if ($('html').hasClass('no-scroll')) {
        //         if (event.originalEvent.wheelDelta >= 0) {
        //             if (waiting == false) {
        //                 //   l = leftSwiper.slidePrev();
        //                 if (l == false) {
        //                     $('html').removeClass('no-scroll');
        //                 } else {
        //                     waiting = true;
        //                     setTimeout(function () {
        //                         waiting = false;
        //                     }, 500);
        //                 }
        //             }
        //         } else if (event.originalEvent.wheelDelta < 0) {
        //             if (waiting == false) {
        //                 //   l = leftSwiper.slideNext();
        //                 if (l == false) {
        //                     $('html').removeClass('no-scroll');
        //                 } else {
        //                     waiting = true;
        //                     setTimeout(function () {
        //                         waiting = false;
        //                     }, 500);
        //                 }
        //             }
        //         }
        //     }
        // });
        if ($('.slide-left-1').hasClass('swiper-slide-active')) {
            $('.test_div').removeClass('d-flex').addClass('d-none');
        } else if ($('.slide-left-0').hasClass('swiper-slide-active')) {
            $('.test_div').addClass('d-flex').removeClass('d-none');
        }
    });
    //   $(document).on('mousewheel', function() {
    //     $(document).trigger('mousewheel');
    var e = jQuery.Event("DOMMouseScroll", {
        // delta: -650
    });

    // trigger an artificial DOMMouseScroll event with delta -650
    jQuery(document).trigger(e);
});

$(document).ready(function () {

    if ($(window).width() <= 768) {
        $('.main_nav_bar .business_logo').attr('src', 'assets/img/logo.svg');
    }

    $('.lazy_loading').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fade',
        visibleOnly: true,
        onError: function (element) {
            console.log('error loading ' + element.data('src'));
        }
    });

    $('.business_btn_toggle').click(function () {
        setTimeout(() => {
            $(".se-pre-con").fadeIn("slow");
        }, 700);
        setTimeout(() => {
            window.location.assign('/business.html')
        }, 3000);
    });

    $('.customer_btn_toggle').click(function () {
        setTimeout(() => {
            $(".se-pre-con").fadeIn("slow");
        }, 700);
        setTimeout(() => {
            window.location.assign('/index.html')
        }, 3000);
    });

    $(".back_img").hover(function () {
        $(this).children().children('.inner_div').toggleClass("shadow-lg bg-white border-radius-25px");
        $(this).children('.hover_visible').toggleClass("d-block");
        $('.back_img_2').toggleClass('min-80vh');
        $('.back_img_2').children('.always_visible').toggleClass("d-none");
        $('.back_img_2').children().children('.always_visible_text').toggleClass("shadow-lg bg-white border-radius-25px");
    });

    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    $('.waiting_list_joined').click(function () {
        var emailaddressVal = $('#mce-EMAIL').val();
        if (emailaddressVal != "" && emailReg.test(emailaddressVal)) {
            $('.waiting_list_joined').addClass('min-width-100p h-100');
            $(".waiting_list_joined").html('Invitation list joined!');
        }
    });

    // START smooth scrolling
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 86
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        //   $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            // $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    // END smooth scrolling
});

$(window).scroll(function () {
    // navbar scroll
    if ($(window).scrollTop() > 15) {
        $('.main_nav_bar').addClass('shadow-lg bg-white transition-okay');
        $('.main_nav_bar .business_logo').attr('src', 'assets/img/logo.svg');
        $('.main_nav_bar .navbar-brand').addClass('size-60px transition-okay');
    } else {
        $('.main_nav_bar').removeClass('shadow-lg bg-white');
        $('.main_nav_bar .business_logo').attr('src', 'assets/img/white_logo.svg');
        $('.main_nav_bar .navbar-brand').removeClass('size-60px');
        if ($(window).width() <= 768) {
            $('.main_nav_bar .business_logo').attr('src', 'assets/img/logo.svg');
        }
    }
});
setTimeout(() => {
    var TopSection = $('.customer_hero_section');
    var WorkSection = $('.customer_how_works');
    var cust_feature = $('.customer_feature_section');
    // var FeatureSection = $('#features');
    var set_height = TopSection.height() + WorkSection.height();
    var set_height_next = WorkSection.height() + cust_feature.height() - 50;
    $('.test_div').height(set_height);
    $('.next_section_mobile').height(set_height_next);
}, 1000);

$(document).ready(function () {

    // main image scroll

    if ($('div').hasClass('check_div')) {
        gsap.utils.toArray(".check_div").forEach(section => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: () => section.offsetHeight,
                    scrub: true,
                    pin: false,
                    anticipatePin: 1
                },
                defaults: {
                    ease: "none"
                },
            });
        });
    }

    //   image scroll js
    var wv = $(window).width();

    if ($('section').hasClass('Desktop_comparison_section')) {


        var set_main_top = 285;

        if (wv < 992) {
            var DesktopsetPosition = "top top";
        }
        if (wv > 992 && wv <= 1024) {
            var DesktopsetPosition = set_main_top - 60 + "px center";
        }
        if (wv > 1024 && wv <= 1280) {
            var DesktopsetPosition = set_main_top - 70 + "px center";
        }
        if (wv > 1280 && wv <= 1600) {
            var DesktopsetPosition = set_main_top - 60 + "px center";
        }
        if (wv > 1600) {
            var DesktopsetPosition = set_main_top + "px center";
        }

        gsap.utils.toArray(".Desktop_comparison_section").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    markers: false,
                    start: DesktopsetPosition,
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: "+=" + section.offsetHeight,
                    // onUpdate: self => {
                    //     if(self.progress==1){
                    //         console.log('complete')
                    //     }
                    //     console.log("progress:", self.progress)
                    // },
                    scrub: true,
                    pin: false,
                    anticipatePin: 1
                },
                defaults: {
                    ease: "none"
                },
            });
            $('.Desktop_comparison_section .comparisonImage').height(section.offsetHeight)
            console.log(section.offsetHeight)
            // animate the container one way...
            tl.fromTo(section.querySelector(".Desktop_comparison_section .afterImage"), {
                    yPercent: 100,
                    x: 0
                }, {
                    yPercent: 0
                })
                // ...and the image the opposite way (at the same time)
                .fromTo(section.querySelector(".Desktop_comparison_section .afterImage img"), {
                    yPercent: -100,
                    x: 0
                }, {
                    yPercent: 0
                }, 0);
        });
    }
    if ($('section').hasClass('next_mobile_comparison_section')) {

        var set_middle_top = 420

        if (wv < 992) {
            var next_mobile_comparison_section_Position = "top top";
        }
        if (wv > 992 && wv <= 1024) {
            var next_mobile_comparison_section_Position = set_middle_top - 160 + "px center";
        }
        if (wv > 1024 && wv <= 1280) {
            var next_mobile_comparison_section_Position = set_middle_top - 160 + "px center";
        }
        if (wv > 1280 && wv <= 1600) {
            var next_mobile_comparison_section_Position = set_middle_top - 156 + "px center";
        }
        if (wv > 1600) {
            var next_mobile_comparison_section_Position = set_middle_top + "px center";
        }

        gsap.utils.toArray(".next_mobile_comparison_section").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    markers: false,
                    start: next_mobile_comparison_section_Position,
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: "+=" + section.offsetHeight,
                    // onUpdate: self => {
                    //     if(self.progress==1){
                    //         console.log('complete')
                    //     }
                    //     console.log("progress:", self.progress)
                    // },
                    scrub: true,
                    pin: false,
                    anticipatePin: 1
                },
                defaults: {
                    ease: "none"
                },
            });
            $('.next_mobile_comparison_section .comparisonImage').height(section.offsetHeight)
            console.log(section.offsetHeight)
            // animate the container one way...
            tl.fromTo(section.querySelector(".next_mobile_comparison_section .afterImage"), {
                    yPercent: 100,
                    x: 0
                }, {
                    yPercent: 0
                })
                // ...and the image the opposite way (at the same time)
                .fromTo(section.querySelector(".next_mobile_comparison_section .afterImage img"), {
                    yPercent: -100,
                    x: 0
                }, {
                    yPercent: 0
                }, 0);
        });
    }

    if ($('section').hasClass('Mobile_comparison_section')) {

        gsap.utils.toArray(".Mobile_comparison_section").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: () => "+=" + section.offsetHeight,
                    scrub: true,
                    pin: false,
                    anticipatePin: 1
                },
                defaults: {
                    ease: "none"
                }
            });
            $('.Mobile_comparison_section .comparisonImage').height(section.offsetHeight)
            console.log(section.offsetHeight)
            // animate the container one way...
            tl.fromTo(section.querySelector(".Mobile_comparison_section .afterImage"), {
                    yPercent: 100,
                    x: 0
                }, {
                    yPercent: 0
                })
                // ...and the image the opposite way (at the same time)
                .fromTo(section.querySelector(".Mobile_comparison_section .afterImage img"), {
                    yPercent: -100,
                    x: 0
                }, {
                    yPercent: 0
                }, 0);
        });
    }


    // $('.tooltip').mouseenter(function () {
    //     var get_tooltip_id = $(this).children('.py-4').attr('id');
    //     var arr = [];
    //     i = 0;
    //     $('.tooltiptext').each(function () {
    //         arr[i++] = $(this).attr('id');
    //     })
    //     for (j = 0; j < arr.length; j++) {
    //         var name = arr[j];
    //         if (name == get_tooltip_id) {
    //             $('.tooltiptext').removeClass('d-block');
    //             $('.tooltiptext#' + name).addClass('d-block')
    //             $('.tooltip').children('.py-4').removeClass('tooltip_hover');
    //             $('.tooltip').children('#' + get_tooltip_id).addClass('tooltip_hover')
    //             break;
    //         }
    //     }
    // })

    // $(document).click(function () {
    //     if ($('.tooltiptext').hasClass('d-block')) {
    //         $('.tooltiptext').removeClass('d-block')
    //     }
    //     if ($('.tooltip').children('.py-4').hasClass('tooltip_hover')) {
    //         $('.tooltip').children('.py-4').removeClass('tooltip_hover');
    //     }
    // })

    // (function($) {
    //     $.fn.visible = function(partial) {

    //         var $t            = $(this),
    //             $w            = $(window),
    //             viewTop       = $w.scrollTop(),
    //             viewBottom    = viewTop + $w.height(),
    //             _top          = $t.offset().top,
    //             _bottom       = _top + $t.height(),
    //             compareTop    = partial === true ? _bottom : _top,
    //             compareBottom = partial === true ? _top : _bottom;

    //       return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    //     };

    //   })(jQuery);

    //   $(window).scroll(functio() {

    //     $(".Desktop_comparison_section").each(function() {

    //       if (el.visible(true)) {
    //         el.addClass("d-none"); 
    //       } else {
    //         el.removeClass("d-none");
    //       }
    //     });

    //   });

});

// tooltip section
$(document).ready(function () {
    $('.fav-brands-list div[data-toggle="tooltip"]').hover(function () {
        $(this).toggleClass('bg-white shadow border-radius-25px');
    });
    // $("#Accommodations").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"> <span class="text-red font-bold">Accommodations, Travel &Tourism</span>Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/accommodation/19072.png" alt="" class="img-fluid max-width-150px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/accommodation/hilton.svg" alt="" class="img-fluid max-width-150px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/accommodation/haven.svg" alt="" class="img-fluid max-width-150px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/accommodation/hilton.svg" alt="" class="img-fluid max-width-150px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/accommodation/haven.svg" alt="" class="img-fluid max-width-150px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/accommodation/wales.jpg" alt="" class="img-fluid max-width-150px"></div></div></div>',
    //     html: true,
    // });
    // $("#Apparel").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"> <span class="text-red font-bold">Apparel & Accessories</span> Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/al-karam.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/gulahmed.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/JDot.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/khaadi.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/gulahmed.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/LimeLight.webp" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/maria-b.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/outfitters.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/sana-safinaz.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/fashion/sapphire.gif" alt="" class="img-fluid max-width-150px max-height-80px"></div></div></div>',
    //     html: true,
    // });
    // $("#Automotive").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"> <span class="text-red font-bold">Automotive & Repair</span> Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/automotive/amralogo_header.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/automotive/autoboys.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/automotive/cba.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/automotive/rsa.png" alt="" class="img-fluid max-width-150px max-height-80px"></div></div></div>',
    //     html: true,
    // });
    // $("#Business").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"> <span class="text-red font-bold">Business Supplies</span> Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/business/css.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/business/economy.jpg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/business/afflink.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/business/stationary.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/business/uk.webp" alt="" class="img-fluid max-width-150px max-height-80px"></div></div></div>',
    //     html: true,
    // });
    // $("#Computers").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"> <span class="text-red font-bold">Computers & Electronics</span> Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/apple.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/beats.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/canon.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/dell.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/gopro.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/hp.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/lg.jpg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/nikon.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/samsung.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/sandisk.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/computer/sony.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div></div></div>',
    //     html: true,
    // });
    // $("#Construction").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"> <span class="text-red font-bold">Construction, Contractors &Industrial</span> Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/fluor.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/gray.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/jacob.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/walbridge.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div></div></div>',
    //     html: true,
    // });
    // $("#Education").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"> <span class="text-red font-bold">Education & Employment</span> Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/fluor.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/gray.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/jacob.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/walbridge.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div></div></div>',
    //     html: true,
    // });
    // $("#Finance").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"> <span class="text-red font-bold">Finance, Law & Professional Services</span> Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/fluor.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/gray.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/jacob.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/walbridge.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div></div></div>',
    //     html: true,
    // });
    // $("#Food").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"> <span class="text-red font-bold">Food & Drink</span> Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/pizza.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/pizzahut.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/kfc.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/McDonald.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/subway.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/bucketboss.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/subway.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/pizza.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/burgerking.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/kfc.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/queen.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/pizzahut.png" alt="" class="img-fluid max-width-150px max-height-80px"></div></div></div>',
    //     html: true,
    // });
    // $("#Gifts").tooltip({
    //     title: '<div class="fav-brand-sub-category col py-4"><div class="text-center"><h3 class="sub-category-heading"><span class="text-red font-bold">Gifts, Games, Weddings & Event Planning</span> Brands</h3></div><div class="row row-cols-1 row-cols-lg-5 row-cols-xxl-6"><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/fluor.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/gray.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/jacob.png" alt="" class="img-fluid max-width-150px max-height-80px"></div><div class="col mt-5 d-flex justify-content-center align-items-center col-sm-3"><img src="assets/img/construction/walbridge.svg" alt="" class="img-fluid max-width-150px max-height-80px"></div></div></div>',
    //     html: true,
    // });
});

$(window).on('load', function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});

// new loader
$(document).ready(function () {
    var counter = 0;

    // Start the changing images
    setInterval(function () {
        if (counter == 9) {
            counter = 0;
        }

        changeImage(counter);
        counter++;
    }, 3000);

    // Set the percentage off
    loading();
});

function changeImage(counter) {
    var images = [
        '<img src="assets/img/Browse brands-Apparel.svg" alt="" class="img-fluid mb-3 height-70px">',
        '<img src="assets/img/Browse brands-Automotive.svg" alt="" class="img-fluid mb-3 height-70px">',
        '<img src="assets/img/Browse brands-Business supplies.svg" alt="" class="img-fluid mb-3 height-70px">',
        '<img src="assets/img/Browse brands-Computers & Electronics.svg" alt="" class="img-fluid mb-3 height-70px">',
        '<img src="assets/img/Browse brands-Construction.svg" alt="" class="img-fluid mb-3 height-70px">',
        '<img src="assets/img/Browse brands-Education.svg" alt="" class="img-fluid mb-3 height-70px">',
        '<img src="assets/img/Browse brands-Finance & law.svg" alt="" class="img-fluid mb-3 height-70px">',
        '<img src="assets/img/Browse brands-Food & Drink.svg" alt="" class="img-fluid mb-3 height-70px">',
        '<img src="assets/img/Browse brands-Gifts.svg" alt="" class="img-fluid mb-3 height-70px">',
        '<img src="assets/img/online-store-fill.svg" alt="" class="img-fluid mb-3 height-70px">'
    ];

    $(".loader .image").html("" + images[counter] + "");
}

function loading() {
    var num = 0;

    for (i = 0; i <= 100; i++) {
        setTimeout(function () {
            $('.loader span').html(num + '%');

            if (num == 100) {
                loading();
            }
            num++;
        }, i * 120);
    };

}