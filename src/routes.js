import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductsList from './components/Products.vue';
import Cart from "./components/Cart.vue";
import Error404 from "./components/E404.vue"
import Product from "./components/Product.vue"

const routes = [
	{
		path: '',
		redirect: {name: 'products'}
	},
	{
		name: 'products',
		path: '/products',
		component: ProductsList
	},
	{
		path: '/products/:id',
		component: Product
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart
	},
	{
		path: '*',
		component: Error404
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});