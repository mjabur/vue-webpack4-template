import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import About from 'pages/About'
import Store from 'pages/Store'
import Contact from 'pages/Contact'
import Login from 'pages/Login'
import Logout from 'pages/Logout'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/store',
    component: Store
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/logout',
    component: Logout
  }
]

export default new Router({
  routes

})
