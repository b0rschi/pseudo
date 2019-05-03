export default {
	namespaced: true,
	state: {
		items: [
			{
				url:'/products',
				text: 'Products List',
				icon: 'description'
			},
			{
				url: '/cart',
				text: 'Your Cart',
				icon: 'shopping_cart'
			},
			{
				url: '/checkout',
				text: 'Order Now',
				icon: 'card_membership'
			}
		]
	},
	getters:{
		items(state){
			return state.items;
		}
	}
}