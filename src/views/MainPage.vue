<template>
  <div class="home">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9" class="main-home">
            <div class="balance">
              <b-row>
                <b-col cols="8">
                  <p>Balance</p>
                  <h2>
                    Rp.
                    {{
                      user.balance
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                    }}
                  </h2>
                  <p>{{ user.phone }}</p>
                </b-col>
                <b-col cols="4" class="text-right">
                  <router-link to="/transfer">
                    <b-button size="lg" class="btn-transfer">
                      <b-icon icon="arrow-up" aria-hidden="true"></b-icon>
                      Transfer
                    </b-button>
                  </router-link>
                  <router-link to="/top-up">
                    <b-button size="lg" class="btn-transfer">
                      <b-icon icon="plus" aria-hidden="true"></b-icon>
                      Top Up
                    </b-button>
                  </router-link>
                </b-col>
              </b-row>
            </div>
            <b-row>
              <b-col cols="7">
                <div class="income">
                  <b-row>
                    <b-col cols="4" style="text-align: center">
                      <b-icon
                        icon="arrow-down"
                        style="color: #1ec15f; font-size: 28px"
                      ></b-icon>
                      <p style="cursor: pointer" @click="showIncome">Income</p>
                      <h6>
                        Rp
                        {{
                          this.income
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                        }}
                      </h6>
                    </b-col>
                    <b-col cols="4" class="mt-5">
                      <h6 style="text-align: center" v-show="showIncomeText">
                        INCOME
                      </h6>
                      <h6 style="text-align: center" v-show="showExpenseText">
                        EXPENSE
                      </h6>
                    </b-col>
                    <b-col cols="4" style="text-align: center">
                      <b-icon
                        icon="arrow-up"
                        style="color: #ff5b37; font-size: 28px"
                      ></b-icon>
                      <p style="cursor: pointer" @click="showExpense">
                        Expense
                      </p>
                      <h6>
                        Rp
                        {{
                          this.expense
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                        }}
                      </h6>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" class="mt-4">
                      <column-chart
                        v-show="showDailyIncome"
                        v-if="dataIncome"
                        :data="this.dataIncome"
                      ></column-chart>
                      <column-chart
                        v-show="showDailyExpense"
                        v-if="dataExpense"
                        :data="this.dataExpense"
                      ></column-chart>
                    </b-col>
                  </b-row>
                  <!-- <h3>Data Income</h3> -->
                </div>
              </b-col>
              <b-col cols="5">
                <div class="transaction-history">
                  <b-row class="mb-4">
                    <b-col cols="8">
                      <h5>Transaction History</h5>
                    </b-col>
                    <b-col cols="4" class="text-right">
                      <router-link to="/history">See All</router-link>
                    </b-col>
                  </b-row>
                  <b-row
                    v-for="(item, index) in getRecentTransferHome"
                    :key="index"
                    class="my-2"
                  >
                    <b-col cols="2" style="margin-top: 13px">
                      <img :src="urlAPI + item.image" alt="" />
                    </b-col>
                    <b-col cols="6">
                      <div class="info-transaction">
                        <h6 style="margin-top: 12px; font-size: 13px">
                          {{ item.first_name }} {{ item.last_name }}
                        </h6>
                        <p style="font-size: 15px" v-if="item.category === 1">
                          Transfer
                        </p>
                        <p style="font-size: 15px" v-if="item.category === 2">
                          Receive
                        </p>
                      </div>
                    </b-col>
                    <b-col cols="4" class="text-right" style="margin-top: 30px">
                      <p
                        v-if="item.category === 2"
                        style="
                          color: #1ec15f;
                          font-size: 12px;
                          font-weight: bold;
                        "
                      >
                        +
                        {{
                          item.amount
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                        }}
                      </p>
                      <p
                        v-if="item.category === 1"
                        style="color: red; font-size: 12px; font-weight: bold"
                      >
                        -
                        {{
                          item.amount
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                        }}
                      </p>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <!-- COMPONENT FOOTER -->
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '../components/_base/header'
import Aside from '../components/_base/aside'
import Footer from '../components/_base/footer'
export default {
  name: 'MainPage',
  data() {
    return {
      urlAPI: process.env.VUE_APP_URL,
      showDailyIncome: true,
      showDailyExpense: false,
      showIncomeText: true,
      showExpenseText: false
    }
  },
  components: {
    Header,
    Aside,
    Footer
  },
  created() {
    this.getDataRecent()
    this.getChart(this.user.id)
    this.getProfile(this.user.id)
  },
  computed: {
    ...mapGetters([
      'getRecentTransferHome',
      'user',
      'income',
      'expense',
      'dataExpense',
      'dataIncome'
    ])
  },
  methods: {
    ...mapActions(['dataRecentTransferHome', 'getProfile', 'getChart']),
    getDataRecent() {
      this.dataRecentTransferHome(this.user)
    },
    showIncome() {
      this.showDailyIncome = true
      this.showDailyExpense = false
      this.showExpenseText = false
      this.showIncomeText = true
    },
    showExpense() {
      this.showDailyIncome = false
      this.showDailyExpense = true
      this.showExpenseText = true
      this.showIncomeText = false
    }
  }
}
</script>

<style scoped>
main {
  background: #e5e5e5;
}
.home .main-home .balance {
  background: #6379f4;
  border-radius: 20px;
  margin: 50px 0 25px 0;
  padding: 30px;
  color: #fff;
}
.home .main-home .balance .btn-transfer {
  border: none;
  background: #9da9f3;
  border: 1px solid #fff;
  margin: 5px 0;
  width: 180px;
}
.home .main-home .income {
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  height: 450px;
  margin-bottom: 50px;
}
.home .main-home .transaction-history {
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  height: 450px;
}
.home .main-home .transaction-history h5 {
  font-size: 18px;
}
.home .main-home .transaction-history h6 {
  font-size: 16px;
}
.home .main-home .transaction-history .info-transaction {
  margin-left: 10px;
}
.home .main-home .transaction-history img {
  width: 46px;
  height: 46px;
  border-radius: 10px;
}
</style>
