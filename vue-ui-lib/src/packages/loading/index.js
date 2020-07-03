import service from './src/main.js'
import loadingDirective from './src/directive.js';
export default {
  install(Vue) {
    Vue.prototype.$loading = service
    Vue.use(loadingDirective)
  },
  service
}