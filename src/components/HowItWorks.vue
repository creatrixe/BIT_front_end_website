<template>
    <div class="row mx-0 position-relative my-5 py-5">
        <div class="col-md-1"></div>
        <div class="col-md-5 align-self-center pr-5">
            <h1 class="heading-md font-bold mb-5 text-black text-center text-md-left">How it works <br> for you</h1>
            <section 
                class="row mx-0 my-2" 
                v-for="(item, i) in list" :key="i"
                @mouseenter="item.icon = item.icon2, item.color = 'text-red', image = item.image"
                @mouseleave="item.icon = item.icon1, item.color = ''">
                <div class="col-md-2 col-3  text-center px-1">
                    <img  :src="item.icon" width="75" class="w-sm-100">
                    <div v-if="i < list.length - 1" class="w-100 text-center mt-3">
                        <div class="d-md-inline-block d-none" style="border-left:1px solid black; height:50px"></div>
                    </div>
                </div>
                <div class="col-md-10 col-9 pl-4 pr-0">
                    <h4 class="font-weight-bold font-bold" :class="item.color">{{ item.title }}</h4>
                    <h5 class="font-regular text-muted mb-5">{{ item.body }}</h5>
                </div>
            </section>                      
        </div>
        <div class="col-md-6 px-0 align-self-center d-none d-md-block">
            <div class="row mx-0">
                <div class="col-md-5 px-0 align-self-center" ref="howWorkContainer">
                    <img @load="calHeight()" :src="image" alt="" style="z-index:10000; transform: translateX(100px) scale(1.25)" class="position-relative w-100 w-sm-100">
                </div>
                <particles-network v-if="height > 0" class="col-md-7 px-0 bg-dark-gradient" :style="{ height: `${height}px` }" />
            </div>
        </div>
    </div>
</template>

<script>
import arrow_black from '@/assets/arrow_black.svg'
import arrow_red from '@/assets/arrow_red.svg'
import bag_black from '@/assets/bag_black.svg'
import bag_red from '@/assets/bag_red.svg'
import paper_black from '@/assets/paper_black.svg'
import paper_red from '@/assets/paper_red.svg'
import scan from '@/assets/scan.png'
import download from '@/assets/download.png'
import observe from '@/assets/observe.png'
import $ from 'jquery'
import ParticlesNetwork from './widgets/ParticlesNetwork.vue'

export default {
    components: {   
        ParticlesNetwork        
    },

    data() {
        return {          
            arrow_black, bag_black, paper_black, scan, download, observe,
            arrow_red, bag_red, paper_red,
            height: 0,

            image: download,

            list: [
                { icon: arrow_black, icon1: arrow_black, icon2: arrow_red, color: "", image: download, title: "Download", body: "Download the app, sign in and add your team members." },
                { icon: bag_black, icon1: bag_black, icon2: bag_red, color: "", image: scan, title: "Scan", body: "Customers who visit your outlet will have a unique QR code, which you or your team members can scan- digitally adding loyalty points or revealing a reward." },
                { icon: paper_black, icon1: paper_black, icon2: paper_red, color: "", image: observe, title: "Observe", body: "The admin portal gives you free key insights into your business, helping you shape your customer strategy, product offering or marketing direction for bigger profits." },
            ]
        }
    },


    methods: {
        calHeight() {
            this.howWorkContainer = $(this.$refs.howWorkContainer)
            this.height = (this.howWorkContainer.outerHeight() - 50)
        }        
    },

    mounted() {
        $(window).resize(() => this.calHeight())            
    }
}
</script>

<style>

</style>