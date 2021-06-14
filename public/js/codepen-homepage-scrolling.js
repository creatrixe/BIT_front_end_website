let intoView = false;

function slideScroll() {
    const slidePage = document.getElementById("slidePage");
    if (slidePage) {
        let isAnimating = false; //variable controls when to execute function on event
        let activeSlide = document.querySelector(".active");
        window.addEventListener("mousewheel", event => {
            scrollOnce(event)            

            // if ((elemBottom <= docViewBottom + 60) && (elemTop + 60 >= docViewTop)) {
            // }

        }); // main eventlistener
        const slides = document.querySelectorAll(".slide");
        const slidesArray = [...slides];
        //if top of slide is at top of window then make that the active slide
        /* slides.forEach(slide => {
        const info = slide.getBoundingClientRect();
        if (info.top <= 100 && info.top >= -100) {
        slide.classList.add("active");
        }
    }); */

        //goes forward in the slides
        function nextSlide(slide) {
        const next = slide.nextElementSibling;

        if (next) {
            //window.scrollTo(0, window.innerHeight * slidesArray.indexOf(next));
            slides.forEach(slide => {
            slide.classList.remove("active");
            slide.classList.remove("prev");
            });
            next.classList.add("active");
            if (!slide.classList.contains("active")) {
            slide.classList.add("prev");
            slide.classList.add("prev");
            }
        }
        navIndicator();
        }
        //goes backwards in the slides
        function prevSlide(slide) {
        const prev = slide.previousElementSibling;
        if (prev) {
            slides.forEach(slide => {
            slide.classList.remove("active");
            slide.classList.remove("prev");
            });
            prev.classList.add("active");
            slide.classList.add("prev");
        }
        navIndicator();
        }

        // blocks the eventlistener funtion from execute more than once 1.5seconds
        function animateTo(fn) {
        fn;
        isAnimating = true;
        setTimeout(() => (isAnimating = false), 1500);
        }
        //actual function that runs on mousewheel
        function scrollOnce(event) {
            let elem = "#slidePage",
                docViewTop = $(window).scrollTop(),
                h = $(window).height(),
                docViewBottom = docViewTop + h,
                elemTop = $(elem).offset().top,
                elemBottom = elemTop + $(elem).height();

            const active = document.querySelector(".active");
            const slide_no = active.getAttribute("id")
            const delta = event.wheelDelta;
            console.log(active.getAttribute("id"), elemBottom + h/1.75, docViewBottom)

            if (!isAnimating) {
                //scroll down go to next slide
                if (delta <= 0 && (elemTop <= docViewTop + h/1.75) && !intoView && slide_no != 'slide-4') {
                    $('body').css("overflow", "hidden")
                    $([document.documentElement, document.body]).animate({ scrollTop: (elemTop) + 'px'}, 99)      
                    $('.nav').removeClass('hidden')
                    intoView = true

                } else if (delta <= 0 && slide_no == 'slide-4' && intoView) {
                    $('body').css("overflow", "auto")
                    $([document.documentElement, document.body]).animate({ scrollTop: (elemTop + h) + 'px'}, 99) 
                    $('.nav').addClass('hidden')
                    intoView = false     

                } else if(delta <=0 && intoView) {
                    animateTo(nextSlide(active));




                } else if (delta > 0 && (elemBottom + h/1.75 >= docViewBottom) && !intoView && slide_no == 'slide-4' ) {
                    $('body').css("overflow", "hidden")
                    $([document.documentElement, document.body]).animate({ scrollTop: (elemTop) + 'px'}, 99)      
                    $('.nav').removeClass('hidden')
                    intoView = true

                } else if (delta > 0 && slide_no =='slide-1' && intoView) {
                    $('body').css("overflow", "auto")
                    $([document.documentElement, document.body]).animate({ scrollTop: (elemTop - h) + 'px'}, 99) 
                    $('.nav').addClass('hidden')
                    intoView = false     

                } else if (delta > 0 && intoView) {
                    animateTo(prevSlide(active));
                }
            }


            //normal scroll is blocked
            event.preventDefault();
        }
        function navIndicator() {
        const links = document.querySelectorAll(".side-page-nav a");
        const indicator = document.querySelector("#active-indicator");

        slides.forEach(slide => {
            if (slide.classList.contains("active")) {
            links.forEach(link => {
                if (link.getAttribute("href") === "#" + slide.id) {
                const linkY = link.getBoundingClientRect().y;
                indicator.style.top = `${linkY - 7}px`;
                console.log(link.getAttribute("href"));
                }
            });
            }
        });
        }
        navIndicator();
        const links = document.querySelectorAll(".side-page-nav a");
        links.forEach(link => {
        link.addEventListener("click", event => skipToSlide(event));
        });
        function skipToSlide(event) {
        event.preventDefault();
        slides.forEach(slide => {
            activeSlide.classList.add("prev");
            slide.classList.remove("active");
            if (event.target.getAttribute("href") === "#" + slide.id) {
            slide.classList.add("active");
            }
        });
        navIndicator();
        }
    }
    }

    window.addEventListener("onload", slideScroll());
    function hoverSwivel() {
    const slidePage = document.getElementById("slidePage");
    if (slidePage) {
        const containers = document.querySelectorAll(".slide");
        const walk = 55;
        const eachContainer = containers.forEach(container => {
        //const swivelWrap = container.querySelector('.overAll')
        const swiveler = container.querySelector(".rotating-number");
        function swivel(event) {
            const width = container.offsetWidth;
            const height = container.offsetHeight;

            let x = event.offsetX;
            let y = event.offsetY;

            if (this !== event.target) {
            x = x + event.target.offsetLeft;
            y = y + event.target.offsetTop;
            }
            const xWalk = Math.round((x / width) * walk - walk / 2);
            const yWalk = Math.round((y / height) * walk - walk / 2);

            swiveler.style.transform = `rotate3d(0,1,0,${xWalk}deg) translate3d(0,${yWalk /
            2}px,0)`;
        }
        container.addEventListener("mousemove", event => swivel(event));
        });
    }
    }
    window.addEventListener("onload", hoverSwivel(event));