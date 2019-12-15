import Vue from 'vue'
import router from './router'
import App from './App'

import 'assets/css/app.styl'

import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const axiosConfig = { baseURL: 'https://3000-e803d580-d89d-4ec9-8ab4-bfee0aad972c.ws-eu01.gitpod.io/api' }
Vue.prototype.$axios = axios.create(axiosConfig)

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
