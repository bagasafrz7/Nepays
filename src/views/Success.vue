<template>
  <div class="sukses">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="12" md="3">
            <Aside />
          </b-col>
          <b-col cols="12" md="9">
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
                    <h5>Rp. {{ transferDetail.amount }}</h5>
                  </b-col>
                </b-row>
              </div>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Balance Left</p>
                    <h5>Rp. {{ user.balance - transferDetail.amount }}</h5>
                  </b-col>
                </b-row>
              </div>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Date & Time</p>
                    <h5>{{ transferDetail.date }}</h5>
                  </b-col>
                </b-row>
              </div>
              <div class="detail">
                <b-row>
                  <b-col cols="12">
                    <p>Notes</p>
                    <h5>{{ transferDetail.note }}</h5>
                  </b-col>
                </b-row>
              </div>
              <h5 class="mb-3">Transfer To</h5>
              <div class="detail-user">
                <b-row>
                  <b-col cols="2">
                    <img :src="port + getReceiver.image" alt="" />
                  </b-col>
                  <b-col cols="10">
                    <h6>
                      {{ getReceiver.first_name }} {{ getReceiver.last_name }}
                    </h6>
                    <p>{{ getReceiver.phone }}</p>
                  </b-col>
                </b-row>
              </div>
              <b-row class="mb-3 detail-btn">
                <b-col cols="6" class="text-right">
                  <!-- <div class="icon-share"> -->
                  <b-button variant="primary icon-share">
                    <b-icon icon="share" aria-hidden="true"></b-icon>
                  </b-button>
                  <!-- </div> -->
                </b-col>
                <b-col cols="3" class="btn-download text-right">
                  <b-button
                    variant="primary"
                    @click="generatePdf"
                    class="btn-download"
                  >
                    <b-icon icon="download" aria-hidden="true"></b-icon>
                    Download PDF
                  </b-button>
                </b-col>
                <b-col cols="3" class="btn-back text-right">
                  <router-link to="/home">
                    <b-button
                      class="btn-back"
                      variant="primary"
                      aria-hidden="true"
                      >Back To Home</b-button
                    >
                  </router-link>
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
import { mapGetters } from 'vuex'
import Jspdf from 'jspdf'
export default {
  name: 'Success',
  data() {
    return {
      port: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters(['transferDetail', 'user', 'getReceiver'])
  },
  components: {
    Header,
    Aside,
    Footer
  },
  methods: {
    generatePdf() {
      const doc = new Jspdf()
      doc.setFont('helvetica')
      doc.setFontSize(12)
      doc.text(
        ` Status: Success! \n \n Amount: Rp. ${
          this.transferDetail.amount
        }\n Balance left: Rp. ${
          this.user.balance - this.transferDetail.amount
        } \n Date & Time: ${this.transferDetail.date} \n Notes: ${
          this.transferDetail.note
        } \n \n Transfer to: \n Name: ${this.getReceiver.first_name} ${
          this.getReceiver.last_name
        } \n Phone: ${this.getReceiver.phone}`,
        15,
        15
      )

      doc.save('pdf.pdf')
    }
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
@media (max-width: 768px) {
  .main-sukses .btn-download button {
    font-size: 14px;
  }
  .main-sukses .btn-back button {
    padding: 20px 15px;
    font-size: 14px;
  }
  .main-sukses .detail-user h6 {
    margin-left: 25px;
  }
  .main-sukses .detail-user p {
    margin-left: 25px;
  }
}
@media (max-width: 576px) {
  .main-sukses .detail-user h6 {
    margin-left: 35px;
  }
  .main-sukses .detail-user p {
    margin-left: 35px;
  }
  .main-sukses .detail-user {
    margin: 10px 0 50px 0;
  }
  .main-sukses .btn-download button {
    position: absolute;
    left: -50px;
    margin-bottom: 50px;
    width: 100px;
  }
  .main-sukses .btn-back button {
    position: absolute;
    left: -10px;
    margin-bottom: 50px;
  }
  .main-sukses .icon-share {
    position: absolute;
    left: 0;
    top: 10px;
    margin-bottom: 50px;
  }
}
</style>
