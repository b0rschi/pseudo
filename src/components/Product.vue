<template>
	<div>
		<v-layout align-start justify-space-between row fill-height>
			<h1 class="heading grey--text">{{product.title}}</h1>
			<v-btn @click='toProducts'
			color='info'>Back to products</v-btn>
		</v-layout>

		<v-container>
		    <v-layout align-center justify-center row>
				<v-img :src='product.img'></v-img>
			
			</v-layout>
		</v-container>	
	</div>
</template>

<script>

import {mapGetters} from 'vuex';

export default{
	computed: {
		...mapGetters('products', {
			products: 'items'
		}),
		id(){
			return this.$route.params.id;
		},
		product(){
			return this.$store.getters['products/item'](this.id);
			
		}
	},
	methods: {
		toProducts(){
			this.$router.push('/products');
		}
	}
}
</script>