var progress = 0;
var tl;
var second_mobile_on;
var controller_2;
var wipeAnimation_2;
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  $(window).scroll(function(){
    if ($(window).scrollTop() > 15) {
        $('.main_nav_bar').addClass('shadow-lg bg-black transition-okay');
        $('.main_nav_bar .business_logo').attr('src', 'assets/img/logo.png');
        $('.main_nav_bar .navbar-brand').addClass('size-100px transition-okay');
    } else {
        $('.main_nav_bar').removeClass('shadow-lg bg-black');
        $('.main_nav_bar .business_logo').attr('src', 'assets/img/white_logo.svg');
        $('.main_nav_bar .navbar-brand').removeClass('size-100px');
        if($(window).width()<=768) {
            $('.main_nav_bar .business_logo').attr('src', 'assets/img/logo.png');
        }
    }
  })

$(document).ready(function () {
    setTimeout(() => {
        $('div[data-scrollmagic-pin-spacer]').addClass('min-vh-100')
    }, 2000);

    if ($(window).width() <= 768) {
        $('.main_nav_bar .business_logo').attr('src', 'assets/img/logo.png');
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
//        .not('[href="#"]')
//        .not('[href="#0"]')
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

$(document).ready(function () {

    // main image scroll

    // if ($('div').hasClass('check_div')) {
    //     gsap.utils.toArray(".check_div").forEach(section => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: section,
    //                 start: "top top",
    //                 // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    //                 end: () => section.offsetHeight,
    //                 scrub: true,
    //                 pin: false,
    //                 anticipatePin: 1
    //             },
    //             defaults: {
    //                 ease: "none"
    //             },
    //         });
    //     });
    // }

    //   image scroll js
    var wv = $(window).width();
    var wh = $(window).height();

    if (($('section').hasClass('Desktop_comparison_section'))&& ($('.test_div').css('display').toLowerCase() == 'flex')) {


        var set_main_top = 0;

        if (wv <= 992) {
            var DesktopsetPosition = "top top";
        }
        else if (wv > 992 && wv <= 1400) {
            var set_main_top = 0;
            var DesktopsetPosition = set_main_top + "px 0px";
        }
        else if (wv > 1400) {
            var set_main_top = 0;
            var DesktopsetPosition = set_main_top + "px 0px";
        }

        gsap.utils.toArray(".Desktop_comparison_section").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    markers: false,
                    start: () => DesktopsetPosition,
                    end: () => section.offsetHeight+set_main_top+'top',
                    // start: () => '50px 0px',
                    // end: () => section.offsetHeight+50+'top',
                    // end: () => '550px 0px',
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
            // console.log(section.offsetHeight);
            $('.Desktop_comparison_section .comparisonImage').height(section.offsetHeight)
            // console.log(section.offsetHeight)
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
    if (($('section').hasClass('next_mobile_comparison_section'))&& ($('.last_mobile_section').css('display').toLowerCase() == 'block')) {

        
        // $(function () { // wait for document ready
        //     // init
        //     controller_2 = new ScrollMagic.Controller();
        //     // define movement of panels
        //     wipeAnimation_2 = new TimelineMax()
        //       .fromTo(".next_mobile_comparison_section .afterImage img", 1, {
        //           y: -100,
        //         }, {
        //             y: 0,
        //         ease: Expo.easeInOut
        //       },0);

        //     // create scene to pin and link animation
        //     second_mobile_on = new ScrollMagic.Scene({
        //         triggerElement: ".next_mobile_comparison_section",
        //         triggerHook: "onLeave",
        //         duration: "100%"
        //       }).on('start', function () {
        //         // console.log("passed trigger");
        //         // $('.test_div').toggleClass('opacity-0 d-flex')
        //       }).on("end", function () {
        //         // $('.last_mobile_section').toggleClass('d-flex')
        //         // progress = tl.progress();
        //         // tl.kill();
        //         // translate();
        //       })
        //   });
        

        var set_middle_top = 0
        if (wv <= 992) {
            var next_mobile_comparison_section_Position = "top top";
        }
        else if (wv > 992 && wv <= 1400) {
            var set_middle_top = 0;
            var next_mobile_comparison_section_Position = set_middle_top + "px 0px";
        }
        else if (wv > 1400) {
            var set_middle_top = 0;
            var next_mobile_comparison_section_Position = set_middle_top + "px 0px";
        }

        gsap.utils.toArray(".next_mobile_comparison_section").forEach(section => {
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    markers: false,
                    start: () => next_mobile_comparison_section_Position,
                    end: () => section.offsetHeight+set_middle_top+'top',
                    // start: "-30px top",
                    // end: () => section.offsetHeight-30+'top',
                    // end: "500px 0px",
                    onUpdate: self => {
                        // if(self.progress==1){
                        //     console.log('complete')
                        // }
                        // console.log("progress:", self.progress)
                    },
                    scrub: true,
                    pin: false,
                    anticipatePin: 1
                },
                defaults: {
                    ease: "none"
                },
            });
            $('.next_mobile_comparison_section .comparisonImage').height(section.offsetHeight)
            // console.log(section.offsetHeight)
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

    if (($('section').hasClass('Mobile_comparison_section')) && ($('.mobile_1st_section').css('display').toLowerCase() == 'block')) {
        if (wv <= 992) {
            var set_mobile_top = -80;
            var _mobile_comparison_section_Position = set_mobile_top + "px 0px";
        }
        if (wh > 768 && wh < 1025) {
            var set_mobile_top = 165;
            var _mobile_comparison_section_Position = set_mobile_top + "px 0px";
        }

        gsap.utils.toArray(".Mobile_comparison_section").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: () => _mobile_comparison_section_Position,
                    end: () => section.offsetHeight+set_mobile_top+'top',
                    // start: "top 80px",
                    // end: () => "+=" + section.offsetHeight,
                    scrub: true,
                    pin: false,
                    markers: false,
                    anticipatePin: 1
                },
                defaults: {
                    ease: "none"
                }
            });
            $('.Mobile_comparison_section .comparisonImage').height(section.offsetHeight)
            // console.log(section.offsetHeight)
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

    //   $(window).scroll(function() {

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

            // if (num == 100) {
                // loading();
            // }
            num++;
        }, i * 240);
    };
}