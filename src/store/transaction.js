import axios from 'axios'
export default {
  state: {
    pages: 1,
    userById: {},
    allUser: [],
    rows: '',
    transferDetails: {}
  },
  mutations: {
    setPagination(state, payload) {
      state.pages = payload
    },
    setAllReceiver(state, payload) {
      state.rows = payload.pagination.totalData[0].total_user
      state.allUser = payload
    },
    setReceiverById(state, payload) {
      state.userById = payload
    },
    setTransferDetails(state, payload) {
      state.transferDetails = payload
      // console.log(state.transferDetails)
    }
  },
  actions: {
    getReceiverById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}transfer/${payload}`)
          .then(res => {
            context.commit('setReceiverById', res.data.data[0])
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    getAllReceiver(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}transfer/?page=${context.state.pages}&search=${payload.search}&id_user_login=${payload.id_user_login}`
          )
          .then(res => {
            context.commit('setAllReceiver', res.data)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    transfer(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}transaction/transfer`, payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    }
  },
  getters: {
    allReceiver(state) {
      return state.allUser
    },
    rows(state) {
      return state.rows
    },
    getReceiver(state) {
      return state.userById
    },
    transferDetail(state) {
      return state.transferDetails
    }
  }
}
