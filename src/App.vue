<template>
<v-app class='light-green lighten-5'>

	<nav>
		<v-toolbar color='rgba(213, 235, 152, 1)'>
		    <v-toolbar-title class='ml-3 lime--text text--darken-3'><i>PseudoPotatoShop</i></v-toolbar-title>
		    <v-spacer></v-spacer>
		    
		    <span class="mr-5"><v-icon class='mx-1'>shopping_cart</v-icon>In Cart: <span class="mx-1">0</span></span>
		    
	    </v-toolbar>
  	</nav>
	<v-container>	
		
		<v-layout align-start row fill-height wrap>
			<v-flex xs12 sm4 md4 lg4 offset-xs2 offset-sm0 offset-md0 offset-lg0>
			  	<ul>
			  		<li>Products</li>
			  		<li>Cart</li>
			  		<li>Checkout</li>
		  		</ul>
			</v-flex>
		  
		  	<v-flex xs12 sm8 md8 lg8>
			  <router-view></router-view>
			</v-flex>	  	  
	  	</v-layout>
		
	</v-container>

</v-app>
</template>

<script>



export default {
  name: 'app',
  components: {
   
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
