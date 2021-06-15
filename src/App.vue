<template>
    <div class="container-fluid px-0 position-relative h-100">
        <app-header @switch="tab = $event"></app-header>
        <section v-if="tab == 'BUSINESS'">
            <business-hero></business-hero>
            <section-1></section-1>
            <section-2></section-2>
            <section-3></section-3>
            <section-4></section-4>
            <app-footer></app-footer>
        </section>
        <section v-else class="h-100">
            <customer-section-1></customer-section-1>            
        </section>
    </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import BusinessHero from './components/business/Hero.vue'
import Section1 from './components/business/Section1.vue'
import Section2 from './components/business/Section2.vue'
import Section3 from './components/business/Section3.vue'
import Section4 from './components/business/Section4.vue'
import CustomerSection1 from './components/customer/Section1.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        BusinessHero,
        Section1,
        Section2,
        Section3,
        Section4,
        AppFooter,
        CustomerSection1
    },

    data() {
        return {
            tab: "BUSINESS"
        }
    },

    mounted() {

    },

}
</script>

<style>
</style>
