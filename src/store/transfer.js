import axios from 'axios'
// import router from '../router/index'

export default {
  state: {
    page: 1,
    limit: 3,
    recentTransferHome: {}
  },
  mutations: {
    setRecentTransferHome(state, payload) {
      state.recentTransferHome = payload
    }
  },
  actions: {
    dataRecentTransferHome(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}transaction/recent/${payload.id}`)
          .then(response => {
            resolve(response.data)
            context.commit('setRecentTransferHome', response.data.data)
          })
          .catch(error => {
            reject(error.response.data)
          })
      })
    }
  },
  getters: {
    getRecentTransferHome(state) {
      return state.recentTransferHome
    }
  }
}
