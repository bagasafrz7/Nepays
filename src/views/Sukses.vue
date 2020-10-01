<template>
  <div class="sukses">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
            <div class="main-sukses">
              <b-row>
                <b-col cols="12" class="text-center">
                  <div class="img-sukses">
                    <img src="../assets/img/sukses.png" alt="" />
                  </div>
                  <h4 class="mb-4">Transfer Success</h4>
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
                <b-col cols="6" class="text-right">
                  <!-- <div class="icon-share"> -->
                  <b-button variant="primary icon-share">
                    <b-icon icon="share" aria-hidden="true"></b-icon>
                  </b-button>
                  <!-- </div> -->
                </b-col>
                <b-col cols="3" class="btn-download text-right">
                  <b-button variant="primary" class="btn-download">
                    <b-icon icon="download" aria-hidden="true"></b-icon>
                    Download PDF
                  </b-button>
                </b-col>
                <b-col cols="3" class="btn-back text-right">
                  <b-button
                    class="btn-back"
                    variant="primary"
                    aria-hidden="true"
                    >Back To Home</b-button
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
  name: 'Sukses',
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

.main-sukses {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
  overflow: auto;
}
.main-sukses .img-sukses img {
  width: 100px;
  height: 110px;
}
.main-sukses .detail {
  margin: 10px 0 30px 0;
  padding: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
}
.main-sukses .detail-user img {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}
.main-sukses .icon-share {
  /* width: 57px;
  height: 57px;
  text-align: center;
  line-height: 57px; */
  padding: 10px 15px;
  background: rgba(99, 121, 244, 0.15);
  border: none;
  border: 1px solid rgba(99, 121, 244, 0.15);
  border-radius: 12px;
  color: #000;
}
.main-sukses .btn-download button {
  padding: 10px 15px;
  width: 100%;
  background: rgba(99, 121, 244, 0.15);
  border: none;
  border: 1px solid rgba(99, 121, 244, 0.15);
  border-radius: 12px;
  color: #6379f4;
}
.main-sukses .btn-back button {
  width: 100%;
  padding: 10px 15px;
  background: #6379f4;
  border: none;
  border: 1px solid #6379f4;
  border-radius: 12px;
  color: #fff;
}
</style>
