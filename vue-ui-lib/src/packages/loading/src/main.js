import Vue from 'vue'
import LoadingVue from './main.vue'
import { getStyle, addClass, removeClass } from '../../../utils/dom';
import PopupManager from '../../../utils/popup-manager';

/**
 * 滚动区域需要加载loading并且loading会开启lock时，loading组件直接父元素的样式不能为auto，scroll
 */

const defaults = {
  text: null,
  fullscreen: true,
  lock: false,
  visible: false,
}
// 全屏loading 全局只有一个
let fullscreenLoading;

const LoadingConstructor = Vue.extend(LoadingVue)

LoadingConstructor.prototype.close = function() {
  if (this.fullscreen) {
    fullscreenLoading = undefined;
  }
  const parent = this.$el.parentNode
  removeClass(parent, 'loading-parent--relative')
  removeClass(parent, 'loading-parent--hidden')
  parent.removeChild(this.$el)
  this.$destroy()

  this.visible = false
}

const addStyle = (vm, parent, options) => {
  let originalPosition = getStyle(parent, 'position')
  let originalOverflow = getStyle(parent, 'overflow')
  if (originalPosition !== 'absolute' || originalPosition !== 'fixed') {
    addClass(parent, 'loading-parent--relative')
  }
  if (options.fullscreen && options.lock && originalOverflow !== 'hidden') {
    addClass(parent, 'loading-parent--hidden')
  }
  // 设置z-index to do
  vm.$el.style.zIndex = PopupManager.nextZIndex()
}

const Loading = function (options = {}) {
  options = Object.assign({}, defaults, options)
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading;
  }
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target)
  }

  options.target = options.target || document.body

  if (options.target !== document.body) {
    options.fullscreen = false
  } else {
    options.fullscreen = true
  }

  let parent = options.target
  // 有两种方式  没有el就要调用mount方法 有el就不需要调用mount
  // let instance = new LoadingConstructor({
  //   data: options
  // }).$mount()
  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  })

  addStyle(instance, parent, options)

  parent.appendChild(instance.$el)
  Vue.nextTick(() => instance.visible = true)

  if (options.fullscreen) {
    fullscreenLoading = instance
  }
  return instance
}

export default Loading;