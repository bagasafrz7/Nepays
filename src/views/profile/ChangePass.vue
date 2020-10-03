<template>
  <div class="ChangePassword">
    <Header />
    <b-jumbotron class="mb-0" style="background-color: #fafcff">
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
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
                    type="password"
                    placeholder="Current Password"
                    class="border-0"
                    v-model="form.current"
                  />
                </div>
                <div class="input-field mb-5">
                  <b-icon
                    class="align-self-center icon"
                    font-scale="1"
                    icon="lock"
                  ></b-icon>
                  <input
                    required
                    type="password"
                    placeholder="New Password"
                    class="border-0"
                    v-model="form.new"
                  />
                </div>
                <div class="input-field mb-4">
                  <b-icon
                    class="align-self-center icon"
                    font-scale="1"
                    icon="lock"
                  ></b-icon>
                  <input
                    required
                    type="password"
                    placeholder="Repeat New Password"
                    class="border-0"
                    v-model="form.confirm"
                  />
                </div>
                <div class="btn-changepass text-center" @click="upChange">
                  Change Password
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
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
      form: {}
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
    }
  }
}
</script>

<style scoped>
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
  grid-template-columns: 10% 90%;
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
}
</style>
