<template>
  <b-container fluid>
    <b-row>
      <Left />
      <b-col cols="5">
        <div class="login-form">
          <h3>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </h3>
          <p class="p-text">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <b-form>
            <div class="form-email">
              <img src="../../assets/auth_img/person.png" alt="" />
              <b-form-group>
                <b-form-input
                  class="input"
                  id="input-1"
                  type="text"
                  placeholder="First name"
                  v-model="form.first_name"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="form-email">
              <img src="../../assets/auth_img/person.png" alt="" />
              <b-form-group>
                <b-form-input
                  class="input"
                  id="input-1"
                  type="text"
                  placeholder="Last Name"
                  v-model="form.last_name"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="form-email">
              <img src="../../assets/auth_img/mail.png" alt="" />
              <b-form-group>
                <b-form-input
                  class="input"
                  id="input-1"
                  type="text"
                  placeholder="Phone number"
                  v-model="form.phone"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="form-email">
              <img src="../../assets/auth_img/mail.png" alt="" />
              <b-form-group>
                <b-form-input
                  class="input"
                  id="input-1"
                  type="email"
                  placeholder="Enter your e-mail"
                  v-model="form.email"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="form-password">
              <img src="../../assets/auth_img/lock.png" alt="" />
              <b-form-group>
                <b-form-input
                  class="input"
                  id="input-2"
                  type="password"
                  placeholder="Enter your password"
                  v-model="form.password"
                ></b-form-input>
              </b-form-group>
            </div>
          </b-form>
          <b-button class="btn-login" block @click="registerBtn"
            >Register</b-button
          >
          <p class="p-login">
            Already have an account?
            <router-link to="/login"><span>Login</span></router-link>
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import Left from '../../components/AuthLeft'
export default {
  components: {
    Left
  },
  name: 'auth',
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    registerBtn() {
      const setData = {
        firstName: this.form.first_name,
        lastName: this.form.last_name,
        email: this.form.email,
        phone: this.form.phone,
        password: this.form.password
      }
      this.register(setData)
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

.form-email,
.form-password {
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: 18px 315px; /* */
  margin-bottom: 30px;
}

.input {
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid rgba(169, 169, 169, 0.6);
  border-radius: 0px;
  margin-top: 12px;
  margin-left: 7px;
  font-size: 16px;
}

.btn-login {
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
  font-size: 16px; /* */
}

.p-login {
  margin-top: 30px;
  text-align: center;
  color: rgba(58, 61, 66, 0.8);
  font-size: 16px; /* */
}

.p-login span {
  color: #6379f4;
}
/* RIGHT-SIDE */
</style>
