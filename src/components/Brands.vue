<template>
    <div class="w-100 pt-5 px-4">
      <h1 class="w-100 text-center pt-5 heading-md font-bold">Browse your <span class="text-red">Favourite</span> Brands</h1>
      <div class="box w-100 special features">
          <div class="row features-row justify-content-center">
              <div class="section col-lg-2" v-for="(item, i) in list" :key="i"><img :src="item.icon" alt="" height="60px" />
                  <h5 class="mt-4 font-bold">{{ item.title }}</h5>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import automotive from '@/assets/Browse brands-Automotive.png'
import accommodations from '@/assets/Browse brands-Tourism.png'
import apparel from '@/assets/Browse brands-Apparel.png'
import supplies from '@/assets/Browse brands-Business supplies.png'
import computers from '@/assets/Browse brands-Computers & Electronics.png'
import construction from '@/assets/Browse brands-Construction.png'
import education from '@/assets/Browse brands-Education.png'
import finance from '@/assets/Browse brands-Finance & law.png'
import food from '@/assets/Browse brands-Food & Drink.png'
import gifts from '@/assets/Browse brands-Gifts.png'

export default {
    data() {
        return {
            list: [
                { title: "Accommodations, Travel & Tourism", icon: accommodations },
                { title: "Apparel & Accessories", icon: apparel },
                { title: "Automotive & Repair", icon: automotive },
                { title: "Business Supplies", icon: supplies },
                { title: "Computers & Electronics", icon: computers },
                { title: "Construction, Contractors & Industrial", icon: construction },
                { title: "Education & Employment", icon: education },
                { title: "Finance, Law & Professional Services", icon: finance },
                { title: "Food & Drink", icon: food },
                { title: "Gifts, Games, Weddings & Event Planning", icon: gifts },
                // { title: "Online Store", icon: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/511975/firefox.svg" }
            ],
        }
    }
}
</script>

<style scoped>
body .container {
  margin-top: 2rem;
}
body .box {
  background: #fff;
  border-radius: 6px;
  margin: 3rem auto;
  padding: 3em;
}
body .special {
  text-align: center;
}
body .section {
  height: auto;
  padding: 2rem;
  background: #fff;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  will-change: transform;
}
body .section:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transform: translate(0, -15px);
  border-radius: 2px;
  z-index: 1;
}
body .section p {
  margin-top: 2rem;
  text-align: justify;
}
body .section h1 {
  margin-top: 2rem;
}
body .third:hover {
  z-index: 1;
  border-radius: 2px;
}
@media (max-width: 990px) {
  body .features-row .section {
    border: 0;
  }
}
</style>