<template>
    <div class="row mx-0 position-relative ">
        <div class="col-1"></div>
        <div class="col-5 align-self-center pr-5">
            <h1 class="display-4 font-weight-bold archivo-font mb-5">How it works <br> for you</h1>
            <section class=" row mx-0 my-2">
                <div class="col-2  text-center">
                    <img  :src="arrowBlack" width="75">
                    <div class="w-100 text-center mt-3">
                        <div class="d-inline-block" style="border-left:1px solid black; height:50px"></div>
                    </div>
                </div>
                <div class="col-10 px-4">
                    <h4 class="font-weight-bold archivo-font">Download</h4>
                    <p class="font-weight-light text-muted fs-5">Download the app, sign in and add your team members.</p>
                </div>
            </section>
            <section class=" row mx-0 my-2">
                <div class="col-2  text-center">
                    <img  :src="arrowBlack" width="75">
                    <div class="w-100 text-center mt-3">
                        <div class="d-inline-block" style="border-left:1px solid black; height:50px"></div>
                    </div>
                </div>
                <div class="col-10 px-4">
                    <h4 class="font-weight-bold archivo-font">Scan</h4>
                    <p class="font-weight-light text-muted fs-5">Customers who visit your outlet will have a unique QR code, which you or your team members can scan- digitally adding loyalty points or revealing a reward.</p>
                </div>
            </section>
            <section class="row mx-0 my-2">
                <div class="col-2 text-center">
                    <img  :src="arrowBlack" width="75">
                </div>
                <div class="col-10 px-4">
                    <h4 class="font-weight-bold archivo-font">Observe</h4>
                    <p class="font-weight-light text-muted fs-5">The admin portal gives you free key insights into your business, helping you shape your customer strategy, product offering or marketing direction for bigger profits.</p>
                </div>
            </section>                        
        </div>
        <div class="col-6 px-0 align-self-center">
            <div class="row mx-0">
                <div class="col-5 px-0 align-self-center" ref="howWorkContainer">
                    <img @load="calHeight()" :src="howWorks" alt="" class="w-100" style="transform: translateX(25%) translateY(-2.5%) scale(1.25)">
                </div>
                <div class="col-7 px-0 overflow-hidden" 
                    :style="{
                        height
                    }">
                    <div class='particle-network-animation'></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import arrowBlack from '@/assets/arrowBlack.svg'
import howWorks from '@/assets/how-works-mobile-business-removebg-preview.png'
import $ from 'jquery'

export default {
    data() {
        return {
            arrowBlack,
            howWorks,
            height: null,
            howWorkContainer: null,
            extra: 50
        }
    },

    methods: {
        calHeight() {
            this.howWorkContainer = $(this.$refs.howWorkContainer)
            this.height = (this.howWorkContainer.outerHeight() - this.extra) + 'px'
        }
    },

    mounted() {
        $(window).resize(() => {
            this.calHeight()
        });        
    }
}
</script>

<style>

</style>