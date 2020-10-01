<template>
  <b-container fluid>
    <b-row>
      <Left />
      <b-col cols="5">
        <section v-show="showOtp">
          <div class="login-form">
            <h3>
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </h3>
            <p class="p-text">
              Create 6 digits pin to secure all your money and your data in
              Zwallet app. Keep it secret and don’t tell anyone about your
              Nepays account password and the PIN.
            </p>
            <b-form class="mt-5">
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
            <b-button class="btn-login" block @click="confirm"
              >Confirm</b-button
            >
          </div>
        </section>
        <section v-show="showSuccess">
          <div class="login-form">
            <img class="mb-5" src="../../assets/auth_img/success.png" alt="" />
            <h3>Your PIN Was Successfully Created</h3>
            <p class="p-text">
              Your PIN was successfully created and you can now access all the
              features in Nepays. Login to your new account and start exploring!
            </p>

            <b-button class="btn-login" block>Login Now</b-button>
          </div>
        </section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Left from '../../components/AuthLeft'
export default {
  components: {
    Left
  },
  name: 'auth',
  data() {
    return {
      showOtp: true,
      showSuccess: false,
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: ''
    }
  },
  methods: {
    ...mapActions(['setPin']),
    confirm() {
      // this.showOtp = false
      // this.showSuccess = true
      const setData = [
        this.pin1,
        this.pin2,
        this.pin3,
        this.pin4,
        this.pin5,
        this.pin6
      ]
      const pin = setData.join('')
      const newResult = {
        id: this.user.id,
        pin
      }
      this.setPin(newResult)
        .then((res) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: res.msg,
            showConfirmButton: false,
            timer: 2000
          })
          // setTimeout(() => {
          //   this.$router.push('/')
          // }, 5000)
        })
        .catch((err) => {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: err,
            showConfirmButton: false,
            timer: 2000
          })
        })
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
/* RIGHT-SIDE */
.login-form {
  margin: 120px auto;
  padding-left: 40px;
  padding-right: 140px;
}

.login-form h3 {
  font-size: 24px; /* */
  font-weight: bold;
  line-height: 34px; /* */
  margin-bottom: 30px;
}

.login-form .p-text {
  font-size: 16px; /* */
  color: rgba(58, 61, 66, 0.6);
  margin-bottom: 30px;
}

.btn-login {
  margin-top: 50px;
  background-color: #dadada;
  border-color: #dadada;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  height: 47px;
  color: #88888f;
  font-size: 16px; /* */
}

.btn-login:hover {
  background-color: #6379f4;
  border-color: #6379f4;
  color: #fff;
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
/* RIGHT-SIDE */
</style>
