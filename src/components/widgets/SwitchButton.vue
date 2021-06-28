<template>
    <div class="switch-button d-inline-block bg-light">
        <span 
            :style="{
                left: tab == 'customer' ? '0%' : '50%'
            }"
            class="active-switch"></span>
        <button 
            @click="setTab('customer'), scrollTo('#howitworks')" 
            :class="[tab == 'customer' ? 'active-case text-white' : 'text-red']"
            class="switch-button-case left active-case">
            For Customer</button>

        <button 
            @click="tab == 'customer' ? setTab('business') : setTab('customer'), scrollTo('#howitworks')" 
            :class="[tab == 'business' ? 'active-case text-white' : 'text-red']"
            class="switch-button-case right">
            For Business</button>
    </div>   
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import $ from 'jquery'
export default {
    data() {
        return {
            active: "BUSINESS",            
        }
    },
  
    computed: {
        ...mapGetters({
            tab: "getTab"
        })
    },    

    methods: {
        ...mapActions({
            setTab: "setTab"
        }),     
        
        scrollTo() {
            $([document.documentElement, document.body]).animate({
                'scrollTop': 0
            }, 999)                   
        }           
    }
}
</script>

<style>

</style>