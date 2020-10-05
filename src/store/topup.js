import axios from 'axios'

export default {
  state: {
    page: 1,
    limit: 4,
    totalPage: '',
    historyTopup: []
  },
  mutations: {
    setHistoryTopup(state, payload) {
      state.historyTopup = payload.data
      state.totalPage = payload.pagination.totalData[0].totals
    },
    changePage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    postBalance(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}payment/midtrans/${payload.id}`, payload.data)
          .then(response => resolve(response.data))
          .catch(error => reject(error.response))
      })
    },
    dataHistoryTopup(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}payment/?id_user_login=${payload.id}&page=${context.state.page}`
          )
          .then(response => {
            resolve(response.data)
            context.commit('setHistoryTopup', response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getHistoryTopup(state) {
      return state.historyTopup
    },
    getTotalPageTopup(state) {
      return state.totalPage
    },
    getLimitTopup(state) {
      return state.limit
    }
  }
}
