import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './auth'
import Transfer from './transfer'
import Profile from './modules/profile'
import createPersistedState from 'vuex-persistedstate'
import Transaction from './transaction'
import Chart from './chart'
import Topup from './topup'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Transfer,
    Profile,
    Transaction,
    Chart,
    Topup
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.userLogin'],
      storage: window.sessionStorage
    })
  ]
})
