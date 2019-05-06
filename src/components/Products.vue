<template>
	<div>
		<v-flex offset-xs3 offset-sm0>
		  <h1 class="heading grey--text">Products</h1>
		</v-flex>			
				
		<v-container>
		    <v-layout justify-space-around row wrap>
		    	<v-flex  offset-xs2 offset-sm0 
					v-for='(item, index) in products'
					:key='item.title'
					class='mb-3'
		    	>
		    		<v-card width='150'>
		    			<v-img
		    				:src="item.img"
		    				aspect-ratio='1'>
		    			</v-img>

		    			<v-card-title primary-title>
		    				<router-link class="subheading" 
		    							tag='h3' 
		    							:to='"/products/" + item.id'><a class="links">{{item.title}}</a></router-link>
		    			  
		    			  <v-flex xs12 class="mt-1">
		    			  	<div>Price: {{item.price}}</div>
		    			  </v-flex>
		    			</v-card-title>

		    			<v-card-actions>
		    			  <v-btn v-if='inCart.indexOf(item.id) === -1'
								@click="addToCart(item.id)"
								color="success"
		    			  >buy</v-btn>
		    			  <v-btn v-else
		    			   		color="warning"
		    			  		@click="removeFromCart(item.id)"
		    			  		>remove </v-btn>
		    			</v-card-actions>
		    		</v-card>
		    	  
		    	</v-flex>
			
			
			</v-layout>
		</v-container>		
	</div>
</template>

<script>

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default{
	created(){
		/*
		this.$store.dispatch('products/addProducts');
		*/
	},
	computed:{
		...mapGetters('products', {
			products: 'items'
		}),
		...mapGetters('cart', {
			inCart: 'products'
		}),

	},
	methods:{
		...mapActions('cart', {
			addToCart: 'add',
			removeFromCart: 'remove'
		}),
	}
}
</script>


<style scoped>
	.links{
		text-decoration: none;
	}
</style>