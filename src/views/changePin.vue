<template>
  <div class="change-pin">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
            <div class="main-pin">
              <b-row>
                <b-col cols="6">
                  <h2>Change PIN</h2>
                  <p>
                    Enter your current 6 digits Zwallet PIN below to continue to
                    the next steps.
                  </p>
                </b-col>
              </b-row>
              <b-form class="mt-5">
                <div class="otp">
                  <b-form-input
                    class="input-otp"
                    type="text"
                    maxLength="1"
                    id="input-2"
                    v-model="pin1"
                  ></b-form-input>
                  <b-form-input
                    class="input-otp"
                    type="text"
                    maxLength="1"
                    id="input-2"
                    v-model="pin2"
                  ></b-form-input>
                  <b-form-input
                    class="input-otp"
                    type="text"
                    maxLength="1"
                    id="input-2"
                    v-model="pin3"
                  ></b-form-input>
                  <b-form-input
                    class="input-otp"
                    type="text"
                    maxLength="1"
                    id="input-2"
                    v-model="pin4"
                  ></b-form-input>
                  <b-form-input
                    class="input-otp"
                    type="text"
                    maxLength="1"
                    id="input-2"
                    v-model="pin5"
                  ></b-form-input>
                  <b-form-input
                    class="input-otp"
                    type="text"
                    maxLength="1"
                    id="input-2"
                    v-model="pin6"
                  ></b-form-input>
                </div>
              </b-form>
              <b-button class="btn-login" block v-if="changePin"
                >Continue</b-button
              >
              <b-button class="btn-login" block v-else-if="changePin === false"
                >Change Pin</b-button
              >
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
  name: 'changePin',
  data() {
    return {
      changePin: true
    }
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
.main-pin {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
  overflow: auto;
}
.otp {
  display: grid;
  margin: 75px 200px;
  grid-template-columns: repeat(6, 38px);
  gap: 24px;
}
.input-otp {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  height: 50px;
}
.btn-login {
  width: 50%;
  margin-top: 100px;
  background-color: #dadada;
  border-color: #dadada;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  height: 47px;
  color: #88888f;
  font-size: 16px; /* */
  margin: 0 auto;
}
.btn-login:hover {
  background-color: #6379f4;
  border-color: #6379f4;
  color: #fff;
}
</style>
