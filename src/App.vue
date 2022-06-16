<template>
  <div class="box"></div>
  <img v-lazy="img_url1" class="img" />
  <div class="box"></div>
  <img v-lazy="img_url2" class="img" />
</template>

<script setup>
const img_url1 = "https://www.runoob.com/wp-content/uploads/2015/02/011500266295799.jpg"
const img_url2 = "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/newfanyi-da0cea8f7e.png"
</script>

<style lang="scss">
.box {
  width: 200px;
  height: 1200px;
  background-color: chocolate;
}
.img {
  width: 200px;
  height: 200px;
}
</style>
