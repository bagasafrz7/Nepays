import axios from 'axios'
// import router from '../router/index'

export default {
  state: {
    page: 1,
    limit: 3,
    search: '',
    totalPage: '',
    totalSearch: '',
    span: 'month',
    recentTransferHome: {},
    historyTransaction: [],
    dataSearch: []
  },
  mutations: {
    setRecentTransferHome(state, payload) {
      state.recentTransferHome = payload
    },
    setHistoryTransaction(state, payload) {
      state.historyTransaction = payload.data
      state.totalPage = payload.pagination.totalData
    },
    sortHistoryTransaction(state, payload) {
      state.span = payload
    },
    searchHistoryTransaction(state, payload) {
      state.historyTransaction = payload.data
      state.totalSearch = payload.pagination.totalData
      // state.dataSearch = payload.data
      // state.search = payload.data
    },
    changePage(state, payload) {
      state.page = payload
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
    },
    dataHistoryTransaction(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}transaction/history/?id=${payload.id}&span=${context.state.span}&page=${context.state.page}`)
          .then(response => {
            resolve(response.data)
            context.commit('setHistoryTransaction', response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    searchingHistoryTransaction(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}transaction/search?id=${payload.id}&keyword=${payload.search.keyword}&page=${context.state.page}`
          )
          .then(response => {
            context.commit('searchHistoryTransaction', response.data)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getRecentTransferHome(state) {
      return state.recentTransferHome
    },
    getHistoryTransaction(state) {
      return state.historyTransaction
    },
    getTotalPage(state) {
      return state.totalPage
    },
    getTotalSearch(state) {
      return state.totalSearch
    },
    getSearchHistoryTransaction(state) {
      return state.historyTransaction
    },
    getLimit(state) {
      return state.limit
    }
  }
}
