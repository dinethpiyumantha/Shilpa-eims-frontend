import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import vueResource from 'vue-resource'
Vue.use(vueResource)

import swal from 'sweetalert';

import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Router from './routes/index.js'

import './styles/custom.css';

library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
