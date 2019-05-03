import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { router } from './routes.js'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
