import Vue from 'vue';

export default {
	namespaced: true,
	state:{
		items: getProducts()
	},
	getters:{
		items(state){
			return state.items;
		},
		item: (state) => (id) =>{
			for(let i = 0; i<state.items.length; i++){
				if(state.items[i].id == id){
					return state.items[i];
				}
			}
		}
	},
	mutations: {
		addProducts(state, data){
			state.items = data
		}
	},
	actions: {
		addProducts(store){
			Vue.http.get('products').
						then(response => response.json()).
						then(data => {
							store.commit('addProducts', data)
						})
		}
	}
}

function getProducts(){
	return [
		{
			id:1,
			title: 'Potato',
			price: '1$',
			img:"https://www.veggieprezi.com/wp-content/uploads/2017/09/20170731_214129-555x688.jpg"
		},
		{
			id:2,
			title: 'Hero Potato',
			price: '10$',
			img: 'https://senresourcesblog.files.wordpress.com/2018/06/img_6257.jpg'
		},
		{
			id:3,
			title: 'Magic Potato',
			price: '100$',
			img: 'https://pbs.twimg.com/profile_images/982188389658050560/Ce8-y-y3_400x400.jpg'
		}

	]
}