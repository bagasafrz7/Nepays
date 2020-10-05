import axios from 'axios'
import moment from 'moment'
export default {
  state: {
    income: '',
    expense: '',
    dailyExpense: [],
    dailyIncome: [],
    dataExpense: {},
    dataIncome: {}
  },
  mutations: {
    setChart(state, payload) {
      state.income = payload.income
      state.expense = payload.expense
      state.dailyExpense = payload.chartData.dailyExpense
      state.dailyIncome = payload.chartData.dailyIncome
      for (let i = 0; i < state.dailyExpense.length; i++) {
        state.dataExpense[
          moment(state.dailyExpense[i].date).format('MMM Do YY')
        ] = state.dailyExpense[i].total
      }
      for (let i = 0; i < state.dailyIncome.length; i++) {
        state.dataIncome[
          moment(state.dailyIncome[i].date).format('MMM Do YY')
        ] = state.dailyIncome[i].total
      }
    }
  },
  actions: {
    getChart(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}transaction/chart/${payload}`)
          .then(res => {
            // console.log(res.data.data)
            context.commit('setChart', res.data.data)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    }
  },
  getters: {
    income(state) {
      return state.income
    },
    expense(state) {
      return state.expense
    },
    dataExpense(state) {
      return state.dataExpense
    },
    dataIncome(state) {
      return state.dataIncome
    }
  }
}
