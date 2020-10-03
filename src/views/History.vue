<template>
  <div class="history">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
            <div class="main-history">
              <h6 class="mb-4">Transaction History</h6>
              <b-row>
                <b-col cols="10">
                  <b-input-group size="md">
                    <b-input-group-prepend is-text>
                      <b-icon icon="search"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                      type="search"
                      placeholder="Search By Name"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col cols="2">
                  <b-dropdown
                    id="dropdown-right"
                    right
                    text="Sorting"
                    variant="primary"
                  >
                    <b-dropdown-item href="#">This Week</b-dropdown-item>
                    <b-dropdown-item href="#">This Month</b-dropdown-item>
                    <b-dropdown-item href="#">This Years</b-dropdown-item>
                  </b-dropdown>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <div class="search-result">
                    <b-row
                      class="my-4"
                      v-for="(item, index) in getHistoryTransaction"
                      :key="index"
                    >
                      <b-col cols="2">
                        <img :src="urlAPI + item.image" alt="" />
                      </b-col>
                      <b-col cols="8">
                        <h6>{{ item.first_name }} {{ item.first_name }}</h6>
                        <p>Transfer</p>
                      </b-col>
                      <b-col cols="2">
                        <p
                          style="
                            color: #1ec15f;
                            font-size: 18px;
                            font-weight: bold;
                          "
                        >
                          +{{ item.amount }}
                        </p>
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
                      :total-rows="rows"
                      @change="handlePageChange"
                      align="center"
                      style="margin-top: 50px"
                    ></b-pagination>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import Header from '../components/_base/header'
import Aside from '../components/_base/aside'
import Footer from '../components/_base/footer'
export default {
  name: 'History',
  data() {
    return {
      currentPage: 1,
      urlAPI: process.env.VUE_APP_URL
    }
  },
  components: {
    Header,
    Aside,
    Footer
  },
  created() {
    this.getDataHistory()
    this.tes()
  },
  computed: {
    ...mapGetters({
      getHistoryTransaction: 'getHistoryTransaction',
      user: 'user',
      rows: 'getTotalPage'
    })
    // ...mapGetters(['getTotalPage'])
  },
  methods: {
    ...mapActions(['dataHistoryTransaction']),
    ...mapMutations(['changePage']),
    handlePageChange(numberPage) {
      this.$router.push(`?page=${numberPage}`)
      this.changePage(numberPage)
      this.getDataHistory()
    },
    tes() {
      console.log(this.getTotalPage)
      console.log(this.totalData)
    },
    getDataHistory() {
      // const setData = {
      //   id: this.user[0].id
      // }
      this.dataHistoryTransaction(this.user)
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
.main-history {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
}
.main-history .search-result {
  margin: 25px 0;
}
.main-history .search-result img {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}
</style>
