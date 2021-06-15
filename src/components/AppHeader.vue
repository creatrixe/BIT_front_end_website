<template>
    <header class="position-fixed w-100" style="z-index:10000;">
        <div id="app-header" class="row mx-0 p-4 position-relative transition" :class="header_container">
            <section class="col-3 text-center">
                <img :src="logo" :width="width" class="transition">
            </section>
            <section class="col-9 align-self-center text-end">
                <a href="#" :class="classes.header">How it works</a>
                <a href="#" :class="classes.header">Insight Portal</a>
                <a href="#" :class="classes.header">Features</a>
                <a href="#" :class="classes.header">Pricing</a>

                <div class="switch-button d-inline-block bg-light">
                    <span 
                        :style="{
                            left: this.switch == 'CUSTOMER' ? '0%' : '50%'
                        }"
                        class="active-switch"></span>
                    <button 
                        @click="this.switch = 'CUSTOMER', $emit('switch', 'CUSTOMER')" 
                        :class="[this.switch == 'CUSTOMER' ? 'active-case text-white' : 'text-red']"
                        class="switch-button-case left active-case">
                        For Customer</button>

                    <button 
                        @click="this.switch = 'BUSINESS', $emit('switch', 'BUSINESS')" 
                        :class="[this.switch == 'BUSINESS' ? 'active-case text-white' : 'text-red']"
                        class="switch-button-case right">
                        For Business</button>
                </div>            
            </section>
        </div>        
    </header>
</template>

<script>
import redLogo from '@/assets/red_logo.svg'
import whiteLogo from '@/assets/white_logo.svg'
import $ from 'jquery'
export default {

    data() {
        return {
            redLogo, whiteLogo,
            logo: whiteLogo,
            width: 90,
            classes: {
                header: "font-medium text-decoration-none color-light-black font-weight-bold font-18 px-4",
                header_container: null
            },
            switch: "BUSINESS",
            scrolled: false,
        }
    },

    watch: {
        scrolled(scrolled) {
            if (scrolled) {
                this.width = 60
                this.logo = this.redLogo
                this.header_container = "bg-white shadow-lg"

            } else {
                this.width = 90
                this.logo = this.whiteLogo
                this.header_container = null
            }

        }
    },

    methods: {
        checkScrollTop() {
            let scrollTop = $(window).scrollTop()
            scrollTop > 50 ? this.scrolled = true : this.scrolled = false
            console.log("scrolled")

        }
    },

    mounted() {
        $(window).on("scroll", () => this.checkScrollTop())

        this.$nextTick(() => {
            $("body").on("scroll", () => this.checkScrollTop())
        })
    }
}
</script>

<style>
</style>