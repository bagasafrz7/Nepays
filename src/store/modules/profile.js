import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    patchProfileImage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}profile/profile_image/${payload.id}`,
            payload.image
          )
          .then(response => resolve(response.data))
          .catch(error => reject(error.response))
      })
    },
    patchProfilePassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}password_change/${payload.id}`,
            payload.form
          )
          .then(response => resolve(response.data))
          .catch(error => reject(error.response))
      })
    },
    patchPersonalName(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}profile/personal_name/${payload.id}`,
            payload.setData
          )
          .then(response => resolve(response.data))
          .catch(error => reject(error.response))
      })
    },
    patchPersonalPhone(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}profile/personal_phone/${payload.id}`,
            payload.setData2
          )
          .then(response => resolve(response.data))
          .catch(error => reject(error.response))
      })
    },
    postBalance(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}payment/${payload.id}`, payload.data)
          .then(response => resolve(response.data))
          .catch(error => reject(error.response))
      })
    }
  },
  getters: {
    getProfile(state) {
      return state.profile
    }
  }
}
