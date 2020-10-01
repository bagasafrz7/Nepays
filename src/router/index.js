import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../views/MainPage.vue'
import History from '../views/History.vue'
import Topup from '../views/topUp.vue'
import Amount from '../views/Amount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/top-up',
    name: 'Topup',
    component: Topup
  },
  {
    path: '/amount',
    name: 'Amount',
    component: Amount
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
