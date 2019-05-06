export default {
	namespaced: true,
	state:{
		info: [
          {
            name: 'First name',
            value: '',
            pattern: /^[a-zA-Z ]{2,30}$/
          },
          {
            name: 'Last name',
            value: '',
            pattern: /^[a-zA-Z ]{2,30}$/
          },
          {
            name: 'Phone',
            value: '',
            pattern: /^[0-9]{7,14}$/
          }
        ],
        sended: false
	},
	getters:{
		INFO(state){
			
			
			return state.info;
		},
		sended(state){
			return state.sended;
		}
	},
	mutations:{
		SET_VALUE(state, payload){
			
			state.info[payload.index].value = payload.value;
		},
		sent(state){
			state.sended = true;
		}
	},
	actions:{
		SET_VALUE(context, payload){
			context.commit('SET_VALUE', payload)
		},
		sentData(context, payload){
			//console.log(payload);
			setTimeout(()=>{
				
				context.commit('sent');
			}, 2000);
		}
	}
}