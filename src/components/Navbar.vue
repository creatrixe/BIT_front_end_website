<template>
    <div>
        <header id="v-header" class="row mx-0 position-fixed w-100 px-1 transition" ref="navbar" :class="header_container" style="z-index:500000;">
            <section class="col-md-3 col-6 text-left text-md-center align-self-center">
                <a href="/">
                    <img :src="logo" :width="logo_width" alt="" class="transition">
                </a>
            </section>
            <section class="d-none d-md-block col-lg-9 col-md-9 p-4 text-right">
                <div class="d-flex justify-content-end mx-0 align-items-center">
                    <a v-for="(nav_link, i) in nav_links" :key="i" 
                        :class="nav_link.type != '*' && nav_link.type != tab ? 'd-none' : null"
                        @click="scrollTo(nav_link.href)" href="javascript:void(0)" 
                        class="btn text-light-black font-regular mx-2">{{ nav_link.name }}</a>
                    <switch-button class="flex-shrink-0" />          
                </div>
            </section>
            <section class="col-6 p-4 text-right d-block d-md-none">
                <button @click="sidenav_width = 275" class="mdi mdi-menu btn bg-transparent shadow mdi-24px"></button>
                <nav :style="{width: sidenav_width + 'px'}" style="right:0px; top:0px;" class="position-fixed h-100vh bg-dark-gradient transition">
                    <div class="px-3">
                        <a href="javascript:void(0)" @click="sidenav_width = 0" class="btn btn-block text-left mdi mdi-close text-white p-3"></a>
                        <a v-for="(nav_link, i) in nav_links" :key="i"                         
                        :class="nav_link.type != '*' && nav_link.type != tab ? 'd-none' : null"
                        @click="scrollTo(nav_link.href), sidenav_width = 0" href="javascript:void(0)" 
                        class="btn btn-block text-light px-0 text-left text-light-black font-regular mx-3">{{ nav_link.name }}</a>
                        <div class="w-100 divider border-top-light my-3"></div>
                        <a href="javascript:void(0)" @click="setTab('customer'), sidenav_width = 0, scrollTo('#howitworks')" :class="tab == 'customer' ? 'text-red' : 'text-light'" class="btn btn-block px-0 text-left text-light-black font-regular mx-3">Customer</a>
                        <a href="javascript:void(0)" @click="setTab('business'), sidenav_width = 0, scrollTo('#howitworks')" :class="tab == 'business' ? 'text-red' : 'text-light'" class="btn btn-block px-0 text-left text-light-black font-regular mx-3">Business</a>
                    </div>

                </nav>
            </section>                        
        </header>
    </div>
</template>

<script>
import $ from 'jquery'
import { mapActions, mapGetters } from 'vuex'

import red_logo from '@/assets/red_logo.svg'
import white_logo from '@/assets/white_logo.svg'
import SwitchButton from './widgets/SwitchButton.vue'

export default {
    
    components: {
        SwitchButton
    },
    
    data() {
        return {
            red_logo,
            white_logo,
            logo: null,
            logo_width: 100,
            header_container: "py-4",
            nav_links: [
                { name: "How it Works", href: "#howitworks", type: "*" },
                { name: "Insight Portal", href:"#insightportal", type: "business" },
                { name: "Features", href: "#allgoodthings", type: "*" },
                { name: "Brands", href: "#brands", type: "customer" },
                { name: "Pricing", href:"#pricing", type: "business"},
            ],
            scrolled: false,
            navbar: null,
            sidenav_width: 0
        }
    },
    watch: {
        scrolled(scrolled) {
            if (scrolled) {
                this.logo_width = 60
                this.logo = this.red_logo
                this.header_container = "bg-white shadow-lg py-1"

            } else {
                this.logo_width = 90
                this.logo = this.tab == 'customer' ? this.red_logo : this.white_logo
                this.header_container = "py-4"
            }
        },
        tab(val) {
            val == 'customer' ? this.logo = this.red_logo : this.logo = this.white_logo
        },
    },    
    computed: {
        ...mapGetters({
            tab: "getTab"
        })
    },
    methods: {
        ...mapActions({
            setNavbarHeight: "setNavbarHeight",
            setTab: "setTab"
        }),
        scrollTo(hash) {
            $([document.documentElement, document.body]).animate({
                'scrollTop': $(hash).offset().top - this.navbar.outerHeight()/2
            }, 999)                   
        }        
    },
    mounted() {

        // The $nextTick functions triggers when the component template is fully loaded.        
        this.$nextTick(() => {
            this.navbar = $(this.$refs.navbar) // get the reference of the navbar
            setTimeout(() => this.setNavbarHeight(this.navbar.outerHeight()), 199) // set the navbar height value in the vuex store after 0.2 sec 
            $(window).on("scroll", () => $(window).scrollTop() > 50 ? this.scrolled = true : this.scrolled = false) // if the window is scrolled a little bit, the style of top navbar will be auto changed. 

            this.logo = this.tab == 'customer' ? this.red_logo : this.white_logo

        })
    }
}
</script>

<style>

</style>