<template>
  <div class="main">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
            <div class="main-transfer">
              <section v-show="searchReceiverSection">
                <b-container>
                  <h3 class="mb-4" style="font-size: 18px; font-weight: 700">
                    Search Receiver
                  </h3>
                  <div class="grid">
                    <div @click="searchReceiver">
                      <img src="../assets/img/search.png" alt="" />
                    </div>
                    <b-form>
                      <b-form-input
                        class="input"
                        type="text"
                        placeholder="Search receiver here"
                        v-model="search"
                      ></b-form-input>
                    </b-form>
                  </div>
                  <div>
                    <b-row
                      class="ml-1"
                      v-for="(value, index) in allReceiver.data"
                      :key="index"
                    >
                      <div
                        class="flex mt-5 mr-5"
                        style="cursor: pointer"
                        @click="receiverBtn(value.id)"
                      >
                        <div class="receiver-img mr-3">
                          <img
                            class="receiver-img mr-3"
                            :src="port + value.image"
                            alt=""
                          />
                        </div>
                        <div>
                          <p
                            style="
                              font-size: 18px;
                              color: #4d4b57;
                              margin-bottom: 5px;
                              margin-top: 9px;
                            "
                          >
                            {{ value.first_name }} {{ value.last_name }}
                          </p>
                          <p style="font-size: 16px; color: #7a7886">
                            {{ value.phone }}
                          </p>
                        </div>
                      </div>
                    </b-row>
                  </div>
                  <div class="mt-3 pagination">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="limit"
                      align="center"
                      @change="pageChange"
                    ></b-pagination>
                  </div>
                </b-container>
              </section>
              <section v-show="transferSection">
                <b-container>
                  <h3 style="font-size: 18px; font-weight: 700">
                    Transfer Money
                  </h3>
                  <div>
                    <b-row class="ml-1">
                      <div class="flex mt-4">
                        <div class="receiver-img mr-3">
                          <img
                            class="receiver-img mr-3"
                            :src="port + getReceiver.image"
                            alt=""
                          />
                        </div>
                        <div>
                          <p
                            style="
                              font-size: 18px;
                              color: #4d4b57;
                              margin-bottom: 5px;
                              margin-top: 9px;
                            "
                          >
                            {{ getReceiver.first_name }}
                            {{ getReceiver.last_name }}
                          </p>
                          <p style="font-size: 16px; color: #7a7886">
                            {{ getReceiver.phone }}
                          </p>
                        </div>
                      </div>
                    </b-row>
                    <b-row class="ml-1 mt-5">
                      <p>Type the amount you want to transfer and then</p>
                    </b-row>
                    <b-row class="ml-1 mb-5">
                      <p>press continue to the next steps.</p>
                    </b-row>
                    <b-row class="ml-1">
                      <b-form style="margin: auto">
                        <b-form-input
                          class="form-transfer"
                          type="text"
                          maxLength="10"
                          placeholder="0.00"
                          v-model="amounts"
                        ></b-form-input>
                        <p
                          style="
                            text-align: center;
                            margin-top: 40px;
                            font-weight: bold;
                            font-size: 16px;
                          "
                        >
                          Rp. {{ user.balance }} Available
                        </p>
                      </b-form>
                    </b-row>
                    <b-row class="ml-1 mt-2">
                      <div class="form-notes">
                        <img src="../assets/auth_img/notes.png" alt="" />
                        <b-form-group>
                          <b-form-input
                            class="input-notes"
                            id="input-1"
                            type="text"
                            placeholder="Add some notes"
                            v-model="notes"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </b-row>
                    <b-row>
                      <b-button
                        class="btn-continue ml-auto"
                        @click="continueBtn(getReceiver.id)"
                        >Continue</b-button
                      >
                    </b-row>
                  </div>
                </b-container>
              </section>
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
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    Aside,
    Footer,
    Header
  },
  data() {
    return {
      // rows: 100,
      currentPage: 1,
      limit: 4,
      searchReceiverSection: true,
      transferSection: false,
      search: '',
      amounts: '',
      notes: '',
      port: 'http://127.0.0.1:5000/'
    }
  },
  created() {
    this.searchReceiver()
  },
  methods: {
    ...mapActions([
      'searchUser',
      'getAllReceiver',
      'getReceiverById',
      'transfer'
    ]),
    ...mapMutations(['setPagination', 'setUserLogin', 'setTransferDetails']),
    continueBtn(data) {
      // this.searchReceiverSection = true
      // this.transferSection = false
      // KONDISI JIKA NOMINAL KURANG DARI AMOUNTS ----
      if (this.user.balance > this.amounts) {
        const setData = {
          userId: this.user.id,
          targetId: data,
          amount: this.amounts,
          note: this.notes,
          date: new Date()
        }
        this.setTransferDetails(setData)
        this.$router.push('/confirmation')
      } else {
        this.$swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Sorry, your balance is not enough',
          showConfirmButton: false,
          timer: 1500
        })
      }
    },
    receiverBtn(id) {
      this.searchReceiverSection = false
      this.transferSection = true
      this.getReceiverById(id)
    },
    searchReceiver() {
      const setData = {
        search: this.search,
        id_user_login: this.user.id
      }
      this.getAllReceiver(setData)
    },
    pageChange(event) {
      this.setPagination(event)
      this.searchReceiver()
    }
  },
  computed: {
    ...mapGetters(['user', 'allReceiver', 'rows', 'getReceiver'])
  }
}
</script>

<style scoped>
main {
  background: #e5e5e5;
}
.main-transfer {
  position: relative;
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
}

.grid {
  background: rgba(52, 55, 59, 0.1);
  border-radius: 12px;
  /* gap: 5px; */
  display: grid;
  grid-template-columns: 40px 650px;
  align-content: center;
  height: 40px;
}

.grid div img {
  margin: 7px 10px;
}

.input {
  width: 100%;
  border-color: rgba(58, 61, 66, 0.1);
  background: rgba(58, 61, 66, 0.1);
}

.flex {
  display: flex;
  width: 100%;
  height: 70px;
  align-self: center;
  transition: 0.3s;
}
.flex:hover {
  background-image: linear-gradient(
    to right,
    rgb(199, 199, 199),
    rgb(94, 94, 94)
  );
  border-radius: 20px 50% 50% 20px;
  padding-left: 60px;
}

.receiver-img {
  border-radius: 10px;
  width: 70px;
  height: 70px;
}

.pagination {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}

.form-transfer {
  margin: auto;
  width: 300px;
  height: 56px;
  font-weight: bold;
  font-size: 42px;
  text-align: center;
  border: white;
}

.form-notes {
  margin: auto;
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: 18px 315px;
  margin-bottom: 30px;
}

.input-notes {
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid rgba(169, 169, 169, 0.6);
  border-radius: 0px;
  margin-top: 12px;
  margin-left: 7px;
  font-size: 16px;
  color: rgba(169, 169, 169, 0.8);
}

.btn-continue {
  background-color: #6379f4;
  border-color: #6379f4;
  width: 120px;
  height: 47px;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
}
.btn-continue:hover {
  background-color: #586de4;
  border-color: #586de4;
}
</style>
