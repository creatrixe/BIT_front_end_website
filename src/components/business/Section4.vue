<template>
    <div class="row mx-0 position-relative ">
        <div class="col-1"></div>
        <div class="col-5 align-self-center pr-5">
            <h1 class="display-4 font-weight-bold archivo-font">Get out of your store 
                <br> and <span class="text-red">into their phones!</span> </h1>
            <p class="font-weight-light text-muted fs-5 mb-5">Get on the main stage with the other players, and start building up your customer base.</p>
                     
        </div>
        <div class="col-6 align-self-center pr-5">
            <h1 class="font-weight-bold mb-4"><span class="fs-1 archivo-font text-red">$</span><span class="archivo-font">120</span> / year <strong>includes</strong></h1>
            <ul class="list-group">
                <li v-for="(plan, i) in plans" :key="i" class="list-group-item border-0 d-flex align-items-center mb-2"><img :src="checkmark" width="36" alt=""><h6 class="px-3 font-weight-bold">{{ plan.description }}</h6></li>
            </ul>                       
        </div>
    </div>
</template>

<script>
import checkmark from '@/assets/checkmark.svg'

export default {
    data() {
        return {
            checkmark,
            plans: [
                { description: "Unlimited access to admin dashboard, analytics, reporting tools and team management." },
                { description: "Direct exposure to every single customer using the Best in Town application." },
                { description: "Create customizable loyalty programs, flash deals and discount offers on your own." },
                { description: "Integrate with your POS and share access with your team members." },
            ]
        }
    },

    methods: {
    },

    mounted() {     
    }
}
</script>

<style>

</style>