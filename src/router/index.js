import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'

import About from 'pages'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }

]

export default new Router({
  routes
})
