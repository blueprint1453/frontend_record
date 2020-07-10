<template>
  <div class="carousel-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HetCarouselItem',
  componentName: 'HetCarouselItem',
  methods: {
    setPosition(index, activeIdex, oldActiveIndex) {
      let width = this.$el.offsetWidth
      let tranlateX = width * (index - activeIdex)
      this.$el.style.transform = `translateX(${tranlateX + 'px'}) scale(1.0)`
    }
  }
}
</script>