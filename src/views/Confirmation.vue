<template>
  <div class="confirmation">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
            <div class="main-confirmation">
              <h2>Transfer To</h2>
              <div class="detail-user">
                <b-row>
                  <b-col cols="2">
                    <img src="../assets/img/users.png" alt="" />
                  </b-col>
                  <b-col cols="10">
                    <h6>Sushi Samuel</h6>
                    <p>+62 813-8492-9994</p>
                  </b-col>
                </b-row>
              </div>
              <h4>Details</h4>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Amount</p>
                    <h5>Rp.100.000</h5>
                  </b-col>
                </b-row>
              </div>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Balance Left</p>
                    <h5>Rp.20.000</h5>
                  </b-col>
                </b-row>
              </div>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Date & Time</p>
                    <h5>May 11, 2020 - 12.20</h5>
                  </b-col>
                </b-row>
              </div>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Notes</p>
                    <h5>For buying some socks</h5>
                  </b-col>
                </b-row>
              </div>
              <b-row>
                <b-col cols="12">
                  <b-button
                    variant="primary"
                    class="btn-continue"
                    @click="showModal"
                    >Continue</b-button
                  >
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />

    <!-- Modal Enter Pin -->
    <b-modal ref="my-modal" hide-footer title="Enter PIN to Transfer">
      <div class="d-block">
        <b-row>
          <b-col cols="8">
            <p>
              Enter your 6 digits PIN for confirmation to continue transferring
              money.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b-input type="number" placeholder="_" class="btn-pin"></b-input>
          </b-col>
          <b-col cols="2">
            <b-input type="number" placeholder="_" class="btn-pin"></b-input>
          </b-col>
          <b-col cols="2">
            <b-input type="number" placeholder="_" class="btn-pin"></b-input>
          </b-col>
          <b-col cols="2">
            <b-input type="number" placeholder="_" class="btn-pin"></b-input>
          </b-col>
          <b-col cols="2">
            <b-input type="number" placeholder="_" class="btn-pin"></b-input>
          </b-col>
          <b-col cols="2">
            <b-input type="number" placeholder="_" class="btn-pin"></b-input>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col cols="12" class="float-right btn-modal-continue">
          <b-button
            class="mt-4 btn-modal-continue"
            variant="primary"
            block
            @click="hideModal"
            >Continue</b-button
          >
        </b-col>
      </b-row>
    </b-modal>
    <!-- Modal Enter Pin -->
  </div>
</template>

<script>
import Header from '../components/_base/header'
import Aside from '../components/_base/aside'
import Footer from '../components/_base/footer'
export default {
  name: 'Confirmation',
  data() {
    return {}
  },
  components: {
    Header,
    Aside,
    Footer
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    }
  }
}
</script>

<style scoped>
main {
  background: #e5e5e5;
}
.main-confirmation {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
  overflow: auto;
}
.main-confirmation .detail-user {
  margin: 10px 0 30px 0;
  padding: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
}
.main-confirmation .detail-user img {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}
.main-confirmation .detail {
  margin: 10px 0 30px 0;
  padding: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
}
.main-confirmation .btn-continue {
  padding: 10px 25px;
  background: #6379f4;
  border: 1px solid #6379f4;
  margin-top: 50px;
  float: right;
}
.btn-pin {
  /* padding-left: 20px; */
  width: 50px;
  height: 60px;
}
.btn-modal-continue button {
  width: 30%;
  padding: 10px 25px;
  background: #6379f4;
  border: 1px solid #6379f4;
  float: right;
}
</style>
