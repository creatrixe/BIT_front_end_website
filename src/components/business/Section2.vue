<template>
    <section class="w-100 px-0 mx-0 bg-img" 
        :style="{
            'background-image': `url(${customerInsightBg})`
        }">
        <div class="px-0 mx-auto container py-5 my-5">                
            <div class="row mx-0 align-items-center">
                <div class="col-6">
                    <img :src="customerInsightLaptop" alt="">
                </div>
                <div class="col-6">
                    <h1 class="display-4 font-weight-bold archivo-font">Crack the code to</h1>
                    <h1 class="display-4 font-weight-bold text-red archivo-font">customer retention</h1>
                    <p class="font-weight-light text-black fs-5">Make better decisions fast, backed by numbers.</p>
                </div>
            </div>

        </div>
    </section>     
</template>

<script>
import customerInsightBg from '@/assets/customer-insight-bg.png'
import customerInsightLaptop from '@/assets/Customer insights-laptop.svg'
export default {
    data() {
        return {
            customerInsightBg, customerInsightLaptop
        }
    }
}
</script>

<style>

</style>