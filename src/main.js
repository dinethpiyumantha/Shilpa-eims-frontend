import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'


import vueResource from 'vue-resource'
Vue.use(vueResource)

//Sweet Alart
import VueSwal from 'vue-swal'
Vue.use(VueSwal)

//Validation
import Vuetify from 'vuetify'
Vue.use(Vuetify)

//Carousal

import 'bootstrap/dist/css/bootstrap.css'

// //
import vueResource from 'vue-resource' //
Vue.use(vueResource)


Vue.use(Vuelidate)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Router from './routes/index.js'

import './styles/custom.css'


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
}
)
