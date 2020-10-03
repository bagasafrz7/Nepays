import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './auth'
import Transfer from './transfer'
import createPersistedState from 'vuex-persistedstate'
import Transaction from './transaction'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Transfer,
    Transaction
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.userLogin'],
      storage: window.sessionStorage
    })
  ]
})
