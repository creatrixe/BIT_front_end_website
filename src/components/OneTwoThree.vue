<template>
    <div class="row mx-0 position-relative py-5 bg-dark-gradient">
        <div class="col-md-1"></div>
        <div class="col-md-5 align-self-center pr-md-5">
            <h1 class="heading-md font-bold mb-5 text-white px-4 px-md-2 d-none d-md-block">As easy as one, <br> two and three!</h1>
            <h1 class="heading-md font-bold mb-5 text-white px-4 px-md-2 d-block d-md-none">Here's how the app works!</h1>
            <section 
                class="mx-0 my-2 row"
                v-for="(item, i) in list" :key="i"
                @mouseenter="item.icon = item.icon2, item.color = 'text-red', image = item.image"
                @mouseleave="item.icon = item.icon1, item.color = 'text-white'">
                <div class="col-2 text-center px-0">
                    <img  :src="item.icon" width="50">
                    <div v-if="i < list.length - 1" class="w-100 text-center mt-3 d-none d-md-block">
                        <div class="d-inline-block" style="border-left:1px solid black; height:50px"></div>
                    </div>
                </div>
                <div class="col-10 px-md-4 pl-3 pl-md-4">
                    <h4 class="font-weight-bold font-bold" :class="item.color">{{ item.title }}</h4>
                    <h5 class="font-regular text-light mb-md-5">{{ item.body }}</h5>
                </div>
                <div class="col-12 d-block d-md-none mt-4 mb-5 pb-4">
                    <img :src="item.image" class="w-100" alt="">                    
                </div>
            </section>                      
        </div>

        <div class="col-md-6 px-0 position-relative overflow-hidden text-center d-none d-md-block">
            <particles-network class="h-100vh w-100 position-absolute" />
            <img :src="image" class="position-relative w-sm-100" style="z-index:10000; transform: scale(0.75)" alt="">
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
import scan from '@/assets/scan_2.png'
import download from '@/assets/download_2.png'
import observe from '@/assets/observe_2.png'
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
                { icon: arrow_black, icon1: arrow_black, icon2: arrow_red, color: "text-white", image: download, title: "Download the app and sign up", body: "and receive your very own, unique QR code." },
                { icon: bag_black, icon1: bag_black, icon2: bag_red, color: "text-white", image: scan, title: "Visit the store of your choice and scan your QR code", body: "when you make a purchase." },
                { icon: paper_black, icon1: paper_black, icon2: paper_red, color: "text-white", image: observe, title: "Track your loyalty points", body: "once you have racked up the required number: claim your reward!" },
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