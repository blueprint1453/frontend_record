<template>
  <div class="hl-carousel">
    <div class="hl-carousel-list">
      <div v-for="(item, i) in carousellist" :key="i" class="carousel-item" :class="{active: activeIndex === i}">
        <div class="carousel-item-content">
          <div class="desc">
            <h2>关于恒链</h2>
            <div class="desc-text">
              <p>一站式可视化物流SAAS服务提供商</p>
              <p>RPA机器人流程自动化   复杂的操作简单化</p>
            </div>
            <div class="btn">免费试用</div>
          </div>
          <div class="img"></div>
        </div>
      </div>
    </div>
    <ul class="slick-dots">
      <li 
        v-for="(item, i) in carousellist"
        :key="i"
        class="dot"
        :class="{active: activeIndex === i}"
        @click="handleDotClick(i)"
      >
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      activeIndex: 0,
      carousellist: [
        {},
        {},
        {}
      ]
    }
  },
  mounted() {
    this.AutoBroadCast()
  },
  methods: {
    AutoBroadCast() {
      this.timer && clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.setNextActiveIndex()
      }, 8000)
    },
    handleDotClick(i) {
      this.activeIndex = i
      this.AutoBroadCast()
    },
    setNextActiveIndex() {
      let index = this.activeIndex
      if (index >= this.carousellist.length) {
        this.activeIndex = 0
      } else {
        ++this.activeIndex
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes progress {
    0% {
      width: 5%;
    }
    100% {
      width: 100%;
    }
  } 
  .hl-carousel {
    position: relative;
    width: 100%;
    .hl-carousel-list {
       position: relative;
       height: 432px;
      .carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        &.active {
          z-index: 0;
        }
        &:nth-child(1) {
          background: lightpink;
        }
        &:nth-child(2) {
          background: lightgray;
        }
        &:nth-child(3) {
          background: lightblue;
        }
      }
      .carousel-item-content {
        display: flex;
        height: 100%;
        justify-content: space-between;
        .desc {
          align-self: center;
          h2 {
            font-size: 36px;
            color: #ebb624;
            margin-bottom: 30px;
          }
          .desc-text {
            font-size: 18px;
            margin-bottom: 30px;
            line-height: 24px;
          }
          .btn {
            width: 100px;
            height: 36px;
            background: #ebb624;
            color: #fff;
            border-radius: 3px;
            text-align: center;
            line-height: 36px;
          }
        }
        .img {
          height: 300px;
          width: 260px;
          background: #ebb624;
        }
      }
    }
    .slick-dots {
      position: absolute;
      left: 50%;
      bottom: 40px;
      transform: translateX(-50%);
      z-index: 1;
      display: flex;
      .dot {
        width: 54px;
        height: 16px;
        margin-right: 10px;
        cursor: pointer;
        span {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          width: 100%;
          height: 3px;
          background: #f3dfa7;
          cursor: pointer;
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            display: inline-block;
            height: 100%;
            width: 0;
            background: #ebb624;
          }          
        }
        
        &.active {
          span {
             &::before {
               animation: progress 8s linear;
             }
          }
        }
      }
    }
  }
</style>