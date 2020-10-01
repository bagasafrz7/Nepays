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
                  <img src="../../assets/img/users.png" alt="" />
                </b-col>
                <b-col cols="7">
                  <h6>Robert Chandler</h6>
                  <p>+62 8139 3877 7946</p>
                </b-col>
                <b-col cols="3">
                  <b-icon icon="bell"></b-icon>
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
export default {
  name: 'Header'
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
.header .header-info p {
  color: #3a3d42;
}
</style>
