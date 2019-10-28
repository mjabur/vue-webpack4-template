import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import About from 'pages/About'
import Menu from 'pages/Menu'
import Contact from 'pages/Contact'
import Login from 'pages/Login'

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
    path: '/about',
    component: About
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/contact',
    component: Contact
  }
]

export default new Router({
  routes

})
