<template>
    <div class="row mx-0 position-relative my-5 py-5" id="pricing">
        <div class="col-1"></div>
        <div class="col-md-5 align-self-center pr-md-5 pr-2 pl-4">
            <h1 class="heading-md font-bold ">Get out of your store <br> and <span class="text-red">into their phones!</span></h1>
            <h5 class="font-regular text-muted mb-5">Get on the main stage with the other players, and start building up your customer base.</h5>
                     
        </div>
        <div class="col-md-6 align-self-center pr-5 pl-4">
            <h1 class="mb-4"><span class="heading-md text-red font-bold">$</span><span class="heading-md font-bold">120</span> / <span class="font-regular">year</span> <span class="font-bold">includes</span></h1>
            <ul class="list-group">
                <li v-for="(plan, i) in plans" :key="i" class="list-group-item border-0 d-flex align-items-center mb-2 px-0"><img :src="checkmark" width="36" alt="">                    
                    <h6 class="mb-0 pb-0 ml-4">{{ plan.description }}</h6>
                </li>
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