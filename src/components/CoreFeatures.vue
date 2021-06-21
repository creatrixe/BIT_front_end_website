<template>
    <body id="slidePage">
        <div class="nav hidden">
          <a href="/" class="back-btn">&lAarr; back</a>
          <span class="side-page-nav">
            <span id="active-indicator"></span>
            <a href="#slide-1">Showcase your value</a>
            <a href="#slide-2">Customised Offers</a>
            <a href="#slide-3">Get key customer insights</a>
            <a href="#slide-4">Add team members</a>
          </span>
        </div>
        <div class="slides">
            <div id="slide-1" class="slide-1 slide active">
                <div class="content-slide d-flex align-items-end">
                    <div>
                        <h2 class="heading">Show customers the value of your product.</h2>
                        <p></p>
                    </div>
                </div>
                <div class="overAll"><div class="rotating-number bg-transparent"><span><img :src="diamond" width="200" alt=""></span></div></div>
                <div class="svg-container" style="transform:scale(0.85)">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="599" height="1201" viewBox="0 0 599 1201">
                        <image :href="core1" />
                    </svg>               
                </div>
            </div>
            <div id="slide-2" class="slide-2 slide">
                <div class="content-slide d-flex align-items-end">
                    <div>
                        <h2 class="heading">Stand out from the crowd with specialised offers.</h2>
                        <p></p>
                    </div>
                </div>
                <div class="overAll"><div class="rotating-number bg-transparent"><span><img :src="package_box" width="200" alt=""></span></div></div>
                <div class="svg-container" style="transform:scale(0.85)">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="599" height="1201" viewBox="0 0 599 1201">
                        <image :href="core2" />
                    </svg>               
                </div>
            </div>
            <div id="slide-3" class="slide-3 slide">
                <div class="content-slide d-flex align-items-end">
                    <div>
                        <h2 class="heading">Observe market trends and respond quickly.</h2>
                        <p></p>
                    </div>
                </div> 
                <div class="overAll"><div class="rotating-number bg-transparent"><span><img :src="graph" width="200" alt=""></span></div></div>
                <div class="svg-container" style="transform:scale(0.85)">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="599" height="1201" viewBox="0 0 599 1201">
                        <image :href="core3" />
                    </svg>               
                </div>
            </div>
            <div id="slide-4" class="slide-4 slide">
                <div class="content-slide d-flex align-items-end flex-wrap">
                    <div>
                        <h2 class="heading">The easy to use platform lets all employees operate it seamlessly.</h2>
                        <p></p>
                    </div>
                </div>
                <div class="overAll"><div class="rotating-number bg-transparent"><span><img :src="group" width="200" alt=""></span></div></div>
                <div class="svg-container" style="transform:scale(0.85)">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="599" height="1201" viewBox="0 0 599 1201">
                        <image :href="core4" />
                    </svg>               
                </div>
            </div>
        </div>    
    </body>
</template>

<script>
import core1 from '@/assets/core_1.svg'
import core2 from '@/assets/core_2.svg'
import core3 from '@/assets/core_3.svg'
import core4 from '@/assets/core_4.svg'
import diamond from '@/assets/diamond.svg'
import group from '@/assets/group.svg'
import graph from '@/assets/graph.svg'
import package_box from '@/assets/package.svg'

import $ from 'jquery'

export default {
    data() {
        return {
            core1, core2, core3, core4,
            group, diamond, graph, package_box,
            intoView: false,
            slides: [],
            isAnimating: false,
            activeSlide: null,

        }
    },

    methods: {
        //goes forward in the slides
        nextSlide(slide) {
            const next = slide.nextElementSibling;

            if (next) {
                //window.scrollTo(0, window.innerHeight * slidesArray.indexOf(next));
                this.slides.forEach(slide => {
                    slide.classList.remove("active");
                    slide.classList.remove("prev");
                });
                next.classList.add("active");
                if (!slide.classList.contains("active")) {
                    slide.classList.add("prev");
                    slide.classList.add("prev");
                }
            }
            this.navIndicator();
        },

        //goes backwards in the slides
        prevSlide(slide) {
            const prev = slide.previousElementSibling;
            if (prev) {
                this.slides.forEach(slide => {
                    slide.classList.remove("active");
                    slide.classList.remove("prev");
                });
                prev.classList.add("active");
                slide.classList.add("prev");
            }
            this.navIndicator();
        },        
                // blocks the eventlistener funtion from execute more than once 1.5seconds
        animateTo(fn) {
            fn;
            this.isAnimating = true;
            setTimeout(() => (this.isAnimating = false), 1500);
        },
        //actual function that runs on mousewheel
        scrollOnce(event) {
            let elem = "#slidePage",
                docViewTop = $(window).scrollTop(),
                h = $(window).height(),
                docViewBottom = docViewTop + h,
                elemTop = $(elem).offset().top,
                elemBottom = elemTop + $(elem).height();

            const active = document.querySelector(".active");
            const slide_no = active.getAttribute("id")
            const delta = event.wheelDelta;

            if (!this.isAnimating) {
                //scroll down go to next slide
                if (delta <= 0 && (elemTop <= docViewTop + h/1.50) && !this.intoView && slide_no != 'slide-4') {
                    $('body').css("overflow-y", "hidden")
                    $([document.documentElement, document.body]).animate({ scrollTop: (elemTop) + 'px'}, 499)      
                    $('.nav').removeClass('hidden')
                    setTimeout(() => this.intoView = true, 1)
                    
                } else if (delta <= 0 && slide_no == 'slide-4' && this.intoView) {
                    $('body').css("overflow-y", "auto")
                    $([document.documentElement, document.body]).animate({ scrollTop: (elemTop + h/2) + 'px'}, 499) 
                    $('.nav').addClass('hidden')
                    this.intoView = false     

                } else if(delta <=0 && this.intoView) {
                    this.animateTo(this.nextSlide(active));

                } else if (delta > 0 && (elemBottom + h/1.50 >= docViewBottom) && !this.intoView && slide_no == 'slide-4' ) {
                    $('body').css("overflow-y", "hidden")
                    $([document.documentElement, document.body]).animate({ scrollTop: (elemTop) + 'px'}, 499)      
                    $('.nav').removeClass('hidden')
                    setTimeout(() => this.intoView = true, 1)

                } else if (delta > 0 && slide_no =='slide-1' && this.intoView) {
                    $('body').css("overflow-y", "auto")
                    $([document.documentElement, document.body]).animate({ scrollTop: (elemTop - h) + 'px'}, 499) 
                    $('.nav').addClass('hidden')
                    this.intoView = false     

                } else if (delta > 0 && this.intoView) {
                    this.animateTo(this.prevSlide(active));
                }
            }

            //normal scroll is blocked
            event.preventDefault();
        },

        navIndicator() {
            const links = document.querySelectorAll(".side-page-nav a");
            const indicator = document.querySelector("#active-indicator");

            this.slides.forEach(slide => {
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
        },
        skipToSlide(event) {
            event.preventDefault();
            this.slides.forEach(slide => {
                this.activeSlide.classList.add("prev");
                slide.classList.remove("active");
                if (event.target.getAttribute("href") === "#" + slide.id) {
                    slide.classList.add("active");
                }
            });
            this.navIndicator();
        },
        slideScroll() {
            const slidePage = document.getElementById("slidePage");
            if (slidePage) {
                this.isAnimating = false; //variable controls when to execute function on event
                this.activeSlide = document.querySelector(".active");
                console.log(this.activeSlide, "active-slide")
                window.addEventListener("mousewheel", event => setTimeout(() => this.scrollOnce(event), 1)) // main eventlistener
                this.slides = document.querySelectorAll(".slide");

                this.navIndicator();
                const links = document.querySelectorAll(".side-page-nav a");
                links.forEach(link => {
                    link.addEventListener("click", event => this.skipToSlide(event));
                });

            }
        },

        hoverSwivel() {
            const slidePage = document.getElementById("slidePage");
            if (slidePage) {
                const containers = document.querySelectorAll(".slide");
                const walk = 55;
                containers.forEach(container => {
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
    },

    mounted() {

        window.addEventListener("onload", this.slideScroll());
        window.addEventListener("onload", this.hoverSwivel(event));
           
    }
}
</script>

<style>

</style>