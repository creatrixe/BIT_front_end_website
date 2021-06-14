<template>
    <div class="container-fluid px-0 position-relative">
        <app-header></app-header>
        <app-hero></app-hero>
        <section-1></section-1>
        <section-2></section-2>
        <section-3></section-3>
        <section-4></section-4>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import Section1 from './components/business/Section1.vue'
import Section2 from './components/business/Section2.vue'
import Section3 from './components/business/Section3.vue'
import Section4 from './components/business/Section4.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHero,
    Section1,
    Section2,
    Section3,
    Section4,
    AppFooter
  }
}
</script>,
    Section3

<style>
</style>
