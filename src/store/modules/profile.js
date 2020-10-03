import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    patchProfileImage(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://127.0.0.1:3009/profile/profile_image/${payload.id}`,
            payload.image
          )
          .then(response => resolve(response.data))
          .catch(error => reject(error))
      })
    },
    patchProfilePassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://127.0.0.1:3009/password_change/${payload.id}`,
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
            `http://127.0.0.1:3009/profile/personal_name/${payload.id}`,
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
            `http://127.0.0.1:3009/profile/personal_phone/${payload.id}`,
            payload.setData2
          )
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
