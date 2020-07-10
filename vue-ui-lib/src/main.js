import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import './packages/exporttest/use'
import Loading from './packages/loading/index'
import Message from './packages/message/index'
import Switch from './packages/switch/index'
import Carousel from './packages/carousel/index'
import CarouselItem from './packages/carousel-item/index'

// 引入全局样式
import './style/reset.css'
import './style/common.scss'
import './style/index.scss'

import './packages/styles/index.scss'

Vue.use(ElementUI);
Vue.use(Message)
Vue.use(Switch)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false
Vue.use(Loading)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
