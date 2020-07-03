<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/list">List</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/file">File upload</router-link>
    </div>
    <!-- <Carousel el-loading-text="呵呵"></Carousel> -->
    <div 
      class="loading-container"
      v-loading.fullscreen.lock="loading"
      loading-text="加载中..."
      loading-background="rgba(0,0,0,.3)"
     >
     <div style="height:400px; font-size:48px">loading container content</div>
      <!-- <div class="loading-container-inner">
        <div style="height:400px; font-size:48px">loading container content</div>
      </div> -->
    </div>
    <div style="height:400px;padding-top:160px;text-align:center">
       <button @click="showLoading">loading</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Carousel from './components/Carousel'
export default {
  data() { 
    return {
      loading: false
    }
  },
  name: 'app',
  components: {
    Carousel
  },
  created() {
    console.log(this.$router)
  },
  mounted() {
    // setTimeout(()=>  {
    //   let loading = this.$loading({
    //     text: '加载中',
    //     lock: true,
    //     // target: '.loading-container'
    //   })
      
    //   setTimeout(() => {
    //     loading.close()
    //   }, 8000)
    // }, 1000)

    // setTimeout(() => {
    //   this.loading = true
    //   setTimeout(() => {
    //     this.loading = false
    //     setTimeout(() => {
    //     this.loading = true
    //     setTimeout(() => {
    //     this.loading = false
    //   }, 4000)
    //   }, 4000)
    //   }, 6000)
    // }, 2000);
  },
  methods: {
    showLoading() {
      this.loading = true
      let loading = this.$loading({
        text: '加载中',
        lock: true,
        target: '.loading-container'
      })
      setTimeout(() => loading.close(), 8000)
    },
    linkto(path, e) {
      e.preventDefault();
      
      console.log('linkto ', path)
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('./style/test.scss');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav {
  text-align: center;
  a {
    display: inline-block;
    color: #3a86f8;
    width: 100px;
    cursor: pointer;
    font-size: 16px;
  }
}
 .loading-container {
    height: 120px;
    width: 800px;
    margin: 0 auto;
    background: #cbdbf3;
    .loading-container-inner {
      height: 100%;
      overflow: auto;
    }
  }
</style>
