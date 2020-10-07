<template>
  <div class="change-pin">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="12" md="3">
            <Aside />
          </b-col>
          <b-col cols="12" md="9">
            <div class="main-pin">
              <b-row>
                <b-col cols="6">
                  <h2>Change PIN</h2>
                  <p v-if="changePin">
                    Enter your current 6 digits NePays PIN below to continue to
                    the next steps.
                  </p>
                  <p v-else>
                    Type your new 6 digits security PIN to use in NePays.
                  </p>
                </b-col>
              </b-row>
              <div class="text-center">
                <h5 v-if="changePin" class="mt-5">
                  <strong>Input Current PIN</strong>
                </h5>
                <h5 v-else class="mt-5"><strong>Input New PIN</strong></h5>
              </div>
              <b-form class="mt-3">
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
              </b-form>
              <b-button
                class="btn-login"
                block
                v-if="changePin"
                @click="checkPin"
                >Continue</b-button
              >
              <b-button class="btn-login" block v-else @click="upPin"
                >Change Pin</b-button
              >
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'changePin',
  data() {
    return {
      changePin: true,
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: '',
      lastPin: ''
    }
  },
  components: {
    Header,
    Aside,
    Footer
  },
  created() {
    this.getProfile(this.user.id)
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['getProfile', 'patchPin']),
    checkPin() {
      const setData = [
        this.pin1,
        this.pin2,
        this.pin3,
        this.pin4,
        this.pin5,
        this.pin6
      ]
      const pin = setData.join('')
      console.log(pin)
      this.changePin = false
      this.pin1 = ''
      this.pin2 = ''
      this.pin3 = ''
      this.pin4 = ''
      this.pin5 = ''
      this.pin6 = ''
      this.lastPin = pin
    },
    upPin() {
      console.log(this.lastPin)
      const newPin = [
        this.pin1,
        this.pin2,
        this.pin3,
        this.pin4,
        this.pin5,
        this.pin6
      ]
      const pin = newPin.join('')
      const payload = {
        id: this.user.id,
        form: {
          pin_last: this.lastPin,
          pin_new: pin
        }
      }
      console.log(payload)
      this.patchPin(payload)
        .then((response) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: response.msg,
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.$router.push('/profile')
          }, 1500)
        })
        .catch((error) => {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: error.data.msg,
            showConfirmButton: false,
            timer: 1500
          })
          this.changePin = true
          this.pin1 = ''
          this.pin2 = ''
          this.pin3 = ''
          this.pin4 = ''
          this.pin5 = ''
          this.pin6 = ''
        })
    }
  }
}
</script>

<style scoped>
main {
  background: #e5e5e5;
}
.main-pin {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
  overflow: auto;
}
.otp {
  display: grid;
  margin: 25px 200px 75px 200px;
  grid-template-columns: repeat(6, 38px);
  gap: 24px;
}
.input-otp {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  height: 50px;
}
.btn-login {
  width: 50%;
  margin-top: 100px;
  background-color: #dadada;
  border-color: #dadada;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  height: 47px;
  color: #88888f;
  font-size: 16px; /* */
  margin: 0 auto;
}
.btn-login:hover {
  background-color: #6379f4;
  border-color: #6379f4;
  color: #fff;
}

@media (max-width: 576px) {
  .main-pin {
    margin: 50px 5px;
  }
  .otp {
    display: grid;
    margin: 20px 10px 75px -10px;
    grid-template-columns: repeat(6, 38px);
    gap: 24px;
  }
}
</style>
