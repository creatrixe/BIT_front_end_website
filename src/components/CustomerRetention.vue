<template>
    <section class="w-100 px-0 mx-0 bg-img" 
        :style="{
            'background-image': `url(${customer_insight_bg})`
        }">
        <div class="px-0 mx-auto container py-5">                
            <div class="row mx-0 align-items-center">
                <div class="col-md-6 px-0">
                    <img :src="customer_insight_laptop" alt="">
                </div>
                <div class="col-md-6 text-center text-md-left">
                    <h1 class="heading-md font-bold ">Crack the code to <span class="text-red">customer retention.</span></h1>
                    <h5 class="font-regular text-dark mb-5">Make better decisions fast, backed by numbers.</h5>

                </div>
            </div>

        </div>
    </section>  
</template>

<script>
import customer_insight_bg from '@/assets/customer_insight_bg.png'
import customer_insight_laptop from '@/assets/customer_insight_laptop.svg'
export default {
    data() {
        return {
            customer_insight_bg, customer_insight_laptop
        }
    }
}
</script>
<style>

</style>