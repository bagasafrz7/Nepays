<template>
  <div class="sukses">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="12" md="3">
            <Aside />
          </b-col>
          <b-col cols="12" md="9">
            <div class="main-topup">
              <b-container>
                <h4 class="mb-4">
                  <strong>Top-up History</strong>
                </h4>
                <b-row>
                  <b-col cols="12">
                    <div class="search-result">
                      <b-row class="mt-4">
                        <b-col cols="6"
                          ><p class="mb-0"><strong>Topup</strong></p></b-col
                        >
                        <b-col cols="6"
                          ><p class="mb-0"><strong>Date</strong></p></b-col
                        >
                      </b-row>
                      <b-row
                        class="my-4"
                        v-for="(item, index) in getHistoryTopup"
                        :key="index"
                      >
                        <b-col cols="6">
                          <p
                            style="
                              color: #1ec15f;
                              font-size: 18px;
                              font-weight: bold;
                            "
                          >
                            +
                            {{
                              item.nominal
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                            }}
                          </p>
                        </b-col>
                        <b-col cols="6">
                          <p>{{ item.date }}</p>
                        </b-col>
                        <b-col cols="12">
                          <hr />
                        </b-col>
                      </b-row>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12">
                    <div class="mt-4">
                      <b-pagination
                        v-model="currentPage"
                        :total-rows="totalPage"
                        :per-page="limit"
                        @change="handlePageChange"
                        align="center"
                        style="margin-top: 50px"
                      ></b-pagination>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import Aside from '../components/_base/aside'
import Footer from '../components/_base/footer'
import Header from '../components/_base/header'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Topup-history',
  components: {
    Aside,
    Header,
    Footer
  },
  data() {
    return {
      total: 50,
      currentPage: 1,
      urlAPI: process.env.VUE_APP_URL
    }
  },
  created() {
    this.getDataHistoryTopup()
  },
  computed: {
    ...mapGetters({
      user: 'user',
      totalPage: 'getTotalPageTopup',
      limit: 'getLimitTopup',
      getHistoryTopup: 'getHistoryTopup'
    })
    // ...mapGetters(['getHistoryTopup'])
  },
  methods: {
    ...mapActions(['dataHistoryTopup']),
    ...mapMutations(['changePage']),
    handlePageChange(numberPage) {
      this.$router.push(`?page=${numberPage}`)
      this.changePage(numberPage)
      this.getDataHistoryTopup()
    },
    getDataHistoryTopup() {
      this.dataHistoryTopup(this.user)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.data)
        })
    }
  }
}
</script>

<style scoped>
main {
  background: #e5e5e5;
}
.main-topup {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
}

@media (max-width: 576px) {
  .main-topup {
    margin: 50px 0;
  }
}
</style>
