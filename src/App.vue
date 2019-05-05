<template>
<v-app class='light-green lighten-5'>

	
	<v-toolbar color='rgba(213, 235, 152, 1)'>
	    <v-toolbar-title class='ml-3 lime--text text--darken-3'><i>PseudoPotatoShop</i></v-toolbar-title>
	    <v-spacer></v-spacer>
	   	<span class="mr-5"><v-icon class='mx-1'>shopping_cart</v-icon>In Cart: <span class="mx-1">{{sizeCart}}</span></span>     
    </v-toolbar>
  	
	<v-container>	
		
		<v-layout align-start row fill-height wrap>
			<v-flex xs12 sm4 md3 offset-xs2 offset-sm0 class='mb-2' >
				<v-navigation-drawer  floating permanent stateless       value="true" class='light-green lighten-5'>
					<v-list dense>
					  <v-list-tile v-for="item in menuList" :key='item.text' router :to="item.url">
						  <v-list-tile-action>
						    <v-icon>{{item.icon}}</v-icon>
						  </v-list-tile-action>
						  <v-list-tile-content>
						    <v-list-tile-title class='body-2'>{{item.text}}</v-list-tile-title>
						  </v-list-tile-content>
					  </v-list-tile>
					</v-list>
				</v-navigation-drawer>	  		
			</v-flex>
		  
		  	<v-flex xs12 sm8 md8 lg8>
		  		<transition name='slide' mode='out-in'>
			  		<router-view></router-view>
				</transition>
			</v-flex>	  	  
	  	</v-layout>
		
	</v-container>

</v-app>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  name: 'app',
  components: {
   
  },
  data(){
  	return {
  		
  	}
  },
  computed: {
  	...mapGetters('menu', {
  		menuList: 'items'
  	}),
  	...mapGetters('cart', {
  		sizeCart: 'cntCart'
  	})
  }
}
</script>

<style>
.slide-enter-active{
	animation: slideIn 0.5s;
}
.slide-enter-to{

}
.slide-leave{

}
.slide-leave-active{
	animation: slideOut 0.5s;
}

@keyframes slideIn{
	from{transform: rotateY(90deg);}
	to{transform: rotateY(0deg);}
}

@keyframes slideOut{
	from{transform: rotateY(0deg);}
	to{transform: rotateY(90deg);}
}
</style>
