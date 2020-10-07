<template>
  <div class="ChangePassword">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="12" md="3">
            <Aside />
          </b-col>
          <b-col cols="12" md="9">
            <div class="main-changepass py-2">
              <h5 class="mt-3"><strong>Change Password</strong></h5>
              <small class="text-muted mt-5">
                You must enter your current password and then<br />
                type your new password twice
              </small>
              <div class="my-5 py-4">
                <div class="input-field mb-5">
                  <b-icon
                    class="align-self-center icon"
                    font-scale="1"
                    icon="lock"
                  ></b-icon>
                  <input
                    required
                    :type="this.type1"
                    placeholder="Current Password"
                    class="border-0"
                    v-model="form.current"
                  />
                  <b-icon
                    class="align-self-center icon"
                    font-scale="1"
                    :icon="this.show1"
                    @click="showPass1"
                  ></b-icon>
                </div>
                <div class="input-field mb-5">
                  <b-icon
                    class="align-self-center icon"
                    font-scale="1"
                    icon="lock"
                  ></b-icon>
                  <input
                    required
                    :type="this.type2"
                    placeholder="New Password"
                    class="border-0"
                    v-model="form.new"
                  />
                  <b-icon
                    class="align-self-center icon"
                    font-scale="1"
                    :icon="this.show2"
                    @click="showPass2"
                  ></b-icon>
                </div>
                <div class="input-field mb-4">
                  <b-icon
                    class="align-self-center icon"
                    font-scale="1"
                    icon="lock"
                  ></b-icon>
                  <input
                    required
                    :type="this.type3"
                    placeholder="Repeat New Password"
                    class="border-0"
                    v-model="form.confirm"
                  />
                  <b-icon
                    class="align-self-center icon"
                    font-scale="1"
                    :icon="this.show3"
                    @click="showPass3"
                  ></b-icon>
                </div>
                <div
                  class="btn-changepass text-center text-secondary"
                  @click="upChange"
                >
                  <strong>Change Password</strong>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/_base/header.vue'
import Aside from '@/components/_base/aside.vue'
import Footer from '@/components/_base/footer.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Personal',
  components: {
    Header,
    Aside,
    Footer
  },
  data() {
    return {
      form: {},
      type1: 'password',
      show1: 'eye-slash',
      type2: 'password',
      show2: 'eye-slash',
      type3: 'password',
      show3: 'eye-slash'
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['patchProfilePassword']),
    upChange() {
      const payload = {
        id: this.user.id,
        form: {
          password_new: this.form.new,
          password_confirm: this.form.confirm,
          password_last: this.form.current
        }
      }
      this.patchProfilePassword(payload)
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
          }, 2000)
        })
        .catch((error) => {
          console.log(error)
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: error.data.msg,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    showPass1() {
      if (this.type1 === 'password') {
        this.type1 = 'text'
        this.show = 'eye'
      } else {
        this.type1 = 'password'
        this.show = 'eye-slash'
      }
    },
    showPass2() {
      if (this.type2 === 'password') {
        this.type2 = 'text'
        this.show2 = 'eye'
      } else {
        this.type2 = 'password'
        this.show2 = 'eye-slash'
      }
    },
    showPass3() {
      if (this.type3 === 'password') {
        this.type3 = 'text'
        this.show3 = 'eye'
      } else {
        this.type3 = 'password'
        this.show3 = 'eye-slash'
      }
    }
  }
}
</script>

<style scoped>
main {
  background: #e5e5e5;
}
.main-changepass {
  background: #fff;
  padding: 50px 40px;
  margin: 50px 0;
  border-radius: 20px;
  height: 660px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

.input-field {
  display: grid;
  grid-template-columns: 10% 80% 10%;
  margin: 15px 27%;
  border-bottom: 1px solid #000;
  padding-bottom: 3px;
}
.input-field .icon {
  line-height: 55px;
  transition: 0.5s;
}
.input-field input {
  background: none;
  outline: none;
  font-size: 17px;
}

.btn-changepass {
  background: #e5e8ed;
  margin: 65px 27%;
  padding: 17px 15px;
  border-radius: 10px;
  cursor: pointer;
}

.btn-changepass:hover {
  opacity: 0.8;
}
</style>
