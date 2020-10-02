<template>
  <div class="topup">
    <Header />
    <main>
      <b-container>
        <b-row>
          <b-col cols="3">
            <Aside />
          </b-col>
          <b-col cols="9">
            <div class="main-topup">
              <b-row>
                <b-col cols="6">
                  <h2>Top Up</h2>
                </b-col>
                <b-col cols="6" class="text-right">
                  <router-link to="/history-topup">
                    <h5 class="mt-2">See All History Top Up</h5>
                  </router-link>
                </b-col>
              </b-row>
              <b-row class="ml-1 mt-5">
                <p>Top Up Now!</p>
              </b-row>
              <b-row class="ml-1 mb-5">
                <p>So that your life becomes easier</p>
              </b-row>
              <b-row class="ml-1">
                <b-form style="margin: auto">
                  <b-form-input
                    class="form-transfer"
                    type="text"
                    maxLength="10"
                    placeholder="0.00"
                  ></b-form-input>
                </b-form>
              </b-row>
              <b-row>
                <b-button class="btn-continue ml-auto">Continue</b-button>
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
  name: 'Topup',
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
.main-topup {
  background: #fff;
  margin: 50px 0 0 0;
  padding: 30px;
  border-radius: 20px;
  height: 660px;
}
a:hover {
  text-decoration: none;
}
.form-transfer {
  margin: auto;
  width: 300px;
  height: 56px;
  font-weight: bold;
  font-size: 42px;
  text-align: center;
  border: white;
}
.btn-continue {
  background-color: #6379f4;
  border-color: #6379f4;
  width: 120px;
  height: 47px;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border-radius: 12px;
  margin-top: 50px;
}
.btn-continue:hover {
  background-color: #586de4;
  border-color: #586de4;
}
</style>
