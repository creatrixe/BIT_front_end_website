 <template>
    <footer class="row mx-0 w-100 py-4 bg-light align-items-center text-center">
        <section class="col-md-2 col-12 text-center order-0">
            <img :src="red_logo" :width="logo_width" alt="">
        </section>
        <section class="col-md-7 col-12 mt-5 mt-md-0 order-md-2 order-1 text-center">
            <div class="d-flex justify-content-center flex-wrap mx-0 align-items-center">
                <a v-for="(nav_link, i) in nav_links" :key="i" 
                    :class="nav_link.type != '*' && nav_link.type != tab ? 'd-none' : null"
                    @click="scrollTo(nav_link.href)" href="javascript:void(0)" 
                    class="btn text-light-black font-regular mx-0">{{ nav_link.name }}</a>
                <a href="javascript:void(0)" class="btn text-light-black font-regular mx-0">Privacy</a>
                <a href="javascript:void(0)" class="btn text-light-black font-regular mx-0">Terms & Conditions</a>
            </div>
        </section>
        <section class="col-md-3 col-12 text-right my-md-0 order-md-1 order-2">
            <switch-button class="flex-shrink-0 mt-4 mt-md-0 border" />          
        </section>
        <div class="col-12 text-center order-3 mt-4">
            <p class="small">© 2020 <span class="text-red">Best in town</span>. All rights reserved.</p>
        </div>
    </footer>
</template> 

<script>
import red_logo from '@/assets/red_logo.svg'
import white_logo from '@/assets/white_logo.svg'
import SwitchButton from './widgets/SwitchButton.vue'
import $ from 'jquery'
import { mapGetters } from 'vuex'
export default {
    components: { SwitchButton },
    
    data() {
        return {
            red_logo,
            white_logo,
            logo_width: 100 + 'px',
            nav_links: [
                { name: "How it Works", href: "#howitworks", type: "*" },
                { name: "Insight Portal", href:"#insightportal", type: "business" },
                { name: "Features", href: "#allgoodthings", type: "*" },
                { name: "Brands", href: "#brands", type: "customer" },
                { name: "Pricing", href:"#pricing", type: "business"},
            ]
        }
    },
    computed: {
        ...mapGetters({
            tab: "getTab"
        })
    },
    methods: {
        scrollTo(hash) {
            $([document.documentElement, document.body]).animate({
                'scrollTop': $(hash).offset().top
            }, 999)                   
        }          
    }
}
</script>

<style>

</style>