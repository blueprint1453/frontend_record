<template>
  <div class="carousel-ex">
    <het-carousel arrow="always" >
      <het-carousel-item v-for="item in 4" :key="item">
        <h3>{{item}}</h3>
      </het-carousel-item>
    </het-carousel>
  </div>
</template>

<style lang="scss">
  .carousel-ex {
    width: 400px;
    margin: 30px auto;
    h3 {
      text-align: center;
      font-size: 20px;
      line-height: 100px;
    }
    .carousel-item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .carousel-item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
</style>