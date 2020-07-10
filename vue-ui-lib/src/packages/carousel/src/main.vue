<template>
  <div 
    class="carousel"
    :class="{
      'carousel--horizontal': direction === 'horizontal',
      'carousel--vertical': direction === 'vertical',
    }"
    @mouseenter="onCarouselMouseenter"
    @mouseleave="onCarouselMouseleave"
  >
    <div class="carousel__content" :style="{height: height + 'px'}" >
      <span
        v-show="showArrow || arrow === 'always'"
        class="carousel__arrow carousel__arrow--left"
        @click.prevent.stop="prevCarouselItem"
      >
        <span>&lt;</span>
      </span>
      <span
        v-show="showArrow || arrow === 'always'"
        class="carousel__arrow carousel__arrow--right"
        @click.prevent.stop="nextCarouselItem"
      >
        <span>&gt;</span>
      </span>
      <slot></slot>
    </div>
    <ul 
      class="carousel_indicators"
      :class="{
        'carousel_indicators--horizontal': direction === 'horizontal',
        'carousel_indicators--vertical': direction === 'vertical',
        'carousel_indicators--outside': type === 'outside',
      }"
    >
      <li
        :class="['carousel_indicator', {'is-active': activeIndex === item - 1}]"
        v-for="item in count"
        :key="item"
        @click.prevent.stop="showCarouselItem(item - 1)"
      >
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HetCarousel',
  componentName: 'HetCarousel',
  data() {
    return {
      count: 0,
      showArrow: false,
      activeIndex: 0,
      timer: null,
    }
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1
      }
    },
    height: Number,
    interval: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: String,
      default: 'hover',
      validator(val) {
        return ['hover', 'always', 'never'].indexOf(val) !== -1
      }
    },
    indicatorPosition: {
      type: String,
      default: 'outside',
      validator(val) {
        return ['outside', 'inside', 'none'].indexOf(val) !== -1
      }
    },
    type: {
      type: String,
      default: 'normal',
      validator(val) {
        return ['normal', 'card'].indexOf(val) !== -1
      }
    }
  },
  computed: {},
  watch: {
    activeIndex(val, olval) {

    }
  },
  mounted() {
    let items = this.$children.filter(child => child.$options.componentName === 'HetCarouselItem')
    this.count = items.length
    console.log(items)
    items.forEach((item, i) => {
      item.setPosition(i, this.activeIndex)
    })
    // this.autoplay && this.autoplayFn()
  },
  methods: {
    initStyle(carsoullist) {
      let index = this.activeIndex
      let width = this.$el.offsetWidth
      carsoullist.forEach((item, i) => {
        let tranlateX = width * (i - index)
        item.style.transform = `translateX(${tranlateX + 'px'}) scale(1.0)`
      })
    },
    autoplayFn() {
      this.timer && clearInterval(this,timer)
      this.timer = setInterval(() => {
        if (this.activeIndex === this.count - 1) {
          this.activeIndex = 0
        } else {
          this.activeIndex++
        }
      }, this.duration)
    },
    onCarouselMouseenter() {
      if (this.indicatorPosition === 'hover') {
        this.showArrow = true
      }
    },
    onCarouselMouseleave() {
      if (this.indicatorPosition === 'hover') {
        this.showArrow = false
      }
    },
    showCarouselItem(i) {
      this.activeIndex = i
    },
    prevCarouselItem() {
      if (this.activeIndex > 0) {
        this.activeIndex = this.activeIndex - 1
      } else {
        this.activeIndex = this.count - 1
      }
    },
    nextCarouselItem() {
      if (this.activeIndex > this.count - 1) {
        this.activeIndex = this.activeIndex + 1
      } else {
        this.activeIndex = this.count - 1
      }
    },
  }
}
</script>