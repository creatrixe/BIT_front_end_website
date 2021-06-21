<template>
    <div class="row mx-0 position-relative transition" >
        <div class="col-md-6 px-0">
            <div class="row mx-0 position-relative">
                <div class="col-md-6 col-7 px-0 bg-dark-gradient"
                    :style="{
                        transform: `translateY(${-navbarHeight}px)`
                    }">
                    <particles-network class="h-sm-75vh h-100vh" />
                </div>
                <div class="col-12 position-absolute d-block d-md-none" style="bottom:19%;">
                    <img :src="laptop_all_in_one" class="w-100" alt="">
                </div>
                <div class="col-6 px-0 align-self-center position-relative w-100 d-none d-md-block" style="transform: translateY(100px)">
                    <img :src="laptop" width="680px" alt="" class="position-absolute" style="bottom:-250px; left:-350px;">
                    <img :src="screen" width="322px" alt="" class="position-absolute hover-screen-out" style="bottom:103px; left:-301px;">
                </div>
            </div>
        </div>
        <div class="col-md-6 align-self-center px-4 px-md-0">
            <h1 class="heading-lg font-bold ">A Loyalty program <span class="text-red">with a digital twist.</span></h1>            
            <h5 class="font-regular text-muted mb-5">Bring in customers, and keep them coming back for more with <br> the digital punch card.</h5>
            <input-field class="px-2" />
        </div>
    </div>
</template>

<script>
// import $ from 'jquery'
import { mapGetters } from 'vuex'

import ParticlesNetwork from '../widgets/ParticlesNetwork.vue'

import laptop_all_in_one from '@/assets/laptop_all_in_one.png'
import laptop from '@/assets/laptop_circle.png'
import screen from '@/assets/screen.png'
import InputField from '../widgets/InputField.vue'

export default {
    components: { ParticlesNetwork, InputField },

    data() {
        return {
            laptop, screen,
            laptop_all_in_one,
        }
    },

    computed: {
        ...mapGetters({
            navbarHeight: "getNavbarHeight"
        })
    }
}
</script>

<style>

</style>