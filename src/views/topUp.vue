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
              <h2>Top Up</h2>
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
</style>
