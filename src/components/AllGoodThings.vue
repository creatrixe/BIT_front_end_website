<template>
    <div class="row mx-0 position-relative py-5 bg-light">
        <div class="col-12">
            <h1 class="d-block d-md-none heading-md font-bold mb-5 text-black text-center">Key Features</h1>

        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5 align-self-center pr-md-5 px-0">
            <h1 class="d-none d-md-block heading-md font-bold mb-5 text-black">All good things in <br> one place</h1>
            <div id="accordion">
                <div v-for="(item, i) in list" :key="i" class="card bg-transparent my-md-5 my-4 border-0">
                    <div class="card-header bg-transparent border-0" :id="`heading${i}`">
                        <h5 class="mb-0">
                            <div class="d-flex" data-toggle="collapse" :data-target="`#collapse${i}`" aria-expanded="true" :aria-controls="`collapse${i}`">
                                <img  :src="item.icon" width="50px" class="align-self-start">
                                <section>
                                    <h4 class="font-weight-bold font-bold ml-4 pb-0 mb-0 cursor-pointer" :class="item.image == image ? 'text-red' : null"  @click="image = item.image">{{ item.title }}</h4>
                                    <div :id="`collapse${i}`" class="collapse" :class="i == 1 ? 'show': ''" :aria-labelledby="`heading${i}`" data-parent="#accordion">
                                        <div class="card-body">
                                            <h5 class="font-regular text-muted">{{ item.body }}</h5>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </h5>
                    </div>
                </div>
            </div>                                
        </div>

        <div class="col-md-6 px-0 position-relative overflow-hidden text-center">
            <particles-network netline_color="rgb(196,52,56)" :particles_color="['rgb(196,52,56)', 'rgba(0,0,0,0.50)']" class="h-100vh w-100 position-absolute" />
            <img :src="image" class="position-relative w-sm-100" style="z-index:10000; transform: scale(0.75)" alt="">
        </div>        
        <!-- <div class="col-md-6 px-0 align-self-center">
            <div class="row mx-0">
                <div class="col-md-5 px-0 align-self-center" ref="howWorkContainer">
                    <img @load="calHeight()" :src="image" alt="" width="100%" style="z-index:10000; transform: translateX(100px) scale(1.25)" class="position-relative">
                </div>
                <particles-network v-if="height > 0" class="col-md-7 px-0 bg-dark-gradient" :style="{ height: `${height}px` }" />
            </div>
        </div> -->
    </div>
</template>

<script>
import heart from '@/assets/heart.png'
import gift from '@/assets/gift.png'
import privacy from '@/assets/privacy.png'
import security from '@/assets/security.png'

import heart_2 from '@/assets/heart_2_2.svg'
import gift_2 from '@/assets/gift_2.svg'
import privacy_2 from '@/assets/privacy_2.svg'
import security_2 from '@/assets/security_2.svg'

import $ from 'jquery'
import ParticlesNetwork from './widgets/ParticlesNetwork.vue'

export default {
    components: {   
        ParticlesNetwork        
    },

    data() {
        return {       
            heart, gift, privacy, security,   
            heart_2, gift_2, privacy_2, security_2,
            height: 0,

            image: gift_2,

            list: [
                { icon: heart, image: heart_2, title: "Your favorite brands, on one app", body: "Open the app to be greeted by all your favourite stores and see what exciting offers they have in store for you." },
                { icon: gift, image: gift_2, title: "Curated flash offers, just for you", body: "Expect surprise discounts, rewards, offers, limited-time deals and more from your favourite stores." },
                { icon: privacy, image: privacy_2, title: "Absolute privacy, guaranteed", body: "We never sell or share your data to third parties. For more details, read our privacy policy." },
                { icon: security, image: security_2, title: "Your info is safe with us", body: "No need to worry about your personal information being compromised. Data security is our highest priority." },
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