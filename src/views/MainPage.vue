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
                  <h2>Rp. {{ user.balance }}</h2>
                  <p>{{ user.phone }}</p>
                </b-col>
                <b-col cols="4" class="text-right">
                  <router-link to="/transfer">
                    <b-button size="lg" class="btn-transfer">
                      <b-icon icon="arrow-up" aria-hidden="true"></b-icon>
                      Transer
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
                    <b-col cols="8">
                      <b-icon
                        icon="arrow-down"
                        style="color: #1ec15f; font-size: 28px"
                      ></b-icon>
                      <p style="cursor: pointer" @click="showIncome">Income</p>
                      <h6>Rp {{ this.income }}</h6>
                    </b-col>
                    <b-col cols="4">
                      <b-icon
                        icon="arrow-up"
                        style="color: #ff5b37; font-size: 28px"
                      ></b-icon>
                      <p style="cursor: pointer" @click="showExpense">
                        Expense
                      </p>
                      <h6>Rp {{ this.expense }}</h6>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" class="mt-4">
                      <line-chart
                        v-show="showDailyIncome"
                        :data="this.dataIncome"
                      ></line-chart>
                      <line-chart
                        v-show="showDailyExpense"
                        :data="this.dataExpense"
                      ></line-chart>
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
                    <b-col cols="4">
                      <router-link to="/history">See All</router-link>
                    </b-col>
                  </b-row>
                  <b-row
                    v-for="(item, index) in getRecentTransferHome"
                    :key="index"
                  >
                    <b-col cols="2">
                      <img :src="urlAPI + item.image" alt="" />
                    </b-col>
                    <b-col cols="6">
                      <div class="info-transaction">
                        <h6>{{ item.first_name }} {{ item.last_name }}</h6>
                        <p>Transfer</p>
                      </div>
                    </b-col>
                    <b-col cols="4">
                      <p>+{{ item.amount }}</p>
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
      showDailyExpense: false
    }
  },
  components: {
    Header,
    Aside,
    Footer
  },
  created() {
    this.getDataRecent()
    this.getProfile(this.user.id)
    this.getChart(this.user.id)
    // this.getChart()
  },
  computed: {
    ...mapGetters([
      'getRecentTransferHome',
      'user',
      'income',
      'expense',
      'dailyExpense',
      'dailyIncome',
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
      this.getChart(this.user.id)
    },
    showExpense() {
      this.showDailyIncome = false
      this.showDailyExpense = true
      console.log(this.dataExpense)
      this.getChart(this.user.id)
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
