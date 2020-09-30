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
                ></b-form-input>
                <b-form-input
                  class="input-otp"
                  type="text"
                  maxLength="1"
                  id="input-2"
                ></b-form-input>
                <b-form-input
                  class="input-otp"
                  type="text"
                  maxLength="1"
                  id="input-2"
                ></b-form-input>
                <b-form-input
                  class="input-otp"
                  type="text"
                  maxLength="1"
                  id="input-2"
                ></b-form-input>
                <b-form-input
                  class="input-otp"
                  type="text"
                  maxLength="1"
                  id="input-2"
                ></b-form-input>
                <b-form-input
                  class="input-otp"
                  type="text"
                  maxLength="1"
                  id="input-2"
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
import Left from '../../components/AuthLeft'
export default {
  components: {
    Left
  },
  name: 'auth',
  data() {
    return {
      showOtp: true,
      showSuccess: false
    }
  },
  methods: {
    confirm() {
      this.showOtp = false
      this.showSuccess = true
    }
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
  font-size: 35px;
  font-weight: bold;
  line-height: 50px;
  margin-bottom: 30px;
}

.login-form .p-text {
  font-size: 23px;
  color: rgba(58, 61, 66, 0.6);
  margin-bottom: 30px;
}

.btn-login {
  margin-top: 90px;
  background-color: #dadada;
  border-color: #dadada;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  height: 60px;
  color: #88888f;
  font-size: 18px;
}

.btn-login:hover {
  background-color: #6379f4;
  border-color: #6379f4;
  color: #fff;
}

.otp {
  display: grid;
  margin: auto;
  grid-template-columns: repeat(6, 70px);
  gap: 33px;
}

.input-otp {
  font-size: 40px;
  text-align: center;
  height: 90px;
}
/* RIGHT-SIDE */
</style>
