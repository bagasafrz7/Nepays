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
import changePin from '../views/changePin.vue'

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
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: { requiresAuth: true }
  },
  {
    path: '/top-up',
    name: 'Topup',
    component: Topup,
    meta: { requiresAuth: true }
  },
  {
    path: '/amount',
    name: 'Amount',
    component: Amount,
    meta: { requiresAuth: true }
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation,
    meta: { requiresAuth: true }
  },
  {
    path: '/sukses',
    name: 'Sukses',
    component: Sukses,
    meta: { requiresAuth: true }
  },
  {
    path: '/failed',
    name: 'Failed',
    component: Failed,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/change-pin',
    name: 'changePin',
    component: changePin,
    meta: { requiresAuth: true }
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
