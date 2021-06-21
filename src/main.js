import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from "./store/index"

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
	el: "#app",
	render: h => h(App),
	store

})	

