<template>
	<div>
		<h3 v-if='sended'>Your order complete</h3>
	  <v-data-table
	   	hide-actions
	    :items="info"
	    :headers="headers"
	  >
	    <template v-slot:items="props">
	      <td>{{ props.item.name }}</td>
	      <td class="text-xs-right">{{ props.item.value }}</td>
	      
	    </template>
	  </v-data-table>
    </div>
</template>
	

<script>

import {mapGetters} from 'vuex';

	export default {
		data(){
			return {
				headers: [
					{text: 'FIELD',
					 sortable: false,
					 value: 'name',
					 align: 'left'},

					{text: 'VALUE',
					 sortable: false,
					 value: 'value',
					 align: 'right'}
				]
			}
		},
		computed:{
			...mapGetters('checkout',{
				info: 'INFO',
				sended: 'sended'
			})
			/*
			info(){
				return this.$store.getters.INFO;
			}*/
		}
	}
</script>