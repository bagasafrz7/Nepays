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
                      v-model="form.keyword"
                      v-on:keyup.enter="searching(form.keyword)"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col cols="2">
                  <b-dropdown
                    id="dropdown-right"
                    right
                    :text="sortText"
                    variant="primary"
                  >
                    <b-dropdown-item href="#" @click="sorting('week')"
                      >This Week</b-dropdown-item
                    >
                    <b-dropdown-item href="#" @click="sorting('month')"
                      >This Month</b-dropdown-item
                    >
                    <b-dropdown-item href="#" @click="sorting('year')"
                      >This Years</b-dropdown-item
                    >
                  </b-dropdown>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <div class="search-result" v-if="search === false">
                    <b-row
                      class="my-4"
                      v-for="(item, index) in getHistoryTransaction"
                      :key="index"
                    >
                      <b-col cols="2">
                        <img :src="urlAPI + item.image" alt="" />
                      </b-col>
                      <b-col cols="8">
                        <h6>{{ item.first_name }} {{ item.last_name }}</h6>
                        <p v-if="item.category === 1">Transfer</p>
                        <p v-if="item.category === 2">Receive</p>
                      </b-col>
                      <b-col cols="2">
                        <p
                          v-if="item.category === 2"
                          style="
                            color: #1ec15f;
                            font-size: 18px;
                            font-weight: bold;
                          "
                        >
                          + {{ item.amount }}
                        </p>
                        <p
                          v-if="item.category === 1"
                          style="color: red; font-size: 18px; font-weight: bold"
                        >
                          - {{ item.amount }}
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                  <div class="search-result" v-if="search === true">
                    <b-row
                      class="my-4"
                      v-for="(item, index) in getSearchHistoryTransaction"
                      :key="index"
                    >
                      <b-col cols="2">
                        <img :src="urlAPI + item.image" alt="" />
                      </b-col>
                      <b-col cols="8">
                        <h6>{{ item.first_name }} {{ item.last_name }}</h6>
                        <p v-if="item.category === 1">Transfer</p>
                        <p v-if="item.category === 2">Receive</p>
                      </b-col>
                      <b-col cols="2">
                        <p
                          v-if="item.category === 2"
                          style="
                            color: #1ec15f;
                            font-size: 18px;
                            font-weight: bold;
                          "
                        >
                          + {{ item.amount }}
                        </p>
                        <p
                          v-if="item.category === 1"
                          style="color: red; font-size: 18px; font-weight: bold"
                        >
                          - {{ item.amount }}
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" v-if="search === false">
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
              <b-row>
                <b-col cols="12" v-if="search === true">
                  <div class="mt-4">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalSearch"
                      :per-page="limit"
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
      total: 50,
      currentPage: 1,
      urlAPI: process.env.VUE_APP_URL,
      sortText: 'Sort',
      search: false,
      form: {
        keyword: ''
      }
    }
  },
  components: {
    Header,
    Aside,
    Footer
  },
  created() {
    this.getDataHistory()
    this.searching()
  },
  computed: {
    ...mapGetters({
      getHistoryTransaction: 'getSearchHistoryTransaction',
      user: 'user',
      totalPage: 'getTotalPage',
      limit: 'getLimit',
      totalSearch: 'getTotalSearch',
      getSearchHistoryTransaction: 'getSearchHistoryTransaction'
    })
    // ...mapGetters(['getTotalPage'])
  },
  methods: {
    ...mapActions(['dataHistoryTransaction', 'searchingHistoryTransaction']),
    ...mapMutations(['changePage', 'sortHistoryTransaction']),
    handlePageChange(numberPage) {
      this.$router.push(`?page=${numberPage}`)
      this.changePage(numberPage)
      this.getDataHistory()
    },
    getDataHistory() {
      // const setData = {
      //   id: this.user[0].id
      // }
      this.dataHistoryTransaction(this.user)
        .then((response) => {
          this.search = false
          console.log(response)
        })
        .catch((error) => {
          console.log(error.data)
        })
    },
    sorting(value) {
      if (value === 'week') {
        this.sortText = 'This Week'
      } else if (value === 'month') {
        this.sortText = 'This Month'
      } else if (value === 'year') {
        this.sortText = 'This Years'
      }
      this.sortHistoryTransaction(value)
      this.getDataHistory()
      this.$router.push(`?sort=${value}`)
    },
    searching() {
      const setData = {
        id: this.user.id,
        search: this.form
      }
      this.search = true
      if (this.form.keyword === '') {
        this.search = false
      }
      this.searchingHistoryTransaction(setData)
      this.$router.push(`?search=${this.form.keyword}`)
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
