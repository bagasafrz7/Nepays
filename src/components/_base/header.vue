<template>
  <div class="header">
    <header>
      <b-container>
        <b-row>
          <b-col cols="8">
            <div class="logo">
              <img src="../../assets/img/nepays-blue.png" alt="" />
            </div>
          </b-col>
          <b-col cols="4">
            <div class="header-info">
              <b-row>
                <b-col cols="2">
                  <img id="popover-3" :src="port + user.image" alt="" />
                </b-col>
                <b-col cols="7">
                  <h6>{{ user.first_name }} {{ user.last_name }}</h6>
                  <p>{{ user.phone }}</p>
                </b-col>
                <b-col cols="3">
                  <img
                    style="width: 30px; height: 30px; margin: 10px auto"
                    src="../../assets/img/bell.png"
                    alt=""
                  />
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      port: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {}
}
</script>

<style scoped>
.header {
  height: 100px;
}
.header .logo img {
  margin-top: -15px;
  width: 150px;
  height: 150px;
}
.header .header-info {
  padding: 25px 0;
}
.header .header-info img {
  border-radius: 10px;
  width: 52px;
  height: 52px;
}
.header .header-info h6 {
  color: #3a3d42;
  text-decoration: none !important;
}
.header .header-info p {
  color: #3a3d42;
  text-decoration: none !important;
}
.header .header-info a:hover {
  text-decoration: none;
}
</style>
