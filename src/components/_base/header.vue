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
                <b-col
                  cols="3"
                  style="display: relative; cursor: pointer"
                  class="img-icon"
                >
                  <img
                    id="popover-5"
                    style="width: 30px; height: 30px; margin: 10px auto"
                    src="../../assets/img/bell.png"
                    alt=""
                    @click="seenNotif"
                  />
                  <b-popover
                    target="popover-5"
                    triggers="click"
                    placement="top"
                  >
                    <template v-slot:title>Notification</template>
                    <div
                      style="height: 150px; overflow-x: hidden"
                      v-if="notifications"
                    >
                      <div v-for="(value, index) in notifications" :key="index">
                        <p>
                          {{ value.message }} |
                          {{ value.created_at.slice(0, 10) }}
                        </p>
                        <hr />
                      </div>
                    </div>
                  </b-popover>
                  <div v-if="notifications" class="notif">{{ unseen }}</div>
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
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  created() {
    // this.getNotification(this.user.id)
    this.notification()
  },
  name: 'Header',
  data() {
    return {
      port: process.env.VUE_APP_URL,
      unseen: '',
      notifications: []
    }
  },
  computed: {
    ...mapGetters(['user'])
  },

  methods: {
    ...mapActions(['patchNotification', 'patchNotification']),
    notification() {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}notification/${this.user.id}`)
          .then((res) => {
            this.unseen = res.data.data.unseen
            this.notifications = res.data.data.notifications
          })
          .catch((err) => {
            resolve(err.response.data.msg)
          })
      })
    },
    seenNotif() {
      this.patchNotification(this.user.id)
    }
  }
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

.notif {
  position: absolute;
  background: red;
  font-size: 10px;
  color: #eee;
  text-align: center;
  font-weight: bold;
  width: 24.5px;
  padding: 2px 3px;
  border-radius: 50%;
  top: 0;
  left: 37px;
}

@media (max-width: 768px) {
  .header .header-info h6 {
    margin-left: 20px;
  }
  .header .header-info p {
    margin-left: 20px;
  }
}

@media (max-width: 576px) {
  .header .logo img {
    display: none;
  }
  .header .header-info img {
    margin-left: -225px;
  }
  .header .header-info h6 {
    position: absolute;
    left: -200px;
  }
  .header .header-info p {
    position: absolute;
    left: -200px;
    top: 30px;
  }
  .header .header-info .img-icon img {
    position: absolute;
    top: -50px;
  }
  .notif {
    position: absolute;
    top: -50px;
    left: 37px;
  }
}
</style>
