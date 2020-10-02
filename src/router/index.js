import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Reset from '../views/auth/Reset.vue'
import ResetPass from '../views/auth/ResetPassword.vue'
import Pin from '../views/auth/Pin.vue'
import Transfer from '../views/Transfer.vue'
import store from '../store/index'
import Home from '../views/MainPage.vue'
import History from '../views/History.vue'
import Topup from '../views/topUp.vue'
import Amount from '../views/Amount.vue'
import Confirmation from '../views/Confirmation.vue'
import Sukses from '../views/Sukses.vue'
import Failed from '../views/Failed.vue'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset,
    meta: { requiresVisitor: true }
  },
  {
    path: '/reset-password',
    name: 'Reset-password',
    component: ResetPass,
    meta: { requiresVisitor: true }
  },
  {
    path: '/pin',
    name: 'Pin',
    component: Pin,
    meta: { requiresAuth: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation
  },
  {
    path: '/sukses',
    name: 'Sukses',
    component: Sukses
  },
  {
    path: '/failed',
    name: 'Failed',
    component: Failed
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
