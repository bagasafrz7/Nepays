<template>
  <div class="aside">
    <b-row>
      <b-col cols="12">
        <b-row class="nav">
          <b-col cols="2">
            <b-icon icon="grid"></b-icon>
          </b-col>
          <b-col cols="10">
            <h3>Dashboard</h3>
          </b-col>
        </b-row>
        <b-row class="nav">
          <b-col cols="2">
            <b-icon icon="arrow-up"></b-icon>
          </b-col>
          <b-col cols="10">
            <h3>Transfer</h3>
          </b-col>
        </b-row>
        <b-row class="nav">
          <b-col cols="2">
            <b-icon icon="plus"></b-icon>
          </b-col>
          <b-col cols="10">
            <h3>Top Up</h3>
          </b-col>
        </b-row>
        <b-row class="nav">
          <b-col cols="2">
            <b-icon icon="person"></b-icon>
          </b-col>
          <b-col cols="10">
            <h3>Profile</h3>
          </b-col>
        </b-row>
        <b-row class="logout">
          <b-col cols="2">
            <b-icon icon="box-arrow-right"></b-icon>
          </b-col>
          <b-col cols="10">
            <h3>Logout</h3>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Aside'
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
</style>
