<template>
  <div class="amount">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
            <div class="main-amount">
              <h2>Transfer Money</h2>
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
                <b-col cols="6">
                  <p style="color: #7a7886">
                    Type the amount you want to transfer and then press continue
                    to the next steps.
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <div class="detail-transfer text-center">
                    <b-form-input
                      type="number"
                      class="input-total mb-4"
                      placeholder="   000.000"
                    ></b-form-input>
                    <p class="mb-4">Rp120.000 Available</p>
                    <b-form-input
                      type="text"
                      class="input-notes mb-4"
                      placeholder="For buying some socks"
                    ></b-form-input>
                    <b-icon icon="pencil"></b-icon>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <b-button variant="primary" class="btn-continue"
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
  </div>
</template>

<script>
import Header from '../components/_base/header'
import Aside from '../components/_base/aside'
import Footer from '../components/_base/footer'
export default {
  name: 'Amount',
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
.main-amount {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
}
.main-amount .detail-user {
  margin: 10px 0 30px 0;
  padding: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
}
.main-amount .detail-user img {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}
.main-amount .detail-transfer {
  padding: 20px 0;
}
.main-amount .detail-transfer .input-total {
  width: 20%;
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  margin: 0 auto;
  color: #6379f4;
}
.b-icon.bi {
  position: absolute;
  /* top: 0; */
  bottom: 55px;
  color: #6379f4;
  left: 210px;
}
.main-amount .detail-transfer .input-notes {
  width: 50%;
  border-radius: 0px;
  border: none;
  border-bottom: 1px solid grey;
  margin: 0 auto;
  color: #6379f4;
  padding: 10px 25px;
}
.main-amount .btn-continue {
  padding: 10px 25px;
  background: #6379f4;
  margin-top: 50px;
  float: right;
}
</style>
