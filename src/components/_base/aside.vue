<template>
  <div class="aside">
    <b-row>
      <b-col cols="12">
        <b-row class="nav">
          <b-col cols="2" class="img">
            <router-link to="/home">
              <b-icon icon="grid"></b-icon>
            </router-link>
          </b-col>
          <b-col cols="9">
            <router-link to="/home">
              <h3 class="ml-3">Dashboard</h3>
            </router-link>
          </b-col>
        </b-row>
        <b-row class="nav">
          <b-col cols="2" class="img">
            <routerLink to="/transfer">
              <b-icon icon="arrow-up"></b-icon>
            </routerLink>
          </b-col>
          <b-col cols="9">
            <router-link to="/transfer">
              <h3 class="ml-3">Transfer</h3>
            </router-link>
          </b-col>
        </b-row>
        <b-row class="nav">
          <b-col cols="2" class="img">
            <router-link to="/top-up">
              <b-icon icon="plus"></b-icon>
            </router-link>
          </b-col>
          <b-col cols="9">
            <router-link to="/top-up">
              <h3 class="ml-3">Top Up</h3>
            </router-link>
          </b-col>
        </b-row>
        <b-row class="nav">
          <b-col cols="2" class="img">
            <router-link to="/profile">
              <b-icon icon="person"></b-icon>
            </router-link>
          </b-col>
          <b-col cols="9">
            <router-link to="/profile">
              <h3 class="ml-3">Profile</h3>
            </router-link>
          </b-col>
        </b-row>
        <b-row class="logout">
          <b-col cols="2" class="img">
            <b-icon icon="box-arrow-right" @click="logoutBtn"></b-icon>
          </b-col>
          <b-col cols="9">
            <h3 @click="logoutBtn" class="ml-3">Logout</h3>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Aside',
  data() {
    return {}
  },
  methods: {
    ...mapActions(['logout']),
    logoutBtn() {
      this.$swal
        .fire({
          title: 'logout account ?',
          icon: 'warning',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: 'Cancel'
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$swal.fire('See you again!', '', 'success')
            this.logout()
          }
        })
    }
  }
}
</script>

<style scoped>
.aside {
  background: #fff;
  padding: 30px 40px;
  margin: 50px 0;
  border-radius: 20px;
  height: 660px;
}
.aside .b-icon.bi {
  font-size: 28px;
  color: #3a3d42;
}
.aside h3 {
  color: #3a3d42;
  font-size: 18px;
  margin-left: 5px;
  margin-top: 5px;
}
.aside .nav {
  padding: 15px 0px;
  cursor: pointer;
}
.aside .logout {
  margin-top: 300px;
  cursor: pointer;
}
.aside a:hover {
  text-decoration: none;
}

@media (max-width: 768px) {
  .aside {
    padding: 20px 0px;
  }
  .aside .nav {
    padding: 15px 0px;
  }
  .aside .b-icon.bi {
    font-size: 16px;
    margin-left: 15px;
  }
  .aside h3 {
    font-size: 16px;
    margin-left: 15px;
  }
}

@media (max-width: 576px) {
  .aside {
    margin: 50px 0 0 0;
  }
  .aside .logout {
    margin-top: 25px;
  }
  .aside {
    height: 340px;
  }

  .img {
    margin-left: 20px;
    margin-right: -30px;
    margin-top: 3px;
  }

  .nav {
    margin-top: -10px;
  }
}
</style>
