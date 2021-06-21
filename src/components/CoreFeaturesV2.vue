<template>
    <div class="w-100 pt-5 bg-light">
    <h1 class="w-100 text-center mt-3 pt-3 heading-md font-bold">Core features</h1>
    <div class="container">
        <div class="row text-center flex-nowrap px-4 px-md-4" style="overflow:auto">
            <div v-for="(item, i) in list" :key="i" class="transition flex-shrink-0 col-lg-3 col-9 position-relative px-0 feature-hover-effect" style="transform: scale(0.99)">
                <div class="position-absolute h-100 d-flex align-items-center">
                    <div class="border-radius-22 py-2 px-4 feature-card transition" style="top: 0px; left: 0px; z-index:1000">
                        <img :src="item.icon" alt="" width="75px" class="my-3 transition">
                        <h5 class="heading-sm font-bold mb-3">{{ item.title }}</h5>
                        <p class="font-regular text-muted mb-5">{{ item.description }}</p>
                    </div>
                </div>
                <img :src="item.mobile" class="w-100 transition feature-mobile" alt="">
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import core1 from '@/assets/core_1.svg'
import core2 from '@/assets/core_2.svg'
import core3 from '@/assets/core_3.svg'
import core4 from '@/assets/core_4.svg'
import diamond from '@/assets/diamond.svg'
import group from '@/assets/group.svg'
import graph from '@/assets/graph.svg'
import package_box from '@/assets/package.svg'

export default {
    data() {
        return {
            core1, core2, core3, core4,
            group, diamond, graph, package_box,

            list: [
                { icon: diamond, mobile: core1, title: "Showcase your value", description: "Show customers the value of your product." },
                { icon: package_box, mobile: core2, title: "Customized Offers", description: "Stand out from the crowd with specialised offers." },
                { icon: graph, mobile: core3, title: "Get key customer insights", description: "Observe market trends and respond quickly." },
                { icon: group, mobile: core4, title: "Add team members", description: "The easy to use platform lets all employees operate it seamlessly." },
            ]
        }
    },
}
</script>

<style scoped>
.feature-hover-effect > .feature-mobile {
    opacity: 0 !important;
    transform: scale(0) !important;
    transition: 0.5s all !important;
}
.feature-hover-effect:hover .feature-mobile {
    opacity: 1 !important;
    transform: scale(0.85)  !important;
}

.feature-hover-effect:hover .feature-card {
    background: white;    
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>