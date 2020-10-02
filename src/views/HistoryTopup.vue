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
            <div class="main-topup">
              <b-container>
                <h3 class="mb-4" style="font-size: 18px; font-weight: 700">
                  Top-up History
                </h3>
              </b-container>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

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

<script>
import Aside from '../components/_base/aside'
import Footer from '../components/_base/footer'
import Header from '../components/_base/header'
export default {
  name: 'Topup-history',
  components: {
    Aside,
    Header,
    Footer
  }
}
</script>
