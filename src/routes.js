import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductsList from './components/Products.vue';
import Cart from "./components/Cart.vue";

const routes = [
	{
		path: '/products',
		component: ProductsList
	},
	{
		path: '/cart',
		component: Cart
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});