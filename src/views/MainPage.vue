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
                      <p>Income</p>
                      <h6>Rp2.120.000</h6>
                    </b-col>
                    <b-col cols="4">
                      <b-icon
                        icon="arrow-up"
                        style="color: #ff5b37; font-size: 28px"
                      ></b-icon>
                      <p>Expense</p>
                      <h6>Rp1.560.000</h6>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" class="mt-4">
                      <line-chart
                        :data="{
                          '2017-01-01': 9,
                          '2017-01-02': 6,
                          '2017-01-03': 8,
                          '2017-01-03': 13,
                          '2017-01-04': 10,
                          '2017-01-05': 15,
                          '2017-01-06': 1,
                          '2017-01-07': 5,
                          '2017-01-08': 8,
                          '2017-01-09': 13,
                          '2017-01-10': 15
                        }"
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
      urlAPI: process.env.VUE_APP_URL
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
  },
  computed: {
    ...mapGetters(['getRecentTransferHome', 'user'])
  },
  methods: {
    ...mapActions(['dataRecentTransferHome', 'getProfile']),
    getDataRecent() {
      // const setData = {
      //   id: this.user[0].id
      // }
      this.dataRecentTransferHome(this.user)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.data.msg)
        })
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
