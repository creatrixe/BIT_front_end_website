<template>
    <div class="row mx-0 position-relative h-100">
        <div class="col-1 position-relative">
            <img :src="redRing" style="width:300px; bottom:0px; left:-150px;" alt="" class="position-absolute hover-zoom">
        </div>
        <div class="col-5 align-self-center">
            <h1 class="display-4 font-weight-bold archivo-font">Shop local,</h1>
            <h1 class="display-4 font-weight-bold text-red archivo-font">support small.</h1>
            <p class="font-weight-light text-muted fs-5">Receive rewards, loyalty points and special offers <br> from your favourite brands.</p>
            <div class="input-group align-items-center" style="max-width:520px">
                <input type="text" class="form-control shadow rounded-pill border-0 py-3 px-4" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2">
                <button class="btn bg-red-gradient text-white rounded-pill border-0 px-3 py-2" style="transform: translateX(-50%)">Join waiting list</button>
            </div>            
        </div>
        <div class="col-5 px-0 align-self-center h-100" ref="banner">
            <div class="row mx-0 align-items-center">
                <div class="col-6 px-0 position-absolute">
                    <div class='particle-network-animation' style="background:transparent"></div>
                </div>
                <div class="col-6 px-0 position-relative mx-auto">
                    <img :src="mobile_img" alt="" style="width:100%">
                </div>
            </div>            
        </div>
        <div class="col-1">
        </div>
        <div class="col-12 divider my-5 py-4"></div>
    </div>

</template>

<script>
import mobile_img from '@/assets/slot1.png'
import $ from 'jquery'

export default {

    data() {
        return {
            mobile_img,
            header: null,
            banner: null

        }
    },

    methods: {
        transformY(val) {
            this.banner.css({
                transform: `translateY(${val}px)`,
                transition: '0.1s'
            })
        },
    },

    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', './js/particle-network.animation.js')
        document.head.appendChild(recaptchaScript) 
                
        this.$nextTick(() => {
            this.header = $("#app-header")
            this.banner = $(this.$refs.banner)

            setTimeout(() => {
                this.transformY(this.header.outerHeight())
            }, 199)

        })

      
      
    }
}
</script>

<style scoped>

</style>