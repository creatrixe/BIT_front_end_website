// store.js

import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tab: "customer",
        navbar_height: 0
    },
  
	getters: {
        getTab(state) {
            return state.tab
        },
        getNavbarHeight(state) {
            return state.navbar_height
        }
    },

	actions: {
        setTab(context, data) {
            context.commit("updateTab", data)
        },
        setNavbarHeight(context, height) {
            context.commit("updateNavbarHeight", height)
        }
    },

	mutations: {
        updateTab(state, data) {
            state.tab = data
        },
        updateNavbarHeight(state, height) {
            state.navbar_height = height
        }
    }
})

export default store;