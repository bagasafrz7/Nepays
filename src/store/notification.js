// import axios from 'axios'

import axios from 'axios'

export default {
  ststae: {},
  mutations: {},
  actions: {
    patchNotification(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}notification/${payload}`)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            resolve(err.response.data.msg)
          })
      })
    }
  },
  getters: {}
}
