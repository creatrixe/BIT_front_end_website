<template>
    <div id="app" class="container-fluid px-0 h-100">
        <navbar />
        <div class="w-100" :style="{ height: height + 'px' }"></div>
        
        <section v-if="tab == 'business'">
            <business-banner />
            <how-it-works />
            <customer-retention />
            <core-features-v2 />
            <pricing-tag />
        </section>
        <section v-else>
            <customer-banner />
            <one-two-three />
            <all-good-things />
            <brands />
        </section>

        <app-footer />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AllGoodThings from './components/AllGoodThings.vue'
import BusinessBanner from './components/banners/BusinessBanner.vue'
import CustomerBanner from './components/banners/CustomerBanner.vue'
import Brands from './components/Brands.vue'
import CoreFeaturesV2 from './components/CoreFeaturesV2.vue'
import CustomerRetention from './components/CustomerRetention.vue'
import AppFooter from './components/Footer.vue'
import HowItWorks from './components/HowItWorks.vue'
import Navbar from './components/Navbar.vue'
import OneTwoThree from './components/OneTwoThree.vue'
import PricingTag from './components/PricingTag.vue'

export default {
    name: 'App',
    components: {
        Navbar,
        BusinessBanner,
        HowItWorks,
        CustomerRetention,
        CoreFeaturesV2,
        PricingTag,
        AppFooter,
        CustomerBanner,
        OneTwoThree,
        AllGoodThings,
        Brands,
    },
    data() {
        return {
            height: 0        
        }
    },

    computed: {
        ...mapGetters ({
            navbarHeight: "getNavbarHeight",
            tab: "getTab"
        })
    },
    
    watch: {
        navbarHeight(height) {
            this.height = height
        }
    },    

}
</script>

<style>
</style>
