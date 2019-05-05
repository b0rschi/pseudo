import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './modules/cart.js'
import menu from './modules/menu.js'
import products from './modules/products.js'
import checkout from './modules/checkout.js'

export const store = new Vuex.Store({
	modules:{
		cart,
		menu,
		products,
		checkout
	},
	state:{},
	getters:{},
	mutations:{},
	actions:{}
});