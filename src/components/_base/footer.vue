<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col cols="3">
          <p>&copy; 2020 NePays. All Right Reserved.</p>
        </b-col>
        <b-col cols="9">
          <b-row>
            <b-col cols="9">
              <p class="text-right">+62 5637 8882 9901</p>
            </b-col>
            <b-col cols="3">
              <p class="text-right">contact@nepays.com</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #6379f4;
  padding: 30px 0 20px 0;
  color: #fff;
}
</style>
