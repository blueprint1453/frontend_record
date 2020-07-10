import CarouselItem from '../carousel/src/item.vue'

CarouselItem.install = function(Vue) {
  Vue.component(CarouselItem.name, CarouselItem)
}

export default CarouselItem