<template>
  <div class="personal">
    <Header />
    <b-jumbotron class="mb-0" style="background-color: #fafcff">
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
            <div class="main-personal py-2">
              <h5 class="mt-3"><strong>Personal Information</strong></h5>
              <small class="text-muted mt-4">
                We got your personal information from the sign<br />
                up proccess. If you want to make changes on<br />
                your information, contact our support.
              </small>
              <div class="my-3">
                <div class="personal-menu">
                  <p class="mb-0">First Name</p>
                  <h5 class="mb-0">
                    <strong>{{ user.first_name }}</strong>
                  </h5>
                </div>
                <div class="personal-menu">
                  <p class="mb-0">Last Name</p>
                  <h5 class="mb-0">
                    <strong>{{ user.last_name }}</strong>
                  </h5>
                </div>
                <div class="personal-menu">
                  <p class="mb-0">Verified E-mail</p>
                  <h5 class="mb-0">
                    <strong>{{ user.email }}</strong>
                  </h5>
                </div>
                <div class="personal-menu">
                  <p class="mb-0">Phone Number</p>
                  <h5 class="mb-0">
                    <strong>{{ user.phone }}</strong>
                  </h5>
                </div>
                <b-button class="mb-2" @click="modalEdit"> Settings </b-button>

                <!-- MODAL SETTING -->
                <b-modal id="edit-profile" hide-footer centered>
                  <template v-slot:modal-title> Edit Profile</template>
                  <b-form @submit.prevent="updateProfile()">
                    <b-form-group
                      label-cols-sm="3"
                      label="First Name"
                      label-for="nested-name"
                    >
                      <b-form-input
                        id="nested-name"
                        v-model="form.first_name"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label-cols-sm="3"
                      label="Last Name"
                      label-for="nested-about"
                    >
                      <b-form-input
                        id="nested-about"
                        v-model="form.last_name"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label-cols-sm="3"
                      label="Phone Number"
                      label-for="nested-phone"
                    >
                      <b-form-input
                        id="nested-phone"
                        v-model="form.phone"
                      ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" class="btn btn-success">
                      Save
                    </b-button>
                  </b-form>
                </b-modal>
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
  created() {
    this.getProfile(this.user.id)
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['patchPersonalName', 'patchPersonalPhone', 'getProfile']),
    modalEdit() {
      this.form = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        phone: this.user.phone
      }
      this.$bvModal.show('edit-profile')
    },
    updateProfile() {
      const payloadName = {
        id: this.user.id,
        setData: {
          first_name: this.form.first_name,
          last_name: this.form.last_name
        }
      }
      console.log(payloadName)
      this.patchPersonalName(payloadName)
      const payloadPhone = {
        id: this.user.id,
        setData2: {
          phone: this.form.phone
        }
      }
      console.log(payloadPhone)
      this.patchPersonalPhone(payloadPhone)
        .then((response) => {
          this.getProfile(this.user.id)
          this.$bvModal.hide('edit-profile')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.main-personal {
  background: #fff;
  padding: 50px 40px;
  margin: 50px 0;
  border-radius: 20px;
  height: 660px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
.personal-menu {
  padding: 17px 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  margin: 25px 0;
}
</style>
