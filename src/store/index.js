import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './modules/cart.js'
import menu from './modules/menu.js'
import products from './modules/products.js'

export const store = new Vuex.Store({
	modules:{
		cart,
		menu,
		products
	},
	state:{},
	getters:{},
	mutations:{},
	actions:{}
});