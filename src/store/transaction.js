import axios from 'axios'
export default {
  state: {
    pages: 1,
    userById: {},
    allUser: [],
    rows: ''
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
    }
  },
  actions: {
    getReceiverById(context, payload) {
      console.log(payload)
      // return new Promise((resolve, reject) => {
      //   axios.get(`${process.env.VUE_APP_URL}`, payload)
      //     .then(res => {
      //       console.log(res)
      //       context.commit()
      //     })
      //     .catch(err => {
      //       reject(err.response.data.msg)
      //     })
      // })
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
    }
  },
  getters: {
    allReceiver(state) {
      return state.allUser
    },
    rows(state) {
      return state.rows
    }
  }
}
