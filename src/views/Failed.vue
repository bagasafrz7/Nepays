<template>
  <div class="failed">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
            <div class="main-failed">
              <b-row>
                <b-col cols="12" class="text-center">
                  <div class="img-failed mb-3">
                    <img src="../assets/img/failed.png" alt="" />
                  </div>
                  <h4 class="mb-4">Transfer Failed</h4>
                </b-col>
              </b-row>
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
              <h5 class="mb-3">Transfer To</h5>
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
              <b-row>
                <b-col cols="12" class="btn-try text-right">
                  <b-button class="btn-try" variant="primary" aria-hidden="true"
                    >Try Again</b-button
                  >
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/_base/header'
import Aside from '../components/_base/aside'
import Footer from '../components/_base/footer'
export default {
  name: 'Failed',
  data() {
    return {}
  },
  components: {
    Header,
    Aside,
    Footer
  }
}
</script>

<style scoped>
main {
  background: #e5e5e5;
}
.main-failed {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
  overflow: auto;
}
.main-failed .img-failed img {
  width: 100px;
  height: 100px;
}
.main-failed .detail {
  margin: 10px 0 30px 0;
  padding: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
}
.main-failed .detail-user img {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}
.main-failed .btn-try button {
  padding: 10px 15px;
  background: #6379f4;
  border: none;
  border: 1px solid #6379f4;
  border-radius: 12px;
  color: #fff;
}
</style>
