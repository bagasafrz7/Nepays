<template>
  <div class="confirmation">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="12" md="3">
            <Aside />
          </b-col>
          <b-col cols="12" md="9">
            <div class="main-confirmation">
              <h2>Transfer To</h2>
              <div class="detail-user">
                <b-row>
                  <b-col cols="2">
                    <img :src="port + getReceiver.image" alt="" />
                  </b-col>
                  <b-col cols="10">
                    <h6>
                      {{ getReceiver.first_name }} {{ getReceiver.last_name }}
                    </h6>
                    <p>{{ getReceiver.phone }}</p>
                  </b-col>
                </b-row>
              </div>
              <h4>Details</h4>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Amount</p>
                    <h5>
                      Rp.
                      {{
                        transferDetail.amount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                      }}
                    </h5>
                  </b-col>
                </b-row>
              </div>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Balance Left</p>
                    <h5>
                      Rp.
                      {{ user.balance - transferDetail.amount }}
                    </h5>
                  </b-col>
                </b-row>
              </div>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Date & Time</p>
                    <h5>{{ transferDetail.date }}</h5>
                  </b-col>
                </b-row>
              </div>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Notes</p>
                    <h5>{{ transferDetail.note }}</h5>
                  </b-col>
                </b-row>
              </div>
              <b-row class="mb-5">
                <b-col cols="12">
                  <b-button
                    variant="primary"
                    class="btn-continue"
                    @click="showModal"
                    >Continue</b-button
                  >
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />

    <!-- Modal Enter Pin -->
    <b-modal ref="my-modal" hide-footer title="Enter PIN to Transfer">
      <div class="d-block">
        <b-row>
          <b-col cols="8">
            <p>
              Enter your 6 digits PIN for confirmation to continue transferring
              money.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <div class="otp">
            <b-form-input
              class="input-otp"
              type="text"
              maxLength="1"
              id="input-2"
              v-model="pin1"
            ></b-form-input>
            <b-form-input
              class="input-otp"
              type="text"
              maxLength="1"
              id="input-2"
              v-model="pin2"
            ></b-form-input>
            <b-form-input
              class="input-otp"
              type="text"
              maxLength="1"
              id="input-2"
              v-model="pin3"
            ></b-form-input>
            <b-form-input
              class="input-otp"
              type="text"
              maxLength="1"
              id="input-2"
              v-model="pin4"
            ></b-form-input>
            <b-form-input
              class="input-otp"
              type="text"
              maxLength="1"
              id="input-2"
              v-model="pin5"
            ></b-form-input>
            <b-form-input
              class="input-otp"
              type="text"
              maxLength="1"
              id="input-2"
              v-model="pin6"
            ></b-form-input>
          </div>
        </b-row>
      </div>
      <b-row>
        <b-col cols="12" class="float-right btn-modal-continue">
          <b-button
            class="mt-4 btn-modal-continue"
            variant="primary"
            block
            @click="confirmPin"
            >Continue</b-button
          >
        </b-col>
      </b-row>
    </b-modal>
    <!-- Modal Enter Pin -->
  </div>
</template>

<script>
import Header from '../components/_base/header'
import Aside from '../components/_base/aside'
import Footer from '../components/_base/footer'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Confirmation',
  data() {
    return {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: '',
      port: process.env.VUE_APP_URL
    }
  },
  components: {
    Header,
    Aside,
    Footer
  },
  computed: {
    ...mapGetters(['transferDetail', 'user', 'getReceiver'])
  },
  methods: {
    ...mapActions(['transfer', 'getProfile']),
    showModal() {
      this.$refs['my-modal'].show()
    },
    confirmPin() {
      // this.$refs['my-modal'].hide()s
      const setData = [
        this.pin1,
        this.pin2,
        this.pin3,
        this.pin4,
        this.pin5,
        this.pin6
      ]
      const pin = setData.join('')
      const setForm = {
        userId: this.transferDetail.userId,
        targetId: this.transferDetail.targetId,
        amount: this.transferDetail.amount,
        note: this.transferDetail.note,
        pin
      }
      this.transfer(setForm)
        .then((res) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/success')
        })
        .catch((err) => {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: err,
            showConfirmButton: false,
            timer: 1500
          })
          this.pin1 = ''
          this.pin2 = ''
          this.pin3 = ''
          this.pin4 = ''
          this.pin5 = ''
          this.pin6 = ''
        })
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    }
  }
}
</script>

<style scoped>
main {
  background: #e5e5e5;
}
.main-confirmation {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
  overflow: auto;
}
.main-confirmation .detail-user {
  margin: 10px 0 30px 0;
  padding: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
}
.main-confirmation .detail-user img {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}
.main-confirmation .detail {
  margin: 10px 0 30px 0;
  padding: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
}
.main-confirmation .btn-continue {
  padding: 10px 25px;
  background: #6379f4;
  border: 1px solid #6379f4;
  margin-top: 50px;
  float: right;
}
.btn-pin {
  /* padding-left: 20px; */
  width: 50px;
  height: 60px;
}
.btn-modal-continue button {
  width: 30%;
  padding: 10px 25px;
  background: #6379f4;
  border: 1px solid #6379f4;
  float: right;
}

.otp {
  display: grid;
  margin: auto;
  grid-template-columns: repeat(6, 38px);
  gap: 24px;
}

.input-otp {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  height: 50px;
}

@media (max-width: 576px) {
  .main-confirmation {
    margin: 50px 0;
  }
  .main-confirmation .detail-user h6 {
    margin-left: 25px;
    margin-top: 5px;
  }
  .main-confirmation .detail-user p {
    margin-left: 25px;
  }

  .main-confirmation .detail-user img {
    width: 60px;
    height: 60px;
    margin-right: -40px;
  }

  .main-confirmation h2 {
    font-size: 20px;
  }
  .main-confirmation h4 {
    font-size: 20px;
  }

  .detail h5 {
    font-size: 17px;
  }
}
</style>
