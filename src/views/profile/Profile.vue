<template>
  <div class="profile-personal">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9" class="profile text-center">
            <b-img :src="url + '/' + user.image" />
            <div class="my-1 text-muted">
              <label for="files" class="mb-0">
                <b-icon
                  class="align-self-center"
                  font-scale="0.8"
                  icon="pencil"
                ></b-icon>
                Edit
              </label>
              <input
                @change.prevent="upImage"
                id="files"
                type="file"
                ref="file"
                style="display: none"
              />
            </div>
            <h4 class="mt-3">{{ user.first_name + ' ' + user.last_name }}</h4>
            <p class="text-muted">{{ user.phone }}</p>
            <div class="my-5">
              <div
                class="profile-menu text-center"
                @click="$router.push('/profile/personal-information')"
              >
                <p class="mb-0 text-muted">
                  <strong>Personal Information</strong>
                </p>
                <b-icon class="align-self-center" icon="arrow-right"></b-icon>
              </div>
              <div
                class="profile-menu text-center"
                @click="$router.push('/profile/change-password')"
              >
                <p class="mb-0 text-muted">
                  <strong>Change Password</strong>
                </p>
                <b-icon class="align-self-center" icon="arrow-right"></b-icon>
              </div>
              <div
                class="profile-menu text-center"
                @click="$router.push('/change-pin')"
              >
                <p class="mb-0 text-muted">
                  <strong>Change PIN</strong>
                </p>
                <b-icon class="align-self-center" icon="arrow-right"></b-icon>
              </div>
              <div class="profile-menu text-center" @click="toLogout">
                <p class="mb-0 text-muted">
                  <strong>Logout</strong>
                </p>
                <b-icon class="align-self-center" icon="arrow-right"></b-icon>
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
  name: 'Profile',
  components: {
    Header,
    Aside,
    Footer
  },
  data() {
    return {
      url: 'http://127.0.0.1:3009',
      formImage: {}
    }
  },
  created() {
    this.getProfile(this.user.id)
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['patchProfileImage', 'logout', 'getProfile']),
    upImage(event) {
      this.formImage.image = event.target.files[0]
      const data = new FormData()
      data.append('image', this.formImage.image)
      const payload = {
        id: this.user.id,
        image: data
      }
      this.patchProfileImage(payload)
        .then((response) => {
          this.getProfile(this.user.id)
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: response.msg,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((error) => {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: error.data.msg,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    toLogout() {
      this.$swal
        .fire({
          title: 'logout account ?',
          icon: 'warning',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: 'Cancel'
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$swal.fire('See you again!', '', 'success')
            this.logout()
          }
        })
    }
  }
}
</script>

<style scoped>
main {
  background: #e5e5e5;
}
.profile {
  background: #fff;
  padding: 50px 40px;
  margin: 50px 0;
  border-radius: 20px;
  height: 660px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

.profile img {
  width: 100px;
  border-radius: 10px;
}

.profile-menu {
  background: #e5e8ed;
  display: flex;
  justify-content: space-between;
  margin: 15px 27%;
  padding: 17px 15px;
  border-radius: 10px;
}

.profile-menu:hover {
  opacity: 0.6;
  cursor: pointer;
}

label:hover {
  opacity: 0.6;
  cursor: pointer;
}
</style>
