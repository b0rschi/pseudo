<template>
	<div class="form-group">  
        <v-text-field
            :label="name"
            :append-outer-icon="fieldIcon"
            :value='value'
            @input="onInput"
          ></v-text-field>
    </div>
</template>

<script>
	export default {
		props: ['name', 'value', 'pattern'],
		data(){
			return {
				activated: this.value != ''
			}
		},
		mounted(){
			this.$emit('changeStatus', this.isValid);
		},
		computed: {
			isValid(){
				return this.pattern.test(this.value);
				
			},
			fieldIcon(){
				if(!this.activated) return 'create';
				if(this.isValid){
					return 'done';
				}else return 'report_problem';
			}
		},
		methods: {
			onInput(value){				
				this.activated = true;
				this.$emit('updatev', value);
			}
		},
		watch: {
			isValid(){
				this.$emit('changeStatus', this.isValid);
			}
		}
	}
</script>