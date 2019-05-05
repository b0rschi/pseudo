<template>
	<div>
		<h1 class="heading grey--text">Cart</h1>
		<v-container>
		    <v-layout align-center justify-center row>
		    <v-flex xs10 sm8 >		    
				<v-alert v-if='!showCart'
	      			:value="true"
			      color="info"
			      icon="info"
			      outline
			    >
			    Your cart is empty
			    </v-alert>
			    <template v-else>
					<v-data-table dark class='mb-3' 
					   	hide-actions
					    :items="currentProducts"
					    :headers="headers"
				    >
					    <template v-slot:items="props">
					      <td>{{ props.item.title }}</td>
					      <td class="text-xs-right">{{ props.item.price }}</td>
					    </template>
  					</v-data-table>
  					<v-btn @click='onOrder'
  							color='success'>Order now!</v-btn>
			    </template>
		    </v-flex>
			
			</v-layout>
		</v-container>	
	</div>
</template>

<script>

import {mapGetters} from 'vuex';


export default{
	data(){
		return {
			headers: [
				{text: 'Kind of Potato',
				 sortable: false,
				 value: 'name',
				 align: 'left'},

				{text: 'Cost',
				 sortable: false,
				 value: 'value',
				 align: 'right'}
			]
			
		}
	},
	computed: {
		...mapGetters('products', {
			productsAll: 'items'
		}),
		...mapGetters('cart', {
			productsInCart: 'products'
		}),
		currentProducts(){
			return this.productsAll.filter((elem) =>{
				return this.productsInCart.indexOf(elem.id) !== -1;
			})
		},
		showCart(){
			return this.currentProducts.length > 0;
		}
	},
	methods: {
		onOrder(){
			this.$router.push('/checkout')
		}
	}
	
}
</script>