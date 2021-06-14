<template>
    <div class="row mx-0 position-relative">
        <div class="col-6 px-0" ref="banner">
            <div class="row mx-0">
                <div class="col-6 px-0">
                    <div class='particle-network-animation'></div>
                </div>
                <div class="col-6 px-0 bg-success align-self-end">
                    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam possimus at eos. Assumenda neque ad modi error excepturi expedita ipsa ipsam ab quisquam voluptatum non odio, similique iure explicabo.</p> -->
                </div>
            </div>
        </div>
        <div class="col-5 align-self-center">
            <h1 class="display-4 font-weight-bold archivo-font">A Loyalty program</h1>
            <h1 class="display-4 font-weight-bold text-red archivo-font">with a digital twist.</h1>
            <p class="font-weight-light text-muted fs-5">Bring in customers, and keep them coming back for more with <br> the digital punch card.</p>
            <div class="input-group align-items-center" style="max-width:520px">
                <input type="text" class="form-control shadow rounded-pill border-0 py-3 px-4" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2">
                <button class="btn bg-red-gradient text-white rounded-pill border-0 px-3 py-2" style="transform: translateX(-50%)">Join waiting list</button>
            </div>            
        </div>
        <div class="col-1"></div>
    </div>
</template>

<script>
import laptop from '@/assets/Red-logo.png'
import screen from '@/assets/Clear-logo.png'
import $ from 'jquery'

export default {

    data() {
        return {
            laptop, screen,
            header: null,
            banner: null

        }
    },

    methods: {
        transformY(val) {
            this.banner.css({
                transform: `translateY(${val}px)`, // abcd
                transition: '0.1s'
            })
        }
    },

    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', './js/particle-network.animation.js')
        document.head.appendChild(recaptchaScript) 
        
        this.$nextTick(() => {
            this.header = $("#app-header")
            this.banner = $(this.$refs.banner)

            setTimeout(() => {
                this.transformY(-this.header.outerHeight())
            }, 199)

            console.log(this.header.outerHeight(), "header")
        })

      
      
    }
}
</script>

<style scoped>

</style>