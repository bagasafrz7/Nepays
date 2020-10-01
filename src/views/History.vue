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
              <b-row>
                <b-col cols="10">
                  <h6 class="mb-4">Transaction History</h6>
                  <!-- <b-input-group size="md">
                    <b-input-group-prepend is-text>
                      <b-icon icon="search"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                      type="search"
                      placeholder="Search terms"
                    ></b-form-input>
                  </b-input-group> -->
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
                    <b-row class="my-4">
                      <b-col cols="2">
                        <img src="../assets/img/users.png" alt="" />
                      </b-col>
                      <b-col cols="8">
                        <h6>Samuel Sushi</h6>
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
                          +Rp50.000
                        </p>
                      </b-col>
                    </b-row>
                    <b-row class="my-4">
                      <b-col cols="2">
                        <img src="../assets/img/users.png" alt="" />
                      </b-col>
                      <b-col cols="8">
                        <h6>Samuel Sushi</h6>
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
                          +Rp50.000
                        </p>
                      </b-col>
                    </b-row>
                    <b-row class="my-4">
                      <b-col cols="2">
                        <img src="../assets/img/users.png" alt="" />
                      </b-col>
                      <b-col cols="8">
                        <h6>Samuel Sushi</h6>
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
                          +Rp50.000
                        </p>
                      </b-col>
                    </b-row>
                    <b-row class="my-4">
                      <b-col cols="2">
                        <img src="../assets/img/users.png" alt="" />
                      </b-col>
                      <b-col cols="8">
                        <h6>Samuel Sushi</h6>
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
                          +Rp50.000
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <div>
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      align="center"
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
import Header from '../components/_base/header'
import Aside from '../components/_base/aside'
import Footer from '../components/_base/footer'
export default {
  name: 'History',
  data() {
    return {}
  },
  components: {
    Header,
    Aside,
    Footer
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
