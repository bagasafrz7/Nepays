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
            Transfering money is eassier than ever, you can access Nepays
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <b-form>
            <div class="form-email">
              <img src="../../assets/auth_img/mail.png" alt="" />
              <b-form-group>
                <b-form-input
                  class="input"
                  id="input-1"
                  type="email"
                  v-model="form.email"
                  placeholder="Enter your e-mail"
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
                  v-model="form.password"
                  placeholder="Enter your password"
                ></b-form-input>
              </b-form-group>
            </div>
          </b-form>
          <router-link to="/reset">
            <p class="p-forgot">Forgot password?</p></router-link
          >

          <b-button class="btn-login" block @click="loginBtn">Login</b-button>
          <p class="p-signup">
            Don't have an account? Let's
            <router-link to="/register"><span>Sign Up</span></router-link>
          </p>
        </div>
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
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login', 'getChart']),
    loginBtn() {
      const setData = {
        email: this.form.email,
        password: this.form.password
      }
      this.login(setData)
        .then((res) => {
          this.getChart(this.user.id)
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: res.msg,
            showConfirmButton: false,
            timer: 1500
          })
          this.form = {
            email: '',
            password: ''
          }
          setTimeout(() => {
            if (this.user.pin_code === '' || this.user.pin_code === undefined) {
              this.$router.push('/pin')
            } else {
              this.$router.push('/home')
            }
          }, 100)
        })
        .catch((err) => {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: err,
            showConfirmButton: false,
            timer: 1500
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

.form-email,
.form-password {
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: 18px 315px;
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

.p-forgot {
  margin-top: -30px;
  font-size: 14px;
  text-align: right;
  color: rgba(58, 61, 66, 0.8);
}

.btn-login {
  margin-top: 70px;
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

.p-signup {
  margin-top: 30px;
  text-align: center;
  color: rgba(58, 61, 66, 0.8);
  font-size: 16px;
}

.p-signup span {
  color: #6379f4;
}
/* RIGHT-SIDE */
</style>
