<template>
    <div class="row mx-0 position-relative transition" >
        <div class="col-md-1"></div>
        <div class="col-md-5 align-self-center px-4 px-md-2">
            <h1 class="heading-lg font-bold ">Shop local, <br> Support <span class="text-red">small</span></h1>            
            <h5 class="font-regular text-muted mb-5">Receive rewards, loyalty points and special offers from your favourite brands.</h5>
            <input-field />
        </div>
        <div class="col-md-6 px-0 position-relative overflow-hidden text-center h-100 px-0">
            <particles-network netline_color="rgb(196,52,56)" :particles_color="['rgb(196,52,56)', 'rgba(0,0,0,0.50)']" class="h-100vh w-100 position-absolute" />
            <img :src="phone" class="position-relative w-sm-100" style="z-index:10000; transform: scale(0.75)" alt="">
        </div>
    </div>
</template>

<script>
// import $ from 'jquery'
import { mapGetters } from 'vuex'

import ParticlesNetwork from '../widgets/ParticlesNetwork.vue'

import phone from '@/assets/hero_phone.png'
import InputField from '../widgets/InputField.vue'

export default {
    components: { ParticlesNetwork, InputField },

    data() {
        return {
            phone,
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