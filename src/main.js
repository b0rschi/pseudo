import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { router } from './routes.js'
import VueResource from 'vue-resource'

Vue.use(Vuetify)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000/'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
