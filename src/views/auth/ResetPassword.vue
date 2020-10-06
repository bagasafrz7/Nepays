<template>
  <b-container fluid>
    <b-row>
      <Left />
      <div class="logo">
        <img class="logo-img" src="../../assets/img/nepays-blue.png" alt="" />
      </div>
      <b-col cols lg="5" sm="12">
        <div class="login-form">
          <h3>
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
            Password In a Minutes.
          </h3>
          <p class="p-text">
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
          <b-form>
            <div class="form-email">
              <img src="../../assets/auth_img/lock.png" alt="" />
              <b-form-group>
                <b-form-input
                  class="input"
                  id="input-1"
                  type="password"
                  placeholder="Create new password"
                  v-model="form.newPassword"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="form-email">
              <img src="../../assets/auth_img/lock.png" alt="" />
              <b-form-group>
                <b-form-input
                  class="input"
                  id="input-1"
                  type="password"
                  placeholder="Confirm password"
                  v-model="form.confirmPassword"
                ></b-form-input>
              </b-form-group>
            </div>
          </b-form>
          <b-button class="btn-login" block @click="resetPassword"
            >Reset Password</b-button
          >
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
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    ...mapActions(['newPassword']),
    resetPassword() {
      const setData = {
        key: this.$route.query.key,
        newPassword: this.form.newPassword,
        confirmPassword: this.form.confirmPassword
      }
      this.newPassword(setData)
        .then((res) => {
          if (res.status === 400 || res.status === 404) {
            this.$swal.fire({
              position: 'center',
              icon: 'error',
              title: res.msg,
              showConfirmButton: false,
              timer: 2000
            })
          } else {
            this.$swal.fire({
              position: 'center',
              icon: 'success',
              title: res.msg,
              showConfirmButton: false,
              timer: 2000
            })
            this.$router.push('/login')
          }
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

.form-email {
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
}

/* RIGHT-SIDE */

.logo {
  display: none;
}
@media (max-width: 670px) {
  .login-form {
    padding-right: 40px;
  }

  h3.start {
    font-size: 18px;
  }

  .login-form p.p-text {
    font-size: 14px;
  }

  .input {
    font-size: 14px;
    width: 250px;
  }

  .p-forgot {
    font-size: 12px;
    margin-right: 15px;
    margin-top: 15px;
  }

  .logo {
    width: 100%;
    margin-bottom: -130px;
    display: block;
  }

  .logo .logo-img {
    display: block;
    margin: auto;
  }
}
</style>
