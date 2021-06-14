<template>
    <div id="app-header" class="row mx-0 p-4 position-relative" style="z-index:10000">
        <section class="col-3">
            <img :src="whiteLogo" :width="width">
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
}
</script>

<style>
</style>