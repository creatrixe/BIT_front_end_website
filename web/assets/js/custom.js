$(document).ready(function () {

    if($(window).width()<=768) {
        $('.main_nav_bar .business_logo').attr('src', 'assets/img/logo.svg');
    }

    $('.lazy_loading').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function (element) {
            console.log('error loading ' + element.data('src'));
        }
    });

    $('.business_btn_toggle').click(function(){
        setTimeout(() => {
            $(".se-pre-con").fadeIn("slow");
        }, 700);
        setTimeout(() => {
            window.location.assign('/business.html')
        }, 3000);
    });

    $('.customer_btn_toggle').click(function(){
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
    var emailaddressVal = $('#mce-EMAIL').val();
    $('.waiting_list_joined').click(function () {
        if (emailaddressVal != "" && !emailReg.test(emailaddressVal)) {
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
                        scrollTop: target.offset().top-86
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

    $('.customer_feature_section .carousel_actions a[data-toggle="collapse"]').click(function () {
        $('.customer_feature_section .carousel_actions a[data-toggle="collapse"]').removeClass('text-black').addClass('text-mid-black');
        $('.customer_feature_section .carousel_actions a[data-toggle="collapse"]').parent().parent().parent().find('img').removeClass('size-100');
        $(this).removeClass('text-mid-black').addClass('text-black');
        $(this).parent().parent().parent().find('img').addClass('size-100');
    });

    $('.carousel_buttons_2').removeClass('d-flex').addClass('d-none');
    $('.carousel_buttons_3').removeClass('d-flex').addClass('d-none');
    $('.carousel_buttons_4').removeClass('d-flex').addClass('d-none');

    $('.carousel_buttons_1 .up_arrow').click(function () {
        $('.carousel_actions').find('img').removeClass('size-100');
        $('.heading_four').find('img').addClass('size-100');
        $('.heading_one [data-target="#collapseOne"]').removeClass('text-black').addClass('text-mid-black');
        $('.heading_four [data-target="#collapseFour"]').removeClass('text-mid-black').addClass('text-black');
        $('.carousel_buttons_1').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_4').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section_4th_option.svg');
    });

    $('.carousel_buttons_1 .down_arrow').click(function () {
        $('.carousel_actions').find('img').removeClass('size-100');
        $('.heading_two').find('img').addClass('size-100');
        $('.heading_one [data-target="#collapseOne"]').removeClass('text-black').addClass('text-mid-black');
        $('.heading_two [data-target="#collapseTwo"]').removeClass('text-mid-black').addClass('text-black');
        $('.carousel_buttons_1').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_2').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section_2nd_option.svg');
    });

    $('.carousel_buttons_2 .up_arrow').click(function () {
        $('.carousel_actions').find('img').removeClass('size-100');
        $('.heading_one').find('img').addClass('size-100');
        $('.heading_two [data-target="#collapseTwo"]').removeClass('text-black').addClass('text-mid-black');
        $('.heading_one [data-target="#collapseOne"]').removeClass('text-mid-black').addClass('text-black');
        $('.carousel_buttons_2').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_1').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section.svg');
    });

    $('.carousel_buttons_2 .down_arrow').click(function () {
        $('.carousel_actions').find('img').removeClass('size-100');
        $('.heading_three').find('img').addClass('size-100');
        $('.heading_two [data-target="#collapseTwo"]').removeClass('text-black').addClass('text-mid-black');
        $('.heading_three [data-target="#collapseThree"]').removeClass('text-mid-black').addClass('text-black');
        $('.carousel_buttons_2').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_3').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section_3rd_option.svg');
    });

    $('.carousel_buttons_3 .up_arrow').click(function () {
        $('.carousel_actions').find('img').removeClass('size-100');
        $('.heading_two').find('img').addClass('size-100');
        $('.heading_three [data-target="#collapseThree"]').removeClass('text-black').addClass('text-mid-black');
        $('.heading_two [data-target="#collapseTwo"]').removeClass('text-mid-black').addClass('text-black');
        $('.carousel_buttons_3').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_2').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section_2nd_option.svg');
    });

    $('.carousel_buttons_3 .down_arrow').click(function () {
        $('.carousel_actions').find('img').removeClass('size-100');
        $('.heading_four').find('img').addClass('size-100');
        $('.heading_three [data-target="#collapseThree"]').removeClass('text-black').addClass('text-mid-black');
        $('.heading_four [data-target="#collapseFour"]').removeClass('text-mid-black').addClass('text-black');
        $('.carousel_buttons_3').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_4').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section_4th_option.svg');
    });

    $('.carousel_buttons_4 .up_arrow').click(function () {
        $('.carousel_actions').find('img').removeClass('size-100');
        $('.heading_three').find('img').addClass('size-100');
        $('.heading_four [data-target="#collapseFour"]').removeClass('text-black').addClass('text-mid-black');
        $('.heading_three [data-target="#collapseThree"]').removeClass('text-mid-black').addClass('text-black');
        $('.carousel_buttons_4').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_3').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section_3rd_option.svg');
    });

    $('.carousel_buttons_4 .down_arrow').click(function () {
        $('.carousel_actions').find('img').removeClass('size-100');
        $('.heading_one').find('img').addClass('size-100');
        $('.heading_four [data-target="#collapseFour"]').removeClass('text-black').addClass('text-mid-black');
        $('.heading_one [data-target="#collapseOne"]').removeClass('text-mid-black').addClass('text-black');
        $('.carousel_buttons_4').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_1').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section.svg');
    });

    $('#headingOne a').click(function () {
        $('.carousel_buttons').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_1').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section.svg');
        $('.how_works_iphone_bg img').attr('src', 'assets/img/mockup/3rd_section.svg');
    });

    $('#headingTwo a').click(function () {
        $('.carousel_buttons').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_2').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section_2nd_option.svg');
        $('.how_works_iphone_bg img').attr('src', 'assets/img/mockup/3rd_section_2nd_option.svg');
    });

    $('#headingThree a').click(function () {
        $('.carousel_buttons').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_3').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section_3rd_option.svg');
        $('.how_works_iphone_bg img').attr('src', 'assets/img/mockup/3rd_section_3rd_option.svg');
    });

    $('#headingFour a').click(function () {
        $('.carousel_buttons').removeClass('d-flex').addClass('d-none');
        $('.carousel_buttons_4').removeClass('d-none').addClass('d-flex');
        $('.next_mobile_comparison_section .afterImage img').attr('src', 'assets/img/mockup/3rd_section_4th_option.svg');
        $('.how_works_iphone_bg img').attr('src', 'assets/img/mockup/3rd_section_4th_option.svg');
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    // console.log(scroll);
    if (scroll <= 960) {
        $('._1st_how_customer').removeClass('text-white').addClass('text-red');
        $('._2nd_how_customer').removeClass('text-red').addClass('text-white');
        $('._3rd_how_customer').removeClass('text-red').addClass('text-white');
        $('._1st_line_customer').attr('src', 'assets/img/how-it-works-red-line.svg');
        $('._1st_icon_customer').attr('src', 'assets/img/ArrowRed.svg');
        $('._2nd_line_customer').attr('src', 'assets/img/how-it-works-white-line.svg');
        $('._2nd_icon_customer').attr('src', 'assets/img/Scan QR icon_black.svg');
        $('.Desktop_comparison_section .afterImage img').attr('src', 'assets/img/mockup/how_works.svg');
        // console.log('active');
    } else if (scroll > 960 && scroll < 1060) {
        $('._1st_how_customer').removeClass('text-red').addClass('text-white');
        $('._3rd_how_customer').removeClass('text-red').addClass('text-white');
        $('._2nd_how_customer').removeClass('text-white').addClass('text-red');
        $('._1st_line_customer').attr('src', 'assets/img/how-it-works-white-line.svg');
        $('._1st_icon_customer').attr('src', 'assets/img/arrowWhite.svg');
        $('._2nd_line_customer').attr('src', 'assets/img/how-it-works-red-line.svg');
        $('._2nd_icon_customer').attr('src', 'assets/img/bagRed.svg');
        $('._3rd_icon_customer').attr('src', 'assets/img/paper_white.svg');
        $('.Desktop_comparison_section .afterImage img').attr('src', 'assets/img/mockup/how_works_2.svg');
        $('.next_mobile_comparison_section .beforeImage img').attr('src', 'assets/img/mockup/how_works_2.svg');
        // console.log('active');
    } else if (scroll >= 1060) {
        $('._1st_how_customer').removeClass('text-red').addClass('text-white');
        $('._2nd_how_customer').removeClass('text-red').addClass('text-white');
        $('._3rd_how_customer').removeClass('text-white').addClass('text-red');
        $('._2nd_icon_customer').attr('src', 'assets/img/Scan QR icon_black.svg');
        $('._3rd_icon_customer').attr('src', 'assets/img/pageRed.svg');
        $('.next_mobile_comparison_section .beforeImage img').attr('src', 'assets/img/mockup/how_works_3.svg');
        // console.log('active');
    }

    // navbar scroll
    if ($(window).scrollTop() > 15) {
        $('.main_nav_bar').addClass('shadow-lg bg-white transition-okay');
        $('.main_nav_bar .business_logo').attr('src', 'assets/img/logo.svg');
        $('.main_nav_bar .navbar-brand').addClass('size-60px transition-okay');
    } else {
        $('.main_nav_bar').removeClass('shadow-lg bg-white');
        $('.main_nav_bar .business_logo').attr('src', 'assets/img/white_logo.svg');
        $('.main_nav_bar .navbar-brand').removeClass('size-60px');
        if($(window).width()<=768) {
            $('.main_nav_bar .business_logo').attr('src', 'assets/img/logo.svg');
        }
    }
});

$(window).scroll(function () {
    var Bscroll = $(window).scrollTop();
    // console.log(Bscroll);
    if (Bscroll <= 850) {
        $('._1st_how_business').removeClass('text-black').addClass('text-red');
        $('._2nd_how_business').removeClass('text-red').addClass('text-black');
        $('._3rd_how_business').removeClass('text-red').addClass('text-black');
        $('._1st_line_business').attr('src', 'assets/img/how-it-works-red-line.svg');
        $('._1st_icon_business').attr('src', 'assets/img/ArrowRed.svg');
        $('._2nd_line_business').attr('src', 'assets/img/how-it-works-black-line.svg');
        $('._2nd_icon_business').attr('src', 'assets/img/Scan QR icon_black_circle.svg');
        // console.log('active');
    } else if (Bscroll > 850 && Bscroll < 1000) {
        $('._1st_how_business').removeClass('text-red').addClass('text-black');
        $('._3rd_how_business').removeClass('text-red').addClass('text-black');
        $('._2nd_how_business').removeClass('text-black').addClass('text-red');
        $('._1st_line_business').attr('src', 'assets/img/how-it-works-black-line.svg');
        $('._1st_icon_business').attr('src', 'assets/img/arrowBlack.svg');
        $('._2nd_line_business').attr('src', 'assets/img/how-it-works-red-line.svg');
        $('._2nd_icon_business').attr('src', 'assets/img/bagRed.svg');
        $('._3rd_icon_business').attr('src', 'assets/img/paper_black.svg');
        // console.log('active');
    } else if (Bscroll >= 1000) {
        $('._1st_how_business').removeClass('text-red').addClass('text-black');
        $('._2nd_how_business').removeClass('text-red').addClass('text-black');
        $('._3rd_how_business').removeClass('text-black').addClass('text-red');
        $('._2nd_icon_business').attr('src', 'assets/img/Scan QR icon_black_circle.svg');
        $('._3rd_icon_business').attr('src', 'assets/img/pageRed.svg');
        // console.log('active');
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
    // console.log(WorkSection.height())
    // if (TopSection.length) {
    //     var top_section = $(TopSection).position().top;
    //     var works_section = $(WorkSection).innerHeight() - $(TopSection).position().top;
    //     // console.log($(WorkSection).position().top)
    // }
    // $(window).scroll(function () {
    //     var sT = $(window).scrollTop();
    //     // console.log(sT);
    //     // console.log(top_section);
    //     // console.log(works_section);
    //     if (sT > top_section && sT < works_section) {
    //         // $('.hero_Mobile_img').addClass('position-fixed ').removeClass('position-relative');
    //     } else {
    //         // $('.hero_Mobile_img').addClass('position-relative').removeClass('position-fixed ');
    //     }
    //     var first_mobile = $('.iphone-x ._hero_section_img')
    //     var second_mobile = $('.iphone-x ._works_section_img')
    //     var range = 937;
    //     var range2 = 468;
    //     first_mobile.each(function () {
    //         var offset = $(TopSection).offset().top;
    //         var height = $(WorkSection).outerHeight();
    //         // console.log(offset)
    //         // console.log(height)
    //         // console.log(sT)
    //         offset = (offset + height) / 1; 
    //         $(this).css({ 'opacity': 1 - (sT - offset + range) / range });
    //         if(sT>=range2) {
    //             $(first_mobile).addClass('d-none');
    //             $(second_mobile).addClass('fade');
    //         }
    //         else if(sT<range2) {
    //             $(first_mobile).removeClass('d-none');
    //             $(first_mobile).addClass('fade');
    //         }
    //     });
    //     second_mobile.each(function () {
    //         var offset = $(TopSection).offset().top;
    //         var height = $(WorkSection).outerHeight();
    //         // console.log(offset)
    //         // console.log(height)
    //         // console.log(sT)
    //         offset = (offset + height) / 1; 
    //         $(this).css({ 'opacity': 0 + (sT - offset + range2) / range2 });
    //     });
    // });
}, 1000);

$(document).ready(function () {
    $(".carousel_buttons a").click(function () {
        $(".collapse.show").fadeIn(3000); //3000 meant within this ms time it shows
    });

    // main image scroll

    if ($('div').hasClass('check_div')) {
        gsap.utils.toArray(".check_div").forEach(section => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: () => section.offsetHeight,
                    onUpdate: self => {
                        if (self.progress == 1) {
                            $('.test_div').addClass('d-none')
                            $('.test_div').removeClass('d-flex')
                            $('.next_section_mobile').addClass('d-flex')
                            $('.next_section_mobile').removeClass('d-none')
                            // console.log('complete')
                        } else {
                            $('.test_div').removeClass('d-none')
                            $('.test_div').addClass('d-flex')
                            $('.next_section_mobile').removeClass('d-flex')
                            $('.next_section_mobile').addClass('d-none')
                        }
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
        });
    }

    //   image scroll js
    var wv = $(window).width();

    if ($('section').hasClass('Desktop_comparison_section')) {


        var set_main_top = 425

        if (wv < 992) {
            var DesktopsetPosition = "top top";
        }
        if (wv > 992 && wv <= 1024) {
            var DesktopsetPosition = set_main_top - 150 + "px center";
        }
        if (wv > 1024 && wv < 1280) {
            var DesktopsetPosition = set_main_top - 180 + "px center";
        }
        if (wv > 1280 && wv < 1600) {
            var DesktopsetPosition = set_main_top - 155 + "px center";
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

        var set_middle_top = 470

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