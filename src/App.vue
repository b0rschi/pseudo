<template>
  <div>
  	<header>
  		<h1>PseudoPotatoShop</h1>
  		<div>
  			In Cart:
  		</div>
  	</header>
  	<section>
  	<ul>
  		<li>Products</li>
  		<li>Cart</li>
  		<li>Checkout</li>
  	</ul>
  	<div>
  		<router-view></router-view>
  	</div>
  	</section>
  </div>
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
