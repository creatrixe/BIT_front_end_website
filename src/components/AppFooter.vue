<template>
    <div class="bg-light py-5 mt-5">
        <div class="container">
            <div class="row mx-0">
                <section class="col-1">
                    <img :src="redLogo" :width="width">
                </section>
                <section class="col-11 align-self-center text-end">
                    <a href="#" :class="classes.header">How it works</a>
                    <a href="#" :class="classes.header">Insight Portal</a>
                    <a href="#" :class="classes.header">Features</a>
                    <a href="#" :class="classes.header">Pricing</a>
                    <a href="#" :class="classes.header">Privacy</a>
                    <a href="#" :class="classes.header">Terms & Conditions</a>

                    <div class="switch-button d-inline-block bg-white">
                        <span 
                            :style="{
                                left: this.switch == 'CUSTOMER' ? '0%' : '50%'
                            }"
                            class="active-switch"></span>
                        <button 
                            @click="this.switch = 'CUSTOMER'" 
                            :class="[this.switch == 'CUSTOMER' ? 'active-case text-white' : 'text-red']"
                            class="switch-button-case left active-case">
                            For Customer</button>

                        <button 
                            @click="this.switch = 'BUSINESS'" 
                            :class="[this.switch == 'BUSINESS' ? 'active-case text-white' : 'text-red']"
                            class="switch-button-case right">
                            For Business</button>
                    </div>            
                </section>

                <section class="col-12 text-center mt-4">
                    <p class="small">© 2020 <a href="#" class="text-red text-decoration-none">Best in town</a>. All rights reserved.</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import redLogo from '@/assets/red_logo.svg'
import whiteLogo from '@/assets/white_logo.svg'
export default {

    data() {
        return {
            redLogo, whiteLogo,
            width: 90,
            classes: {
                header: "font-medium text-decoration-none color-light-black font-weight-bold font-18 px-4"
            },
            switch: "CUSTOMER"
        }
    },

    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', './js/js-bundle.js')
        document.head.appendChild(recaptchaScript)     

    }
}
</script>

<style>
</style>