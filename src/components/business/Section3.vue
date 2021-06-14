<template>
    <body id="slidePage">
        <div class="nav hidden">
          <a href="/" class="back-btn">&lAarr; back</a>
          <span class="side-page-nav">
            <span id="active-indicator"></span>
            <a href="#slide-1">Step 01</a>
            <a href="#slide-2">Step 02</a>
            <a href="#slide-3">Step 03</a>
            <a href="#slide-4">Step 04</a>
          </span>
        </div>
        <div class="slides">
            <div id="slide-1" class="slide-1 slide active">
                <div class="content-slide">
                    <h2 class="heading">Showcase your value</h2>
                    <p>Show customers the value of your product.</p>
                </div>
                <div class="overAll"><div class="rotating-number"><span>01</span></div></div>
                <div class="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="599" height="1201" viewBox="0 0 599 1201">
                        <image :href="core1" />
                    </svg>               
                </div>
            </div>
            <div id="slide-2" class="slide-2 slide">
                <div class="content-slide">
                    <h2 class="heading">Customised Offers</h2>
                    <p>Stand out from the crowd with specialised offers.</p>
                </div>
                <div class="overAll"><div class="rotating-number"><span>02</span></div></div>
                <div class="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="599" height="1201" viewBox="0 0 599 1201">
                        <image :href="core2" />
                    </svg>               
                </div>
            </div>
            <div id="slide-3" class="slide-3 slide">
                <div class="content-slide">
                    <h2 class="heading">Get key customer insights</h2>
                    <p>Observe market trends and respond quickly.</p>
                </div>
                <div class="overAll"><div class="rotating-number"><span>03</span></div></div>
                <div class="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="599" height="1201" viewBox="0 0 599 1201">
                        <image :href="core3" />
                    </svg>               
                </div>
            </div>
            <div id="slide-4" class="slide-4 slide">
                <div class="content-slide">
                    <h2 class="heading">Add team members</h2>
                    <p>The easy to use platform lets all employees operate it seamlessly.</p>
                </div>
                <div class="overAll"><div class="rotating-number"><span>04</span></div></div>
                <div class="svg-container">
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
export default {

    data() {
        return {
            core1, core2, core3, core4,

        }
    },
    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', './js/codepen-homepage-scrolling.js')
        document.head.appendChild(recaptchaScript)     

    }
}
</script>

<style>
.hidden {
    visibility: hidden !important;
}
</style>