<template>
	<div>
	<h1 class="heading grey--text">Order now</h1>
	<v-container>
	    <v-layout align-center justify-center row>
	    	
		    <transition name="boom" appear>
              <v-flex xs12 sm8 md8>
                <transition name="slide-fade" mode='out-in'>
                  <form @submit.prevent="formSubmited = true" v-if="!formSubmited">
                    <div class="mb-5">
                      <template >
                        <v-progress-linear  v-model="progressWidth" color='indigo' ></v-progress-linear>
                      </template>
                    </div>
                    <div>
                      <app-input v-for="(item, index) in  info"
                             :name="item.name"
                             :value="item.value"
                             :pattern="item.pattern"
                             :key="index"
                             @changeStatus="onChangeData(index, $event)"
                             @updatev='onUpdateValue(index, $event)'
                      >
                              </app-input>
                    </div>
                    <v-btn class='mt-4' type="submit" color="success" 
                    :disabled="done < info.length"
					@click='sentData'
                    >Send Data</v-btn> 
                      
                    
                  </form>
                  
                  <app-table v-else></app-table>
                                    
                </transition>
        </v-flex>
      </transition>
		
		</v-layout>
	</v-container>	
	</div>
</template>

<script>

import AppInput from './Input.vue';
import AppTable from './finalTable.vue'

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default{
	 data(){
      return {
        show:true,       
        controls: [],
        done: 0,
        formSubmited: false
      }
    },
    created(){
    	
    	for(let i = 0; i < this.info.length; i++){
        	this.controls.push(false);
     	}	
    },
    methods: {
    	...mapActions('checkout', {
    		sending: 'sentData'
    	}),
    	sentData(){
    		let userInfo = this.info;
    		let user = {};
    		let cart = {};
    		let data = {
    			"user" : user,
    			"cart" : cart
    		};
    		user["firstName"] = userInfo[0].value;
    		user["lastName"] = userInfo[1].value;
    		user["phone"] = userInfo[2].value;

    		data["cart"] =  this.$store.getters['cart/products'];
    		
    		this.sending(data);
    		
    	},
    	/*
    	...mapGetters('checkout', {
      		infoUser: 'INFO'
      	}), */
    	
      	...mapActions('checkout', {
    		updateVal: 'SET_VALUE'
    	}),
    	onUpdateValue(index, value){
    		this.updateVal({
    			index: index,
    			value: value
    		})
    	},
    	onChangeData(index, status){
	        this.controls[index] = status;

	        let done = 0;

	        for(let i = 0; i < this.controls.length; i++){
	          if(this.controls[i]){
	            done++;
	          }
	        }

	        this.done = done;
	        
	    }
    },
    computed: {  
    	
      progressWidth(){
        return 100 / this.info.length * this.done;   
      },
      info(){
      	
      	return this.$store.getters['checkout/INFO'];
      } 
    },
    components: {
      AppInput,
      AppTable
    }

	/*
	

    created(){
    	console.log(1);
    	console.log(this.info);
      
      
    },
    methods: {
    	
      ,/*
      onUpdateValue(index, value){        
        this.$store.dispatch('SET_VALUE',{
          value: value,
          index: index
        })
      }
    },
    computed: {
    	
      info(){
        return this.$store.getters.INFO
      },
      ,
    
      progressWidth(){
        return 100 / this.info.length * this.done
        
      } 
    },
    components: {
      AppInput,
      AppTable
    }
  }*/
}
</script>

<style scoped>

.justTable{
  border: 1px solid black;
  
}

  .wrapper{
    max-width: 600px;
    margin: 20px auto;
  }

  .btn{
    margin: 10px 0;
  }

  .boom-enter{
    
  }

  .boom-enter-active{
    animation: slideIn 0.5s;
  }

  .boom-enter-to{
    
  }

  .boom-leave{
    
  }

  .boom-leave-active{
    animation: slideOut 0.5s;
  }

  .boom-leave-to{
    
  }

  @keyframes slideIn{
    from{transform: translateX(-2000px);}
    to{transform: translateX(0px);}
  }

  @keyframes slideOut{
    from{transform: translateX(0px);}
    to{transform: translateX(-2000px);}
  }

  /* =================================== */

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

</style>