import Loading from './main.vue'
import { addClass, removeClass, getStyle } from '../../../utils/dom'
import PopupManager from '../../../utils/popup-manager';

const loadingDirective = {}

loadingDirective.install = Vue => {
  const LoadingCtor = Vue.extend(Loading)
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        let originalPosition = getStyle(el, 'position')
        let originalOverflow = getStyle(el, 'overflow')
        let maskParent
        if (binding.modifiers.fullscreen) {
          maskParent = document.body
        } else {
          maskParent = el
        }
        if (originalPosition !== 'absolute' || originalPosition !== 'fixed') {
          addClass(maskParent, 'loading-parent--relative')
        }
        if (binding.modifiers.fullscreen && binding.modifiers.lock) {
          addClass(maskParent, 'loading-parent--hidden')
        }
        el.mask.style.zIndex = PopupManager.nextZIndex()
        maskParent.appendChild(el.mask)
        el.domInserted = true
        el.instance.visible = true
      })
    } else {
      removeClass(parent, 'loading-parent--relative')
      removeClass(parent, 'loading-parent--hidden')
      el.instance.visible = false
    }
  }
  Vue.directive('loading', {
    bind(el, binding) {
      let loadingText = el.getAttribute('loading-text')
      let loadingBackground = el.getAttribute('loading-background')
      let loadingCustomClass = el.getAttribute('loading-custom-class')
      let loadingInstace = new LoadingCtor({
        el: document.createElement('div'),
        data: {
          text: loadingText,
          background: loadingBackground,
          customClass: loadingCustomClass,
          fullscreen: binding.modifiers.fullscreen
        }
      })
      el.instance = loadingInstace
      el.mask = loadingInstace.$el
      binding.value && toggleLoading(el, binding)
    },
    update(el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding)
      }
    },
    unbind(el, binding) {
      if (el.domInserted) {
        el.mask && el.mask.parentNode.removeChild(el.mask)
        toggleLoading(el, {value: false})
      }
      el.instance && el.instance.$destroy()
    }
  })
}

export default loadingDirective